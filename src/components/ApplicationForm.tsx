"use client";

import { useEffect, useState } from "react";
import { submitApplication } from "@/app/trabaja-conmigo/aplicar/actions";
import { Button } from "@/components/Button";
import { PhoneInput } from "@/components/PhoneInput";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { siteConfig } from "@/lib/site";

const STORAGE_KEY = "cwc-aplicacion-v1";

type Field =
  | { kind: "text" | "tel"; name: string; label: string; required?: boolean }
  | { kind: "textarea"; name: string; label: string; required?: boolean }
  | {
      kind: "select";
      name: string;
      label: string;
      options: string[];
      required?: boolean;
    }
  | {
      kind: "range";
      name: string;
      label: string;
      min: number;
      max: number;
      required?: boolean;
    };

const steps: { title: string; fields: Field[] }[] = [
  {
    title: "Información básica",
    fields: [
      {
        kind: "text",
        name: "nombre",
        label: "Nombre completo",
        required: true,
      },
      {
        kind: "tel",
        name: "telefono",
        label: "Teléfono (para poder contactarte)",
        required: true,
      },
    ],
  },
  {
    title: "Tu situación actual",
    fields: [
      {
        kind: "select",
        name: "ocupacion",
        label: "¿A qué te dedicas actualmente?",
        options: [
          "Empleado(a)",
          "Independiente",
          "Dueño(a) de negocio",
          "Estudiante",
          "Actualmente no trabajo",
          "Otro",
        ],
      },
      {
        kind: "select",
        name: "horas",
        label:
          "¿Cuántas horas a la semana podrías dedicarle a esto?",
        options: [
          "Menos de 5 horas",
          "5 a 10 horas",
          "10 a 20 horas",
          "Más de 20 horas",
        ],
      },
    ],
  },
  {
    title: "Tu reto y tu motivación",
    fields: [
      {
        kind: "textarea",
        name: "motivacion",
        label: "¿Qué te motivó a solicitar esta reunión conmigo?",
      },
      {
        kind: "textarea",
        name: "reto",
        label:
          "¿Cuál es el mayor reto o problema que quieres resolver en este momento?",
      },
      {
        kind: "textarea",
        name: "cambio12meses",
        label:
          "Si pudieras resolver ese problema en los próximos 12 meses, ¿cómo cambiaría tu vida?",
      },
    ],
  },
  {
    title: "Compromiso e inversión",
    fields: [
      {
        kind: "range",
        name: "compromiso",
        label:
          "Del 1 al 10, ¿qué tan comprometido(a) estás con hacer un cambio real?",
        min: 1,
        max: 10,
      },
      {
        kind: "select",
        name: "disposicion",
        label:
          "¿Estarías dispuesto(a) a invertir en tu crecimiento personal y profesional?",
        options: ["Sí", "Tal vez", "No"],
      },
      {
        kind: "select",
        name: "rangoInversion",
        label: "¿Qué rango de inversión considerarías razonable?",
        options: [
          "Menos de $100",
          "Entre $100 y $250",
          "Entre $250 y $500",
          "Más de $500",
        ],
      },
      {
        kind: "select",
        name: "decisionPropia",
        label: "¿La decisión de comenzar depende únicamente de ti?",
        options: ["Sí", "No, debo consultarlo con otra persona"],
      },
      {
        kind: "textarea",
        name: "expectativa",
        label: "¿Qué esperas obtener de esta reunión conmigo?",
      },
      {
        kind: "select",
        name: "listoParaEmpezar",
        label:
          "Si descubres una solución que se adapta a tus objetivos, ¿estarías listo(a) para comenzar ese mismo día?",
        options: [
          "Sí",
          "Depende de la propuesta",
          "Necesito pensarlo",
          "No",
        ],
      },
    ],
  },
];

const inputClasses =
  "w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm text-text-primary outline-none focus:border-border-strong focus:ring-2 focus:ring-dorado/30";

