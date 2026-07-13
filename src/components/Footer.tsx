import Link from "next/link";
import { mainNav, legalNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Navegación
          </h2>
          <ul className="flex flex-col gap-2.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Legal
          </h2>
          <ul className="flex flex-col gap-2.5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Redes sociales
          </h2>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-6xl text-xs text-text-muted">
          © {new Date().getFullYear()} Creciendo con César. Los resultados
          dependen del esfuerzo y las circunstancias de cada persona — no se
          garantiza ningún ingreso.
        </p>
      </div>
    </footer>
  );
}
