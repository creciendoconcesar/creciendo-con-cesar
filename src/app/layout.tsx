import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/lib/site";

const description =
  "Crecimiento real, sin promesas falsas. Aprende a construir ingresos adicionales en la nueva economía con criterio, claridad y sin humo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Creciendo con César",
    template: "%s · Creciendo con César",
  },
  description,
  openGraph: {
    title: "Creciendo con César",
    description,
    url: siteConfig.url,
    siteName: "Creciendo con César",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creciendo con César",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "César",
  url: siteConfig.url,
  image: `${siteConfig.url}/cesar.jpg`,
  jobTitle: "Educador en economía digital y crecimiento personal",
  sameAs: Object.values(siteConfig.socials),
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full" data-theme="dark">
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-dorado focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-dorado"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
