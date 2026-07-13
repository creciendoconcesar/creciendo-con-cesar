import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre nueva economía, educación financiera y negocios digitales.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Blog
      </p>
      <h1 className="mb-10 font-display text-3xl font-bold text-text-primary">
        Ideas para pensar mejor sobre dinero, mentalidad y negocios digitales
      </h1>

      {posts.length === 0 ? (
        <div className="rounded-card border border-border bg-surface p-10 text-center">
          <p className="text-sm text-text-secondary">
            Todavía no hay artículos publicados — vuelve pronto. Mientras
            tanto, sigue el contenido en{" "}
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dorado-text"
            >
              Instagram
            </a>{" "}
            y{" "}
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dorado-text"
            >
              YouTube
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-card border border-border bg-surface p-6 hover:border-border-strong"
            >
              <p className="mb-2 text-xs text-text-muted">{post.date}</p>
              <h2 className="mb-2 text-base font-semibold text-text-primary">
                {post.title}
              </h2>
              <p className="text-sm text-text-secondary">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
