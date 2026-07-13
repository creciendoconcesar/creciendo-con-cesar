import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { recursos, getRecurso } from "@/lib/recursos";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CheckIcon } from "@/components/icons";

export function generateStaticParams() {
  return recursos.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recurso = getRecurso(slug);
  if (!recurso) return {};
  return {
    title: recurso.title,
    description: recurso.description,
    alternates: { canonical: `/recursos/${recurso.slug}` },
  };
}

export default async function RecursoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recurso = getRecurso(slug);
  if (!recurso) notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {recurso.coverImage ? (
          <div className="relative order-last aspect-[3/4] w-full overflow-hidden rounded-card border border-border bg-surface md:order-first">
            <Image
              src={recurso.coverImage}
              alt={`Portada de ${recurso.title}`}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <PhotoPlaceholder
            label={`portada de ${recurso.title}`}
            className="order-last aspect-[3/4] w-full md:order-first"
          />
        )}
        <div>
          <h1 className="mb-4 font-display text-2xl font-bold text-text-primary md:text-3xl">
            {recurso.title}
          </h1>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            {recurso.description}
          </p>
          <p className="mb-6 text-sm leading-relaxed text-text-muted">
            <strong className="text-text-secondary">Para quién es:</strong>{" "}
            {recurso.paraQuien}
          </p>

          {recurso.type === "pago" ? (
            <a
              href={recurso.hotmartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-dorado px-6 py-3 text-sm font-semibold text-on-dorado transition-transform hover:scale-[1.02]"
            >
              Obtener el libro
            </a>
          ) : (
            <a
              href={recurso.fileUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-dorado px-6 py-3 text-sm font-semibold text-on-dorado transition-transform hover:scale-[1.02]"
            >
              Descargar gratis
            </a>
          )}
        </div>
      </div>

      <div className="mt-14 max-w-xl">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Qué aprenderás
        </h2>
        <ul className="flex flex-col gap-4">
          {recurso.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-verde-text" />
              <span className="text-sm leading-relaxed text-text-secondary">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
