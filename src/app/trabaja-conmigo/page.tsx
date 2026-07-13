import type { Metadata } from "next";
import { InfoCard } from "@/components/Card";
import { PlayIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Trabaja Conmigo",
  description:
    "Dos caminos para empezar a trabajar con César, según lo que necesites hoy: Masterclass o Reunión 1 a 1.",
  alternates: { canonical: "/trabaja-conmigo" },
};

export default function TrabajaConmigoPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Trabaja conmigo
      </p>
      <h1 className="mb-3 font-display text-3xl font-bold text-text-primary md:text-4xl">
        Así puedes empezar a trabajar conmigo
      </h1>
      <p className="mb-12 text-base text-text-secondary">
        Dos caminos, según lo que necesites hoy.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <InfoCard
          role="dorado"
          icon={<PlayIcon className="h-full w-full" />}
          title="🚀 Masterclass"
          text="Ideal para quien quiere conocer mi metodología, aprender los fundamentos y comenzar su proceso."
          ctaLabel="Acceder a la Masterclass"
          href="/trabaja-conmigo/masterclass"
        />
        <InfoCard
          role="dorado"
          icon={<PhoneIcon className="h-full w-full" />}
          title="🤝 Reunión 1 a 1"
          text="Si buscas orientación personalizada y quieres evaluar si puedo ayudarte según tu situación."
          ctaLabel="Aplicar para una llamada"
          href="/trabaja-conmigo/aplicar"
        />
      </div>
    </section>
  );
}
