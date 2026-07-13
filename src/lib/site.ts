export const siteConfig = {
  name: "Creciendo con César",
  url: "https://creciendoconcesar.online",
  socials: {
    instagram:
      "https://www.instagram.com/creciendoconcesar?igsh=Njk0YmczaHdiMnp3&utm_source=qr",
    facebook: "https://www.facebook.com/share/1DAaXWBZJ6/?mibextid=wwXIfr",
    youtube: "https://youtube.com/@creciendoconcesar?si=92bGLZLxOn2Gx5cs",
  },
};

export const siteHostname = new URL(siteConfig.url).hostname;

export const mainNav = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Mí", href: "/sobre-mi" },
  { label: "Viral Prosper", href: "/viral-prosper" },
  { label: "Recursos", href: "/recursos" },
  { label: "Blog", href: "/blog" },
];

export const legalNav = [
  { label: "Política de privacidad", href: "/legal/privacidad" },
  { label: "Términos y condiciones", href: "/legal/terminos" },
  { label: "Aviso legal", href: "/legal/aviso-legal" },
];
