import Link from "next/link";
import type { ReactNode } from "react";

type CardRole = "verde" | "dorado" | "rosa";

const iconWrapClasses: Record<CardRole, string> = {
  verde: "bg-verde-tint text-verde-text",
  dorado: "bg-dorado-tint text-dorado-text",
  rosa: "bg-rosa-tint text-rosa-text",
};

const ctaClasses: Record<CardRole, string> = {
  verde: "text-verde-text",
  dorado: "text-dorado-text",
  rosa: "text-rosa-text",
};

export function InfoCard({
  role,
  icon,
  title,
  text,
  ctaLabel,
  href,
}: {
  role: CardRole;
  icon: ReactNode;
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-card border border-border bg-surface p-7 transition-colors hover:border-border-strong"
    >
      <div
        className={`mb-4 flex h-9 w-9 items-center justify-center rounded-xl ${iconWrapClasses[role]}`}
      >
        <span className="h-[18px] w-[18px]">{icon}</span>
      </div>
      <h3 className="mb-2 text-base font-semibold text-text-primary">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {text}
      </p>
      <span
        className={`inline-flex items-center gap-1 text-sm font-semibold ${ctaClasses[role]}`}
      >
        {ctaLabel} →
      </span>
    </Link>
  );
}
