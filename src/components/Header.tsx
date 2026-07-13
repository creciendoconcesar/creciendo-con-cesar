import Link from "next/link";
import { mainNav } from "@/lib/site";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide text-text-primary"
        >
          Creciendo con César
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/trabaja-conmigo"
            className="inline-flex items-center rounded-full bg-dorado px-5 py-2.5 text-sm font-semibold text-on-dorado transition-transform hover:scale-[1.02]"
          >
            Trabaja Conmigo
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
