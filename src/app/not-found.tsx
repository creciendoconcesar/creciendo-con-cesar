import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Error 404
      </p>
      <h1 className="mb-4 font-display text-3xl font-bold text-text-primary">
        Esta página no existe
      </h1>
      <p className="mb-8 text-base leading-relaxed text-text-secondary">
        El enlace puede estar roto o la página pudo haberse movido. Volvamos a
        un lugar conocido.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <ButtonLink href="/" variant="primary">
          Ir al inicio
        </ButtonLink>
        <ButtonLink href="/trabaja-conmigo" variant="secondary">
          Trabaja conmigo
        </ButtonLink>
      </div>
    </section>
  );
}
