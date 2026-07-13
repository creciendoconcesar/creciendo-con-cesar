type BadgeRole = "verde" | "dorado" | "rosa" | "neutral";

const roleClasses: Record<BadgeRole, string> = {
  verde: "bg-verde-tint text-verde-text",
  dorado: "bg-dorado-tint text-dorado-text",
  rosa: "bg-rosa-tint text-rosa-text",
  neutral: "bg-white/10 text-text-secondary",
};

export function Badge({
  role = "neutral",
  children,
}: {
  role?: BadgeRole;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold ${roleClasses[role]}`}
    >
      {children}
    </span>
  );
}
