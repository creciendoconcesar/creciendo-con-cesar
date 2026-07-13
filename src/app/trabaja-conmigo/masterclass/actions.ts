"use server";

import { notifyNewMasterclassSubscriber } from "@/lib/notifications";

export type MasterclassFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function subscribeToMasterclass(
  _prevState: MasterclassFormState,
  formData: FormData,
): Promise<MasterclassFormState> {
  const email = String(formData.get("email") ?? "").trim().slice(0, 200);
  const telefono = String(formData.get("telefono") ?? "").trim().slice(0, 50);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    return { status: "error", message: "Ingresa un correo electrónico válido." };
  }

  await notifyNewMasterclassSubscriber({ email, telefono });

  return {
    status: "success",
    message: "Listo. Revisa tu correo — ahí te avisaremos cuándo empieza.",
  };
}
