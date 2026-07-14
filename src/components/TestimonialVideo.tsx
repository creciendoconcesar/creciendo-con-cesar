import { PlayIcon } from "@/components/icons";

export function TestimonialVideo({ src }: { src?: string }) {
  return (
    <div className="mx-auto flex aspect-[9/16] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-card border border-border bg-surface">
      {src ? (
        <video
          src={src}
          controls
          playsInline
          className="h-full w-full object-cover"
        />
      ) : (
        <PlayIcon className="h-10 w-10 text-dorado-text" />
      )}
    </div>
  );
}
