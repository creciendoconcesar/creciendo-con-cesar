export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-card border border-border bg-surface p-6 text-center ${className}`}
    >
      <p className="text-xs text-text-muted">
        [ Foto pendiente — {label} ]
        <br />
        Reemplazar con imagen real (JPG/WebP) en <code>/public</code>.
      </p>
    </div>
  );
}
