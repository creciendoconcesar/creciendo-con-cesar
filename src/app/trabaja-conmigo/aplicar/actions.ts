"use server";

import { notifyNewApplication } from "@/lib/notifications";

export type ApplicationData = Record<string, string>;

const MAX_FIELD_LENGTH = 2000;

export async function submitApplication(data: ApplicationData) {
  const nombre = (data.nombre ?? "").trim();
  const telefono = (data.telefono ?? "").trim();

  if (!nombre || !telefono) {
    return { ok: false, message: "Falta nombre o teléfono." };
  }
  if (nombre.length > 200 || telefono.length > 50) {
    return { ok: false, message: "Alguno de los campos es demasiado largo." };
  }

  // Recorta cualquier campo desmedido antes de reenviarlo por email.
  const sanitized: ApplicationData = {};
  for (const [key, value] of Object.entries(data)) {
    sanitized[key] = String(value ?? "").slice(0, MAX_FIELD_LENGTH);
  }
  sanitized.nombre = nombre;
  sanitized.telefono = telefono;

  await notifyNewApplication(sanitized);
  return { ok: true };
}