function loadSavedValues(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] =
    useState<Record<string, string>>(loadSavedValues);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (Object.keys(values).length > 0) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    }
  }, [values]);

  useEffect(() => {
    if (!submitted) return;
    const frame = requestAnimationFrame(() => setShowConfirmation(true));
    return () => cancelAnimationFrame(frame);
  }, [submitted]);

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateCurrentStep() {
    const missing = steps[step].fields.filter((f) => {
      if (!f.required) return false;
      if (f.kind === "tel") {
        return !values[f.name]?.trim() || !values[`${f.name}Pais`]?.trim();
      }
      return !values[f.name]?.trim();
    });
    if (missing.length > 0) {
      setError(
        `Completa "${missing[0].label.replace(/[*].*/, "").trim()}" para continuar.`,
      );
      return false;
    }
    setError(null);
    return true;
  }

  async function handleNext() {
    if (!validateCurrentStep()) return;

    if (step < steps.length - 1) {
      setStep((s) => s + 1);
      return;
    }

    setSubmitting(true);
    const { telefonoPais, ...rest } = values;
    const payload = {
      ...rest,
      telefono: telefonoPais
        ? `${telefonoPais} ${values.telefono ?? ""}`.trim()
        : (values.telefono ?? ""),
    };
    const result = await submitApplication(payload);
    setSubmitting(false);

    if (result.ok) {
      window.localStorage.removeItem(STORAGE_KEY);
      setSubmitted(true);
    } else {
      setError(result.message ?? "Algo falló, intenta de nuevo.");
    }
  }

  function handleBack() {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
  }

  if (submitted) {
    return (
      <div
        className={`transition-all duration-700 ease-out ${
          showConfirmation
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        <div className="rounded-card border border-border bg-surface p-8 text-center">
          <p className="mb-3 font-display text-xl font-bold text-verde-text">
            ✅ ¡Excelente! Tu aplicación fue recibida correctamente.
          </p>
          <p className="mb-4 text-sm font-semibold text-text-primary">
            Ahora solo falta un último paso.
          </p>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-text-secondary">
            Agenda una llamada de aproximadamente 40 minutos para revisar tu
            caso, responder tus preguntas y evaluar si realmente puedo
            ayudarte. Selecciona el día y la hora que mejor te convengan.
          </p>
        </div>

        <div className="mt-6">
          <CalendlyEmbed url={siteConfig.calendlyUrl} />
        </div>
      </div>
    );
  }

  const progressPct = ((step + 1) / steps.length) * 100;

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Paso {step + 1} de {steps.length} — {steps[step].title}
      </p>
      <div className="mb-8 h-1 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-dorado transition-all"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="flex flex-col gap-6">
        {steps[step].fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-sm text-text-secondary"
            >
              {field.label}
              {field.required && " *"}
            </label>

            {field.kind === "text" && (
              <input
                id={field.name}
                type="text"
                value={values[field.name] ?? ""}
                onChange={(e) => update(field.name, e.target.value)}
                className={inputClasses}
              />
            )}

            {field.kind === "tel" && (
              <PhoneInput
                id={field.name}
                countryValue={values[`${field.name}Pais`] ?? ""}
                numberValue={values[field.name] ?? ""}
                onCountryChange={(dial) => update(`${field.name}Pais`, dial)}
                onNumberChange={(v) => update(field.name, v)}
                required={field.required}
              />
            )}

            {field.kind === "textarea" && (
              <textarea
                id={field.name}
                rows={3}
                value={values[field.name] ?? ""}
                onChange={(e) => update(field.name, e.target.value)}
                className={inputClasses}
              />
            )}

            {field.kind === "select" && (
              <select
                id={field.name}
                value={values[field.name] ?? ""}
                onChange={(e) => update(field.name, e.target.value)}
                className={inputClasses}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {field.kind === "range" && (
              <div className="flex items-center gap-4">
                <input
                  id={field.name}
                  type="range"
                  min={field.min}
                  max={field.max}
                  value={values[field.name] ?? "5"}
                  onChange={(e) => update(field.name, e.target.value)}
                  className="flex-1 accent-dorado"
                />
                <span className="w-6 text-sm font-semibold text-text-primary">
                  {values[field.name] ?? "5"}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-4 text-sm text-rosa-text" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex items-center gap-6">
        {step > 0 && (
          <Button
            type="button"
            variant="secondary"
            showArrow={false}
            onClick={handleBack}
          >
            ← Atrás
          </Button>
        )}
        <Button
          type="button"
          variant="primary"
          showArrow={false}
          disabled={submitting}
          onClick={handleNext}
        >
          {submitting
            ? "Enviando..."
            : step === steps.length - 1
              ? "Enviar aplicación"
              : "Siguiente"}
        </Button>
      </div>
    </div>
  );
}
