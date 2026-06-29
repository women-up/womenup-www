export const config = { runtime: "edge" };

const CAREER_LABELS: Record<string, string> = {
  firma: "Buduję własną firmę / Startup",
  kariera: "Rozwijam karierę zawodową",
  zmiana: "Szukam nowej ścieżki / Jestem w procesie zmiany",
  inne: "Inne",
};

const MODULE_LABELS: Record<string, string> = {
  blok1: "Blok I: Glow up & Smart wardrobe",
  blok2: "Blok II: Psychologia – Spokój i pewność siebie",
  blok3: "Blok III: Biznes – Plan lotu",
  blok4: "Blok IV: Social Media – Warsztat rolek",
  blok6: "Blok VI: Relax & Ruch – Pilates z psami",
};

const PILATES_LABELS: Record<string, string> = {
  mata: "Ćwiczy na macie",
  "wlasny-pies": "Zabiera własnego psa (#RatujPSA)",
  "bez-psa": "Ćwiczy bez psa",
};

const SOCIAL_LABELS: Record<string, string> = { tak: "Tak", nie: "Nie" };

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Women Up! <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "womenup.inicjatywaspoleczna@gmail.com";
const MIN_FILL_MS = 3000; // time-trap: odrzuć zgłoszenia wysłane zbyt szybko

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

