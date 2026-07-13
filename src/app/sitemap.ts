import type { MetadataRoute } from "next";
import { recursos } from "@/lib/recursos";
import { posts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre-mi",
    "/viral-prosper",
    "/recursos",
    "/blog",
    "/trabaja-conmigo",
    "/trabaja-conmigo/masterclass",
    "/trabaja-conmigo/aplicar",
    "/legal/privacidad",
    "/legal/terminos",
    "/legal/aviso-legal",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const recursoRoutes = recursos.map((r) => ({
    url: `${siteConfig.url}/recursos/${r.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...recursoRoutes, ...postRoutes];
}
