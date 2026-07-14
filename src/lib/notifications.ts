/**
 * Capa de notificaciones desacoplada (ver ARQUITECTURA.md §5).
 * Cada envío intenta dos canales de forma independiente: email (Resend) y
 * respaldo en Google Sheets. Si uno falla, el otro no se ve afectado —
 * así ninguna aplicación se pierde por completo. Para agregar WhatsApp más
 * adelante, se suma un nuevo canal aquí sin tocar los formularios.
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

async function backupToSheet(data: Record<string, string>) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log(
      "[notifications] GOOGLE_SHEETS_WEBHOOK_URL no configurado. Se omite el respaldo.",
    );
    return;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      redirect: "follow",
    });
    if (!res.ok) {
      console.error("[notifications] Falló el respaldo en Sheets:", await res.text());
    }
  } catch (err) {
    console.error("[notifications] Error de red al respaldar en Sheets:", err);
  }
}

export async function notifyNewApplication(data: Record<string, string>) {
  const body = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  await Promise.allSettled([
    sendEmail(`Nueva aplicación de ${data.nombre ?? "un visitante"}`, body),
    backupToSheet({ tipo: "Reunión 1 a 1", ...data }),
  ]);
}

export async function notifyNewMasterclassSubscriber(data: {
  email: string;
  telefono?: string;
}) {
  await Promise.allSettled([
    sendEmail(
      "Nueva inscripción a la Masterclass",
      `Email: ${data.email}\nTeléfono: ${data.telefono ?? "(no proporcionado)"}`,
    ),
    backupToSheet({
      tipo: "Masterclass",
      email: data.email,
      telefono: data.telefono ?? "",
    }),
  ]);
}
