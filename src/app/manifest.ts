import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Creciendo con César",
    description:
      "Crecimiento real, sin promesas falsas. Aprende a construir ingresos adicionales en la nueva economía.",
    start_url: "/",
    display: "standalone",
    background_color: "#211a14",
    theme_color: "#211a14",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
