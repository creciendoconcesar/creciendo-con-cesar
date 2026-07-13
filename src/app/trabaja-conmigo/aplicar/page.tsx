import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Aplicar para una llamada",
  description:
    "Antes de aplicar, sé honesto contigo mismo. Completa la aplicación para una reunión 1 a 1 con César.",
  alternates: { canonical: "/trabaja-conmigo/aplicar" },
};

const requisitos = [
  "Estás cansado de trabajar y sentir que no avanzas.",
  "Quieres ingresos adicionales sin descuidar tu vida.",
  "Buscas una oportunidad legal y estable, no un atajo.",
  "No quieres asumir riesgos ni deudas.",
  "Te interesa un negocio digital moderno.",
  "No te gusta la venta agresiva — a mí tampoco.",
  "Estás listo para empezar, no solo para \"pensarlo\" indefinidamente.",
];

export default function AplicarPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Reunión 1 a 1
      </p>
      <h1 className="mb-6 font-display text-3xl font-bold text-text-primary md:text-4xl">
        Antes de aplicar, sé honesto contigo mismo
      </h1>
      <p className="mb-4 text-sm text-text-secondary">
        Esta llamada es para ti si:
      </p>
      <ul className="mb-6 flex flex-col gap-2">
        {requisitos.map((r) => (
          <li key={r} className="text-sm leading-relaxed text-text-secondary">
            — {r}
          </li>
        ))}
      </ul>
      <p className="mb-12 text-sm text-text-muted">
        Si te identificas con la mayoría de estos puntos, sigue adelante.
      </p>

      <div className="rounded-card border border-border bg-surface p-7">
        <ApplicationForm />
      </div>
    </section>
  );
}
