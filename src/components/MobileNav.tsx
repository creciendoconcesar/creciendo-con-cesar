"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/site";
import { MenuIcon, CloseIcon } from "@/components/icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center text-text-primary"
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div
          id="mobile-nav-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-bg px-6 py-6"
        >
          <nav className="flex flex-col gap-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/trabaja-conmigo"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-dorado px-5 py-2.5 text-sm font-semibold text-on-dorado"
            >
              Trabaja Conmigo
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
