export interface Env {
  RESEND_API_KEY: string;
  TO_EMAIL: string;
  ALLOWED_ORIGIN: string;
}

const TOPIC_LABELS: Record<string, string> = {
  dolacz: "Chcę dołączyć",
  pytanie: "Mam pytanie",
  inicjatywa: "Chcę rozpocząć inicjatywę",
  inne: "Inne",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = env.ALLOWED_ORIGIN.split(",").map((o) => o.trim());
    const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
    }

    try {
      const { name, email, topic, message } = await request.json<{
        name: string;
        email: string;
        topic: string;
        message: string;
      }>();

      if (!name || !email || !message) {
        return Response.json(
          { error: "Brak wymaganych pól" },
          { status: 400, headers: corsHeaders }
        );
      }

      const topicLabel = TOPIC_LABELS[topic] || topic || "Brak tematu";

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Women Up! Strona <onboarding@resend.dev>",
          to: [env.TO_EMAIL],
          reply_to: email,
          subject: `[Formularz kontaktowy] ${topicLabel} — ${name}`,
          html: `
            <h2>Nowa wiadomość z formularza kontaktowego</h2>
            <p><strong>Imię:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Temat:</strong> ${topicLabel}</p>
            <hr />
            <p><strong>Wiadomość:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          `,
        }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("Resend error:", error);
        return Response.json(
          { error: "Nie udało się wysłać wiadomości" },
          { status: 500, headers: corsHeaders }
        );
      }

      return Response.json({ success: true }, { headers: corsHeaders });
    } catch (err) {
      console.error("Worker error:", err);
      return Response.json(
        { error: "Wystąpił błąd serwera" },
        { status: 500, headers: corsHeaders }
      );
    }
  },
};
