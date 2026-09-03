const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RESEND_TIMEOUT_MS = 10_000;

const CANONICAL_ORIGINS = new Set([
  'https://noble-art-portesien.com',
  'https://www.noble-art-portesien.com',
]);

const rateBuckets = globalThis.__napContactRateBuckets ?? new Map();
globalThis.__napContactRateBuckets = rateBuckets;

function header(req, name) {
  const value = req.headers?.[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value;
}

function allowedOrigins() {
  const origins = new Set(CANONICAL_ORIGINS);

  if (process.env.NODE_ENV !== 'production') {
    origins.add('http://localhost:4321');
    origins.add('http://127.0.0.1:4321');
  }

  for (const origin of (process.env.CONTACT_ALLOWED_ORIGINS ?? '').split(',')) {
    const candidate = origin.trim();
    if (/^https?:\/\/[^/]+$/i.test(candidate)) origins.add(candidate);
  }

  return origins;
}

function setResponseHeaders(req, res) {
  const origin = header(req, 'origin');
  if (origin && allowedOrigins().has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Vary', 'Origin');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
}

function json(req, res, status, payload) {
  setResponseHeaders(req, res);
  return res.status(status).json(payload);
}

function requestOriginIsAllowed(req) {
  const origin = header(req, 'origin');
  if (origin && !allowedOrigins().has(origin)) return false;

  // Browsers send this header even when an extension strips Origin.
  return header(req, 'sec-fetch-site') !== 'cross-site';
}

function getClientIp(req) {
  const forwarded = header(req, 'x-forwarded-for');
  const value = forwarded?.split(',')[0]?.trim() || header(req, 'x-real-ip') || 'unknown';
  return String(value).slice(0, 96);
}

function consumeRateLimit(req) {
  const now = Date.now();

  if (rateBuckets.size > 500) {
    for (const [key, bucket] of rateBuckets) {
      if (bucket.resetAt <= now) rateBuckets.delete(key);
    }
  }

  const key = getClientIp(req);
  const current = rateBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

async function readJsonBody(req) {
  const declaredLength = Number(header(req, 'content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    const error = new Error('BODY_TOO_LARGE');
    error.code = 'BODY_TOO_LARGE';
    throw error;
  }

  let raw = req.body;

  if (raw === undefined) {
    const chunks = [];
    let length = 0;

    for await (const chunk of req) {
      const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      length += buffer.length;
      if (length > MAX_BODY_BYTES) {
        const error = new Error('BODY_TOO_LARGE');
        error.code = 'BODY_TOO_LARGE';
        throw error;
      }
      chunks.push(buffer);
    }

    raw = Buffer.concat(chunks).toString('utf8');
  }

  if (Buffer.isBuffer(raw)) raw = raw.toString('utf8');

  if (typeof raw === 'string') {
    if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
      const error = new Error('BODY_TOO_LARGE');
      error.code = 'BODY_TOO_LARGE';
      throw error;
    }
    raw = JSON.parse(raw);
  } else if (Buffer.byteLength(JSON.stringify(raw ?? null), 'utf8') > MAX_BODY_BYTES) {
    const error = new Error('BODY_TOO_LARGE');
    error.code = 'BODY_TOO_LARGE';
    throw error;
  }

  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new TypeError('INVALID_BODY');
  }

  return raw;
}

function firstOwnValue(body, keys) {
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(body, key)) return body[key];
  }
  return '';
}

