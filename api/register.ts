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
  imageConsent?: boolean;
  website?: string; // honeypot
  elapsedMs?: number;
  turnstileToken?: string;
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
    ${row("Zgoda na wizerunek", p.imageConsent ? "Tak" : "Nie")}
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

    return Response.json({ success: true });
  } catch (err) {
    console.error("Registration handler error:", err);
    return Response.json({ error: "Wystąpił błąd serwera" }, { status: 500 });
  }
}
