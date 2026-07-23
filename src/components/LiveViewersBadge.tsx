"use client";

import { useEffect, useState } from "react";

const MIN_VIEWERS = 12;
const MAX_VIEWERS = 20;
const DEFAULT_VIEWERS = 15;

function randomViewers(prev?: number) {
  let next =
    Math.floor(Math.random() * (MAX_VIEWERS - MIN_VIEWERS + 1)) + MIN_VIEWERS;
  if (prev !== undefined && next === prev) {
    next = next >= MAX_VIEWERS ? next - 1 : next + 1;
  }
  return next;
}

export function LiveViewersBadge() {
  const [count, setCount] = useState(DEFAULT_VIEWERS);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let outerId: ReturnType<typeof setTimeout>;
    let innerId: ReturnType<typeof setTimeout>;
    let isFirstTick = true;

    function tick() {
      // La primera actualización llega rápido (1.5–3.5s) para mostrar un
      // número real cuanto antes; las siguientes respetan el rango de 20–40s.
      const delay = isFirstTick
        ? 1500 + Math.random() * 2000
        : 20000 + Math.random() * 20000;
      isFirstTick = false;

      outerId = setTimeout(() => {
        setVisible(false);
        innerId = setTimeout(() => {
          setCount((prev) => randomViewers(prev));
          setVisible(true);
        }, 350);
        tick();
      }, delay);
    }

    tick();
    return () => {
      clearTimeout(outerId);
      clearTimeout(innerId);
    };
  }, []);

  return (
    <p className="flex items-center gap-2 text-sm text-text-secondary">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-verde" />
      </span>
      <span
        className="transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className="font-semibold text-text-primary">{count}</span>{" "}
        personas están viendo esta presentación ahora mismo.
      </span>
    </p>
  );
}