function normalizeLine(value) {
  if (typeof value !== 'string') return '';
  return value
    .normalize('NFC')
    .replace(/[\u0000-\u001f\u007f-\u009f]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeMessage(value) {
  if (typeof value !== 'string') return '';
  return value
    .normalize('NFC')
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();
}

function hasConsent(value) {
  return value === true || ['true', '1', 'on', 'yes'].includes(String(value).toLowerCase());
}

function isEmail(value) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(value);
}

function validate(body) {
  const data = {
    name: normalizeLine(firstOwnValue(body, ['name', 'your-name'])),
    email: normalizeLine(firstOwnValue(body, ['email', 'your-email'])),
    phone: normalizeLine(firstOwnValue(body, ['phone', 'tel', 'tel-726'])),
    subject: normalizeLine(firstOwnValue(body, ['subject', 'your-subject'])),
    message: normalizeMessage(firstOwnValue(body, ['message', 'your-message'])),
    offer: normalizeLine(firstOwnValue(body, ['offer', 'offre'])),
    consent: hasConsent(firstOwnValue(body, ['rgpd', 'consent', 'acceptance-140'])),
    honeypot: normalizeLine(firstOwnValue(body, ['website', 'company', 'bot-field'])),
  };

  const errors = {};
  if (data.name.length < 2 || data.name.length > 100) {
    errors.name = 'Indiquez un nom compris entre 2 et 100 caractères.';
  }
  if (!isEmail(data.email)) {
    errors.email = 'Indiquez une adresse e-mail valide.';
  }
  if (data.phone.length > 32) {
    errors.phone = 'Le numéro de téléphone est trop long.';
  }
  if (data.subject.length < 3 || data.subject.length > 160) {
    errors.subject = 'Indiquez un sujet compris entre 3 et 160 caractères.';
  }
  if (data.message.length < 10 || data.message.length > 4_000) {
    errors.message = 'Le message doit contenir entre 10 et 4 000 caractères.';
  }
  if (data.offer.length > 180) {
    errors.offer = 'La référence de l’offre est trop longue.';
  }
  if (!data.consent) {
    errors.rgpd = 'Votre accord est nécessaire pour envoyer ce message.';
  }

  return { data, errors };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function createEmail(data) {
  const phone = data.phone || 'Non renseigné';
  const offer = data.offer || 'Non renseignée';
  const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br>');

  return {
    subject: `[Site Noble Art Portésien] ${data.subject}`,
    text: [
      'Nouveau message depuis noble-art-portesien.com',
      '',
      `Nom : ${data.name}`,
      `E-mail : ${data.email}`,
      `Téléphone : ${phone}`,
      `Offre : ${offer}`,
      `Sujet : ${data.subject}`,
      '',
      data.message,
      '',
      'Consentement RGPD : accepté',
    ].join('\n'),
    html: `
      <h1>Nouveau message depuis noble-art-portesien.com</h1>
      <dl>
        <dt>Nom</dt><dd>${escapeHtml(data.name)}</dd>
        <dt>E-mail</dt><dd>${escapeHtml(data.email)}</dd>
        <dt>Téléphone</dt><dd>${escapeHtml(phone)}</dd>
        <dt>Offre</dt><dd>${escapeHtml(offer)}</dd>
        <dt>Sujet</dt><dd>${escapeHtml(data.subject)}</dd>
      </dl>
      <h2>Message</h2>
      <p>${safeMessage}</p>
      <p><small>Consentement RGPD : accepté</small></p>
    `.trim(),
  };
}

async function sendWithResend(data) {
  const apiKey = process.env.RESEND_API_KEY;
  // Required after verifying the sending domain, for example:
  // Noble Art Portésien <contact@noble-art-portesien.com>
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = (process.env.CONTACT_TO_EMAIL || 'nobleartportesien@gmail.com').trim();

  if (!apiKey || !from || /[\r\n]/.test(from) || !isEmail(to)) {
    const error = new Error('CONTACT_NOT_CONFIGURED');
    error.code = 'CONTACT_NOT_CONFIGURED';
    throw error;
  }

  const email = createEmail(data);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error('[contact] Resend a refusé le message.', {
        status: response.status,
        requestId: response.headers.get('x-request-id') || undefined,
      });
      const error = new Error('EMAIL_PROVIDER_ERROR');
      error.code = 'EMAIL_PROVIDER_ERROR';
      throw error;
    }
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(req, res) {
  setResponseHeaders(req, res);

  if (req.method === 'OPTIONS') {
    if (!requestOriginIsAllowed(req)) {
      return json(req, res, 403, { ok: false, message: 'Origine de la requête refusée.' });
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '600');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return json(req, res, 405, { ok: false, message: 'Seules les requêtes POST sont acceptées.' });
  }

  if (!requestOriginIsAllowed(req)) {
    return json(req, res, 403, { ok: false, message: 'Origine de la requête refusée.' });
  }

  const mediaType = (header(req, 'content-type') || '').split(';', 1)[0].trim().toLowerCase();
  if (mediaType !== 'application/json') {
    return json(req, res, 415, {
      ok: false,
      message: 'Le corps de la requête doit être envoyé au format JSON.',
    });
  }

  const rateLimit = consumeRateLimit(req);
  if (!rateLimit.allowed) {
    res.setHeader('Retry-After', String(rateLimit.retryAfter));
    return json(req, res, 429, {
      ok: false,
      message: 'Trop de tentatives. Réessayez dans quelques minutes.',
    });
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (error) {
    if (error?.code === 'BODY_TOO_LARGE') {
      return json(req, res, 413, {
        ok: false,
        message: 'Le message dépasse la taille maximale autorisée.',
      });
    }
    return json(req, res, 400, { ok: false, message: 'Le JSON envoyé est invalide.' });
  }

  const { data, errors } = validate(body);

  // Answering success to a bot avoids teaching it how the trap works.
  if (data.honeypot) {
    return json(req, res, 200, {
      ok: true,
      message: 'Votre message a bien été envoyé. Nous vous répondrons dès que possible.',
    });
  }

  if (Object.keys(errors).length > 0) {
    return json(req, res, 422, {
      ok: false,
      message: 'Certains champs doivent être corrigés.',
      errors,
    });
  }

  try {
    await sendWithResend(data);
  } catch (error) {
    if (error?.code === 'CONTACT_NOT_CONFIGURED') {
      console.error('[contact] Variables d’environnement e-mail absentes ou invalides.');
      return json(req, res, 503, {
        ok: false,
        message: 'Le formulaire est momentanément indisponible. Contactez directement le club par e-mail.',
      });
    }

    if (error?.name === 'AbortError') {
      console.error('[contact] Délai de réponse du service e-mail dépassé.');
    } else if (error?.code !== 'EMAIL_PROVIDER_ERROR') {
      console.error('[contact] Échec inattendu du service e-mail.');
    }

    return json(req, res, 502, {
      ok: false,
      message: 'Le message n’a pas pu être envoyé. Réessayez plus tard ou écrivez directement au club.',
    });
  }

  return json(req, res, 200, {
    ok: true,
    message: 'Votre message a bien été envoyé. Nous vous répondrons dès que possible.',
  });
}
