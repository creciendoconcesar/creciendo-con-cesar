import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { InfoCard } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { TestimonialVideo } from "@/components/TestimonialVideo";
import {
  PhoneIcon,
  PlayIcon,
  ShieldIcon,
  HeartIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const testimonioVideoSrc = "/testimonios/testimonio-michel.mp4";

const dolores = [
  {
    title: "No te sobra el dinero.",
    text: "Trabajas y trabajas, y el sueldo se te va antes de que llegue el próximo.",
  },
  {
    title: "No te sobra el tiempo.",
    text: "Entre el trabajo y la vida, parece que no queda espacio para aprender algo nuevo.",
  },
  {
    title: "No confías fácilmente.",
    text: "Ya viste demasiadas promesas vacías como para creerle a cualquiera.",
  },
  {
    title: "No sabes por dónde empezar.",
    text: "Hay información por todos lados, pero pocas guías honestas.",
  },
];

const faqs = [
  {
    q: "¿Esto es una estafa o una pirámide?",
    a: "No. Trabajo dentro de un modelo de negocio moderno, registrado y avalado legalmente. Si tienes dudas, es exactamente para eso que escribí Los 7 Filtros Antifraudes — para que aprendas a evaluar cualquier oportunidad con criterio propio, incluida esta.",
  },
  {
    q: "¿Me vas a intentar vender algo en la llamada?",
    a: "Mi objetivo es que tomes una decisión informada, no que digas que sí a toda costa. Si al final no es para ti, está bien.",
  },
  {
    q: "¿Necesito experiencia o dinero para empezar?",
    a: "No necesitas experiencia previa. Lo que sí necesitas es disposición real para aprender y comprometerte con el proceso.",
  },
  {
    q: "¿Cuánto tiempo tengo que dedicarle?",
    a: "Depende de tu situación — por eso la aplicación te pregunta cuánto tiempo puedes dedicar realmente. Prefiero que empieces con lo que puedes sostener, no con lo que no vas a cumplir.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:items-start lg:gap-10 xl:grid-cols-[1fr_340px] xl:gap-12">
          <div>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] xl:leading-[1.1]">
              <span className="block">¿Trabajas todos</span>
              <span className="block">los días,</span>
              <span className="block">
                pero el <span className="text-dorado-text">dinero</span>
              </span>
              <span className="block">nunca alcanza,</span>
              <span className="block">
                el <span className="text-dorado-text">tiempo</span> no te
                sobra
              </span>
              <span className="block">
                y las <span className="text-dorado-text">oportunidades</span>
              </span>
              <span className="block">parecen estar siempre</span>
              <span className="block">para otros?</span>
            </h1>

            <p className="mb-8 mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Descubre cómo aprovechar la nueva economía para desarrollar
              habilidades de alto valor, crear ingresos adicionales y
              construir nuevas oportunidades, sin falsas promesas y con una
              estrategia que puedas aplicar paso a paso.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <ButtonLink href="/trabaja-conmigo/aplicar" variant="primary">
                Aplicar para una llamada
              </ButtonLink>
              <ButtonLink href="/sobre-mi" variant="secondary">
                Conoce mi historia
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-sm lg:mx-0 lg:mt-2 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-border bg-surface">
              <Image
                src="/cesar.jpg"
                alt="César, fundador de Creciendo con César"
                fill
                priority
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credibilidad rápida */}
      <section className="border-y border-border">
        <p className="mx-auto max-w-4xl px-6 py-6 text-center text-sm font-medium text-text-secondary">
          +4 años ayudando a otros a construir ingresos adicionales · +200
          personas orientadas · Autor de{" "}
          <span className="text-text-primary">Los 7 Filtros Antifraudes</span>{" "}
          y{" "}
          <span className="text-text-primary">
            De Seguidor a Líder y Monetiza
          </span>
        </p>
      </section>

      {/* Dolores */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-wider text-text-muted">
          ¿Te sientes así?
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dolores.map((d) => (
            <div
              key={d.title}
              className="rounded-card border border-border bg-surface p-6"
            >
              <p className="mb-2 text-sm font-semibold text-text-primary">
                {d.title}
              </p>
              <p className="text-sm leading-relaxed text-text-secondary">
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quien es César */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-border bg-surface order-last md:order-first">
          <Image
            src="/cesar.jpg"
            alt="César compartiendo su historia"
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Quién es César
          </h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Llegué a Estados Unidos desde Cuba buscando algo mejor. Empecé
            desde abajo, en trabajos que pagaban las cuentas pero no
            construían nada a largo plazo. En el camino cometí errores —
            algunos me costaron dinero, otros me costaron tiempo — hasta que
            entendí que no bastaba con trabajar duro: había que aprender a
            moverse en la economía moderna con criterio propio.
          </p>
          <p className="mb-6 text-base leading-relaxed text-text-secondary">
            Hoy convierto esos errores y esos aprendizajes en algo útil para
            otros. Esa es toda la historia detrás de Creciendo con César.
          </p>
          <ButtonLink href="/sobre-mi" variant="secondary">
            Conoce mi historia completa
          </ButtonLink>
        </div>
      </section>

      {/* Cómo te ayudo */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Cómo te ayudo
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            role="dorado"
            icon={<PhoneIcon className="h-full w-full" />}
            title="Reunión 1 a 1"
            text="Orientación personalizada para evaluar, sin presión, si puedo ayudarte según tu situación."
            ctaLabel="Aplicar para una llamada"
            href="/trabaja-conmigo/aplicar"
          />
          <InfoCard
            role="dorado"
            icon={<PlayIcon className="h-full w-full" />}
            title="Viral Prosper"
            text="La metodología con la que enseño a construir un proyecto empresarial digital, paso a paso."
            ctaLabel="Conoce la metodología"
            href="/viral-prosper"
          />
          <InfoCard
            role="verde"
            icon={<ShieldIcon className="h-full w-full" />}
            title="Recursos y libros"
            text="Herramientas prácticas para aprender a identificar oportunidades reales y evitar las falsas."
            ctaLabel="Ver recursos"
            href="/recursos"
          />
        </div>
      </section>

      {/* Prueba social */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-wider text-text-muted">
          No lo digo solo yo
        </h2>
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <TestimonialVideo src={testimonioVideoSrc} />
          <div className="rounded-card border border-border bg-surface p-7">
            <Badge role="rosa">Testimonio real</Badge>
            <p className="mt-4 text-sm font-semibold text-text-primary">
              Michel Machado
            </p>
            <p className="mb-3 text-xs text-text-muted">
              Maestro Internacional de Ajedrez · Ministerio del Deporte,
              Ecuador
            </p>
            <p className="text-sm leading-relaxed text-text-secondary">
              Llevamos 3 años trabajando juntos. Antes de conocernos, la
              semana de Michel era lunes a viernes de trabajo y el fin de
              semana como único descanso — sin mucho más plan que ese. Hoy
              tiene un método claro para avanzar, y ya se permite soñar con
              metas y proyectos a largo plazo.
            </p>
          </div>
        </div>
      </section>

      {/* Transparencia */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center md:py-20">
          <Badge role="verde">Transparencia ante todo</Badge>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-primary">
            Escribí <em>Los 7 Filtros Antifraudes</em> porque yo mismo perdí
            dinero confiando en quien no debía. Si algo me importa más que
            venderte algo, es que aprendas a reconocer una oportunidad real de
            una que no lo es — incluso si al final decides no trabajar
            conmigo.
          </p>
          <div className="mt-6">
            <ButtonLink href="/recursos/los-7-filtros-antifraudes" variant="secondary">
              Ver el libro
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Preguntas frecuentes
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-card border border-border bg-surface p-5"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-text-primary marker:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="rounded-card border-2 border-border-strong bg-surface px-8 py-14">
          <HeartIcon className="mx-auto mb-4 h-8 w-8 text-text-muted" />
          <h2 className="mb-6 font-display text-2xl font-bold text-text-primary">
            ¿Listo para dejar de posponer esto?
          </h2>
          <ButtonLink href="/trabaja-conmigo/aplicar" variant="primary">
            Aplicar para una llamada
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
