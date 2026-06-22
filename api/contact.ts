export const config = { runtime: "edge" };

const TOPIC_LABELS: Record<string, string> = {
  dolacz: "Chcę dołączyć",
  pytanie: "Mam pytanie",
  inicjatywa: "Chcę rozpocząć inicjatywę",
  inne: "Inne",
};

// Konfigurowalne przez zmienne środowiskowe w panelu Vercel.
// CONTACT_FROM_EMAIL domyślnie używa testowego nadawcy Resend (onboarding@resend.dev),
// który działa od razu — po zweryfikowaniu domeny womenup.com.pl w Resend
// ustaw np. "Women Up! <kontakt@womenup.com.pl>".
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Women Up! <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "womenup.inicjatywaspoleczna@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Weryfikacja Cloudflare Turnstile. Gdy TURNSTILE_SECRET_KEY nie jest ustawiony,
// nie blokuje (zwraca true), żeby formularz działał przed konfiguracją sekretu.
async function verifyTurnstile(token: string | undefined, remoteIp: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
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

  let payload: { name?: string; email?: string; topic?: string; message?: string; turnstileToken?: string };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Nieprawidłowe dane" }, { status: 400 });
  }

  const remoteIp = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "";
  const turnstileOk = await verifyTurnstile(payload.turnstileToken, remoteIp);
  if (!turnstileOk) {
    return Response.json({ error: "Weryfikacja antyspam nie powiodła się" }, { status: 400 });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const topic = (payload.topic || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Brak wymaganych pól" }, { status: 400 });
  }

  const topicLabel = TOPIC_LABELS[topic] || topic || "Brak tematu";

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
        subject: `[Formularz kontaktowy] ${topicLabel} — ${name}`,
        html: `
          <h2>Nowa wiadomość z formularza kontaktowego</h2>
          <p><strong>Imię:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Temat:</strong> ${escapeHtml(topicLabel)}</p>
          <hr />
          <p><strong>Wiadomość:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return Response.json({ error: "Nie udało się wysłać wiadomości" }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact handler error:", err);
    return Response.json({ error: "Wystąpił błąd serwera" }, { status: 500 });
  }
}
