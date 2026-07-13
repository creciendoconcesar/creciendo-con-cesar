import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Viral Prosper",
  description:
    "La metodología con la que César enseña a construir un proyecto empresarial digital, paso a paso.",
  alternates: { canonical: "/viral-prosper" },
};

const paraQuien = [
  "Quieres aprender con estructura, no a los golpes como aprendí yo.",
  "Te interesa la economía digital pero no sabes por dónde empezar.",
  "Prefieres avanzar acompañado, en vez de improvisar solo.",
];

export default function ViralProsperPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Viral Prosper
        </p>
        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          Aprender, paso a paso, a construir en la nueva economía
        </h1>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-16 md:pb-20">
        <div className="flex flex-col gap-5 text-base leading-relaxed text-text-secondary">
          <p>
            <strong className="text-text-primary">Viral Prosper</strong> es la
            metodología con la que organizo todo lo que enseño: cómo construir
            un proyecto empresarial digital usando herramientas modernas,
            educación real y una comunidad que avanza en la misma dirección.
          </p>
          <p>
            No es un atajo ni una fórmula mágica. Es la forma en la que te
            enseño, paso a paso, lo que hoy hace falta para construir ingresos
            adicionales en la nueva economía: mentalidad, comunicación,
            herramientas digitales y cómo automatizar lo que ya no deberías
            hacer a mano.
          </p>
          <p>
            Viral Prosper es uno de los proyectos dentro de Creciendo con
            César — es donde convierto todo lo que aprendí en algo que tú
            puedas aplicar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-16 md:pb-20">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Es para ti si
        </h2>
        <ul className="flex flex-col gap-4">
          {paraQuien.map((v) => (
            <li key={v} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-dorado-text" />
              <span className="text-sm leading-relaxed text-text-secondary">
                {v}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <ButtonLink href="/trabaja-conmigo" variant="primary">
          Trabaja conmigo
        </ButtonLink>
      </section>
    </>
  );
}
