import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { recursos } from "@/lib/recursos";
import { BookIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Herramientas para pensar mejor antes de actuar — todo lo que necesitas para aprender a distinguir una oportunidad real de una que no lo es.",
  alternates: { canonical: "/recursos" },
};

export default function RecursosPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Recursos
      </p>
      <h1 className="mb-10 max-w-xl font-display text-3xl font-bold text-text-primary">
        Herramientas para pensar mejor antes de actuar
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {recursos.map((r) => (
          <Link
            key={r.slug}
            href={`/recursos/${r.slug}`}
            className="group block rounded-card border border-border bg-surface p-7 transition-colors hover:border-border-strong"
          >
            {r.coverImage ? (
              <div className="relative mb-4 aspect-[3/4] w-20 overflow-hidden rounded-lg border border-border bg-surface-2">
                <Image
                  src={r.coverImage}
                  alt={`Portada de ${r.title}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-verde-tint text-verde-text">
                <BookIcon className="h-[18px] w-[18px]" />
              </div>
            )}
            <h2 className="mb-2 text-base font-semibold text-text-primary">
              {r.title}
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              {r.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
