"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/icons";

export function VslPlayer({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-card border border-border bg-surface">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* Miniatura de YouTube: evita cargar el iframe/video hasta el clic.
              maxresdefault no existe para todos los videos; si falla, cae a
              hqdefault, que YouTube genera siempre. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt=""
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
          <span className="absolute inset-0 flex items-center justify-center">
            <PlayIcon className="h-16 w-16 text-dorado-text drop-shadow-lg transition-transform group-hover:scale-105" />
          </span>
        </button>
      )}
    </div>
  );
}
