"use client";

import { useActionState } from "react";
import {
  subscribeToMasterclass,
  type MasterclassFormState,
} from "@/app/trabaja-conmigo/masterclass/actions";
import { Button } from "@/components/Button";
import { countryCodes } from "@/lib/countryCodes";

const initialState: MasterclassFormState = { status: "idle" };

export function MasterclassForm() {
  const [state, formAction, pending] = useActionState(
    subscribeToMasterclass,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-card border border-border bg-surface p-6 text-sm text-verde-text">
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm text-text-secondary"
        >
          Correo electrónico *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 w-full rounded-xl border border-border bg-surface-2 px-4 text-sm text-text-primary outline-none focus:border-border-strong focus:ring-2 focus:ring-dorado/30"
          placeholder="tu@correo.com"
        />
      </div>
      <div>
        <label
          htmlFor="telefono"
          className="mb-1.5 block text-sm text-text-secondary"
        >
          Teléfono
        </label>
        <div className="flex gap-2">
          <select
            id="telefonoPais"
            name="telefonoPais"
            aria-label="País"
            defaultValue=""
            className="h-11 w-[130px] shrink-0 rounded-xl border border-border bg-surface-2 px-3 text-sm text-text-primary outline-none focus:border-border-strong focus:ring-2 focus:ring-dorado/30"
          >
            <option value="" disabled>
              País
            </option>
            {countryCodes.map((c) => (
              <option key={`${c.iso}-${c.dial}`} value={c.dial}>
                {c.flag} {c.dial} {c.name}
              </option>
            ))}
          </select>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            inputMode="tel"
            placeholder="Número"
            className="h-11 flex-1 rounded-xl border border-border bg-surface-2 px-4 text-sm text-text-primary outline-none focus:border-border-strong focus:ring-2 focus:ring-dorado/30"
          />
        </div>
      </div>

      {state.status === "error" && (
        <p className="text-sm text-rosa-text" role="alert">
          {state.message}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={pending} className="w-fit">
        {pending ? "Enviando..." : "Quiero inscribirme"}
      </Button>

      <p className="text-xs text-text-muted">
        No vas a recibir spam. Vas a recibir lo que te ayude a llegar
        preparado.
      </p>
    </form>
  );
}
