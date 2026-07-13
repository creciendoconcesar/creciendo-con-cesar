import type { Metadata } from "next";
import { MasterclassForm } from "@/components/MasterclassForm";

export const metadata: Metadata = {
  title: "Masterclass",
  description:
    "Aprende los fundamentos de la economía moderna, sin costo, a tu ritmo.",
  alternates: { canonical: "/trabaja-conmigo/masterclass" },
};

export default function MasterclassPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Masterclass gratuita
      </p>
      <h1 className="mb-5 font-display text-3xl font-bold text-text-primary md:text-4xl">
        Aprende los fundamentos, sin costo, a tu ritmo
      </h1>
      <p className="mb-10 text-base leading-relaxed text-text-secondary">
        En esta masterclass te muestro los fundamentos de cómo pienso la
        economía moderna, qué errores evitar (los mismos que yo cometí) y
        cómo empezar a construir una fuente de ingresos adicional con
        criterio, sin promesas exageradas.
      </p>
      <p className="mb-6 text-sm text-text-secondary">
        Déjame tu email y tu teléfono para avisarte cuándo empieza — y para
        acompañarte con contenido antes de que llegue la fecha.
      </p>

      <div className="rounded-card border border-border bg-surface p-7">
        <MasterclassForm />
      </div>
    </section>
  );
}