// E-mail potwierdzający wysyłany do Uczestniczki, z danymi do przelewu.
function buildConfirmationHtml(name: string): string {
  const safeName = escapeHtml(name);
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #222; line-height: 1.6; max-width: 560px;">
      <p>Dzień dobry,</p>
      <p>dziękujemy za zapis na wydarzenie <strong>LEVEL UP: Kobieta</strong>, które odbędzie się
      26 lipca 2026 r. w Hotelu Mercure Białystok.</p>
      <p>Aby potwierdzić udział, prosimy o dokonanie płatności przelewem tradycyjnym zgodnie z poniższymi danymi:</p>
      <h3 style="margin: 24px 0 8px;">Dane do przelewu</h3>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr><td style="padding: 2px 12px 2px 0;"><strong>Odbiorca:</strong></td><td>Prestige Event House sp. z o.o.</td></tr>
        <tr><td style="padding: 2px 12px 2px 0;"><strong>Bank:</strong></td><td>PKO Bank Polski</td></tr>
        <tr><td style="padding: 2px 12px 2px 0;"><strong>Numer rachunku:</strong></td><td>88 1020 1332 0000 1102 1689 1500</td></tr>
        <tr><td style="padding: 2px 12px 2px 0;"><strong>Kwota:</strong></td><td>250,00 zł</td></tr>
        <tr><td style="padding: 2px 12px 2px 0;"><strong>Tytuł przelewu:</strong></td><td>LEVEL UP KOBIETA – ${safeName}</td></tr>
        <tr><td style="padding: 2px 12px 2px 0;"><strong>Termin płatności:</strong></td><td>do 23.07.2026 r.</td></tr>
      </table>
      <p style="margin-top: 24px;">Przesłanie formularza zgłoszeniowego nie jest równoznaczne z potwierdzeniem miejsca na wydarzeniu.
      Miejsce na wydarzeniu zostaje potwierdzone po zaksięgowaniu pełnej opłaty za udział.</p>
      <p>Po zaksięgowaniu wpłaty prześlemy potwierdzenie uczestnictwa.</p>
      <p>W razie pytań pozostajemy do dyspozycji pod adresem:<br />
      <a href="mailto:womenup.inicjatywaspoleczna@gmail.com">womenup.inicjatywaspoleczna@gmail.com</a></p>
      <p>Pozdrawiamy,<br />Women Up! Inicjatywa Społeczna</p>
    </div>
  `;
}

function buildConfirmationText(name: string): string {
  return [
    "Dzień dobry,",
    "",
    "dziękujemy za zapis na wydarzenie LEVEL UP: Kobieta, które odbędzie się 26 lipca 2026 r. w Hotelu Mercure Białystok.",
    "",
    "Aby potwierdzić udział, prosimy o dokonanie płatności przelewem tradycyjnym zgodnie z poniższymi danymi:",
    "",
    "Dane do przelewu",
    "",
    "Odbiorca: Prestige Event House sp. z o.o.",
    "Bank: PKO Bank Polski",
    "Numer rachunku: 88 1020 1332 0000 1102 1689 1500",
    "Kwota: 250,00 zł",
    `Tytuł przelewu: LEVEL UP KOBIETA – ${name}`,
    "Termin płatności: do 23.07.2026 r.",
    "",
    "Przesłanie formularza zgłoszeniowego nie jest równoznaczne z potwierdzeniem miejsca na wydarzeniu.",
    "Miejsce na wydarzeniu zostaje potwierdzone po zaksięgowaniu pełnej opłaty za udział.",
    "",
    "Po zaksięgowaniu wpłaty prześlemy potwierdzenie uczestnictwa.",
    "",
    "W razie pytań pozostajemy do dyspozycji pod adresem:",
    "womenup.inicjatywaspoleczna@gmail.com",
    "",
    "Pozdrawiamy,",
    "Women Up! Inicjatywa Społeczna",
  ].join("\n");
}

// Wysyła potwierdzenie do Uczestniczki. Nie blokuje rejestracji — błąd jest
// logowany (np. gdy domena nadawcy nie jest jeszcze zweryfikowana w Resend).
async function sendConfirmationEmail(apiKey: string, to: string, name: string): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      reply_to: TO_EMAIL,
      subject: "LEVEL UP: Kobieta – potwierdzenie zgłoszenia i dane do przelewu",
      html: buildConfirmationHtml(name),
      text: buildConfirmationText(name),
    }),
  });
  if (!res.ok) throw new Error(`Resend confirmation error: ${await res.text()}`);
}

interface RegistrationPayload {
  name?: string;
  phone?: string;
  email?: string;
  careerPath?: string;
  careerOther?: string;
  modules?: string[];
  socialSupport?: string;
  pilates?: string;
  promiseCircle?: boolean;
  acceptRegulamin?: boolean;
  website?: string; // honeypot
  elapsedMs?: number;
  turnstileToken?: string;
}

// ---- Google Sheets (Edge-compatible: Web Crypto JWT → OAuth → Sheets API) ----

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const b64 = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s+/g, "");
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

function base64urlFromBytes(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64urlFromString(s: string): string {
  return base64urlFromBytes(new TextEncoder().encode(s));
}

async function getGoogleAccessToken(clientEmail: string, privateKeyPem: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64urlFromString(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64urlFromString(
    JSON.stringify({
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    }),
  );
  const signingInput = `${header}.${claim}`;

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(privateKeyPem),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(signingInput),
  );
  const jwt = `${signingInput}.${base64urlFromBytes(new Uint8Array(signature))}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`Google token error: ${await res.text()}`);
  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Google token missing access_token");
  return data.access_token;
}

// Dopisuje wiersz do arkusza. Nie rzuca dalej — błąd jest logowany, ale nie
// blokuje rejestracji (e-mail pozostaje głównym kanałem zapisu).
async function appendToSheet(row: string[]): Promise<void> {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!clientEmail || !privateKey || !sheetId) return; // nie skonfigurowano

  const token = await getGoogleAccessToken(clientEmail, privateKey);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append` +
    `?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ values: [row] }),
  });
  if (!res.ok) throw new Error(`Sheets append error: ${await res.text()}`);
}

