/**
 * Capa de notificaciones desacoplada (ver ARQUITECTURA.md §5).
 * Hoy solo envía por email vía Resend. Para agregar WhatsApp más adelante,
 * se suma un nuevo canal aquí sin tocar los formularios que lo llaman.
 */

async function sendEmail(subject: string, body: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.log(
      `[notifications] RESEND_API_KEY / NOTIFY_EMAIL_TO no configurados. ` +
        `Se omite el envío real. Contenido:\n\nAsunto: ${subject}\n\n${body}`,
    );
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, text: body }),
    });
    if (!res.ok) {
      console.error("[notifications] Resend respondió con error:", await res.text());
    }
  } catch (err) {
    console.error("[notifications] Falló el envío de email:", err);
  }
}

export async function notifyNewApplication(data: Record<string, string>) {
  const body = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  await sendEmail(`Nueva aplicación de ${data.nombre ?? "un visitante"}`, body);
}

export async function notifyNewMasterclassSubscriber(data: {
  email: string;
  telefono?: string;
}) {
  await sendEmail(
    "Nueva inscripción a la Masterclass",
    `Email: ${data.email}\nTeléfono: ${data.telefono ?? "(no proporcionado)"}`,
  );
}
