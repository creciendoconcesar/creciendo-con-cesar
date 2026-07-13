import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "De Cuba a Estados Unidos, aprendiendo por el camino difícil — la historia detrás de Creciendo con César.",
  alternates: { canonical: "/sobre-mi" },
};

const valores = [
  "Te cuento lo bueno y lo difícil, no solo lo bonito.",
  "Prefiero que digas que no con claridad, a que digas que sí sin estarlo.",
  "Enseño para que aprendas a pescar, no para que dependas de mí.",
];

export default function SobreMiPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full border border-border bg-surface">
          <Image
            src="/cesar.jpg"
            alt="César"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
        <h1 className="mt-8 font-display text-3xl font-bold text-text-primary">
          De Cuba a Estados Unidos, aprendiendo por el camino difícil
        </h1>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-16 md:pb-24">
        <div className="flex flex-col gap-5 text-base leading-relaxed text-text-secondary">
          <p>
            Llegué a este país buscando lo mismo que buscas tú,
            probablemente: una oportunidad real de construir algo mejor.
            Empecé, como muchos, trabajando duro en empleos tradicionales —
            muchas horas, poco margen, y la sensación de que corría sin llegar
            a ningún lado.
          </p>
          <p>
            Con el tiempo entendí que trabajar duro no alcanzaba. Tenía que
            aprender: del mundo digital, de mentalidad, de cómo moverse hoy en
            la economía moderna. Y en ese camino también me equivoqué —
            invertí en cosas que no debía, perdí dinero confiando en quien no
            debía. Nadie me había explicado cómo distinguir una oportunidad
            real de una que no lo era.
          </p>
          <p>
            Esa experiencia — la buena y la mala — es la que hoy comparto. No
            vengo a contarte solo lo que funcionó; también te cuento lo que
            no, para que no tengas que pagar el mismo precio que pagué yo.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-6 px-6 pb-16 md:grid-cols-2 md:pb-24">
        <div className="rounded-card border border-border bg-surface p-7">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Misión
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            Ayudar a personas comunes — empleados, curiosos del mundo digital,
            gente que ya se quemó con otras promesas — a aprender habilidades
            reales, desarrollar una mejor mentalidad y construir una fuente de
            ingresos adicional con claridad y sin desinformación.
          </p>
        </div>
        <div className="rounded-card border border-border bg-surface p-7">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Visión
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            Que, en los próximos años, Creciendo con César sea un punto de
            referencia en el mundo hispano para quienes buscan crecer en la
            economía moderna de forma honesta — con una comunidad real,
            recursos prácticos y acompañamiento genuino.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-16 md:pb-24">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Cómo trabajo
        </h2>
        <ul className="flex flex-col gap-4">
          {valores.map((v) => (
            <li key={v} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-verde-text" />
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