async function verifyTurnstile(token: string | undefined, remoteIp: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile not configured yet — don't block
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: remoteIp }),
    });
    const outcome = (await res.json()) as { success?: boolean };
    return outcome.success === true;
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return false;
  }
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Serwer nie jest skonfigurowany" }, { status: 500 });
  }

  let p: RegistrationPayload;
  try {
    p = await request.json();
  } catch {
    return Response.json({ error: "Nieprawidłowe dane" }, { status: 400 });
  }

  // Anti-spam: honeypot — boty wypełniają ukryte pole.
  if (p.website && p.website.trim() !== "") {
    return Response.json({ success: true }); // udajemy sukces, nie wysyłamy
  }

  // Anti-spam: time-trap — formularz wypełniony nierealnie szybko.
  if (typeof p.elapsedMs === "number" && p.elapsedMs < MIN_FILL_MS) {
    return Response.json({ success: true });
  }

  // Anti-spam: Cloudflare Turnstile (jeśli skonfigurowany TURNSTILE_SECRET_KEY).
  const remoteIp = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "";
  const turnstileOk = await verifyTurnstile(p.turnstileToken, remoteIp);
  if (!turnstileOk) {
    return Response.json({ error: "Weryfikacja antyspam nie powiodła się" }, { status: 400 });
  }

  const name = (p.name || "").trim();
  const phone = (p.phone || "").trim();
  const email = (p.email || "").trim();

  if (!name || !phone || !email) {
    return Response.json({ error: "Brak wymaganych pól" }, { status: 400 });
  }
  if (!p.promiseCircle || !p.acceptRegulamin) {
    return Response.json({ error: "Wymagane zgody nie zostały zaznaczone" }, { status: 400 });
  }

  const careerLabel =
    p.careerPath === "inne"
      ? `Inne: ${(p.careerOther || "").trim() || "(nie podano)"}`
      : CAREER_LABELS[p.careerPath || ""] || "(nie wybrano)";
  const modulesLabel =
    (p.modules || []).map((m) => MODULE_LABELS[m] || m).join(", ") || "(nie wybrano)";
  const socialLabel = SOCIAL_LABELS[p.socialSupport || ""] || "(nie wybrano)";
  const pilatesLabel = PILATES_LABELS[p.pilates || ""] || "(nie wybrano)";

  // Trwała lista: dopisz wiersz do Google Sheets (nie blokuje rejestracji).
  // Kolejność kolumn: Data | Imię i nazwisko | Telefon | E-mail | Droga zawodowa |
  // Moduły | Wsparcie rolka | Pilates | Obietnica Kręgu | Regulamin | Wizerunek
  try {
    await appendToSheet([
      new Date().toISOString(),
      name,
      phone,
      email,
      careerLabel,
      modulesLabel,
      socialLabel,
      pilatesLabel,
      p.promiseCircle ? "Tak" : "Nie",
      p.acceptRegulamin ? "Tak" : "Nie",
    ]);
  } catch (err) {
    console.error("Google Sheets append failed:", err);
  }

  const html = `
    <h2>Nowa rejestracja — LEVEL UP: Kobieta (26.07.2026)</h2>
    <h3>Informacje podstawowe</h3>
    ${row("Imię i nazwisko", name)}
    ${row("Telefon", phone)}
    ${row("E-mail", email)}
    ${row("Droga zawodowa", careerLabel)}
    <h3>Obecność w programie</h3>
    ${row("Moduły", modulesLabel)}
    ${row("Wsparcie przy rolce (Social Media)", socialLabel)}
    ${row("Pilates z psami", pilatesLabel)}
    <h3>Zgody</h3>
    ${row("Obietnica Kręgu", p.promiseCircle ? "Tak" : "Nie")}
    ${row("Regulamin i Polityka Prywatności", p.acceptRegulamin ? "Zaakceptowano" : "Nie")}
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Rejestracja LEVEL UP] ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return Response.json({ error: "Nie udało się wysłać zgłoszenia" }, { status: 502 });
    }

    // Potwierdzenie do Uczestniczki z danymi do przelewu (nie blokuje rejestracji).
    try {
      await sendConfirmationEmail(apiKey, email, name);
    } catch (err) {
      console.error("Confirmation email failed:", err);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Registration handler error:", err);
    return Response.json({ error: "Wystąpił błąd serwera" }, { status: 500 });
  }
}
