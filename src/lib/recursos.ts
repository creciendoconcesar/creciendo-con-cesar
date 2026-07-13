export type Recurso = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  paraQuien: string;
  type: "gratuito" | "pago";
  /** Ruta dentro de /public, solo para recursos gratuitos. */
  fileUrl?: string;
  /** Link de checkout de Hotmart, solo para recursos de pago. */
  hotmartUrl?: string;
  /** Ruta de la portada en /public. Si falta, se muestra un placeholder. */
  coverImage?: string;
};

export const recursos: Recurso[] = [
  {
    slug: "los-7-filtros-antifraudes",
    title: "Los 7 Filtros Antifraudes",
    description:
      "Cómo elegir bien y no caer en una estafa. Este libro te enseña a evaluar cualquier empresa u oportunidad de negocio con información, no con emoción.",
    bullets: [
      "Qué mirar antes de comprometer tu dinero.",
      "Cómo detectar las señales de un fraude a tiempo.",
      "Qué hacer si ya caíste en una estafa.",
    ],
    paraQuien:
      "Para cualquier persona evaluando una oportunidad de negocio o ingreso adicional, antes de comprometer su dinero o su tiempo.",
    type: "pago",
    hotmartUrl: "https://go.hotmart.com/I106728010K?dp=1",
    coverImage: "/covers/los-7-filtros-antifraudes.jpg",
  },
  {
    slug: "de-seguidor-a-lider-y-monetiza",
    title: "De Seguidor a Líder y Monetiza",
    description:
      "La guía práctica para construir una marca personal desde cero usando Instagram como plataforma principal de crecimiento.",
    bullets: [
      "Encuentra tu propósito y define tu nicho.",
      "Crea comunidad y una identidad de marca real.",
      "Convierte tu audiencia en una oportunidad de negocio sostenible.",
    ],
    paraQuien:
      "Para emprendedores, creadores de contenido y cualquiera que quiera usar las redes sociales para generar autoridad, confianza e ingresos de forma profesional.",
    type: "pago",
    hotmartUrl: "https://go.hotmart.com/R106466240Q?dp=1",
    coverImage: "/covers/de-seguidor-a-lider-y-monetiza.jpg",
  },
  {
    slug: "secretos-de-las-ventas-millonarias",
    title: "El Secreto Detrás de las Ventas Millonarias",
    description:
      "Descubre las estrategias y técnicas de venta que utilizan los mejores vendedores para generar confianza, superar objeciones y cerrar más ventas. Un ebook práctico para aumentar tus ingresos y potenciar cualquier negocio.",
    bullets: [
      "Cómo generar confianza real antes de vender.",
      "Cómo superar las objeciones más comunes de un cliente.",
      "Cómo cerrar más ventas sin recurrir a la presión.",
    ],
    paraQuien:
      "Para quien vende cualquier producto, servicio o negocio propio y quiere aumentar sus ingresos con técnicas de venta reales.",
    type: "pago",
    hotmartUrl: "https://go.hotmart.com/F106466609K",
    coverImage: "/covers/secretos-de-las-ventas-millonarias.jpg",
  },
  {
    slug: "7-dias-para-dominar-meta-ads",
    title: "7 Días para Dominar Meta Ads",
    description:
      "Aprende a crear campañas rentables en Facebook e Instagram con un método práctico y paso a paso. Descubre cómo configurar Meta Ads, segmentar a tu audiencia, crear anuncios que conviertan y optimizar tus resultados para hacer crecer tu negocio.",
    bullets: [
      "Cómo configurar Meta Ads correctamente desde cero.",
      "Cómo segmentar tu audiencia sin desperdiciar presupuesto.",
      "Cómo crear anuncios que conviertan y optimizar tus resultados.",
    ],
    paraQuien:
      "Para quien quiere hacer crecer su negocio con campañas rentables en Facebook e Instagram, sin experiencia previa en publicidad digital.",
    type: "pago",
    hotmartUrl: "https://go.hotmart.com/E106727777K?dp=1",
    coverImage: "/covers/7-dias-para-dominar-meta-ads.jpg",
  },
];

export function getRecurso(slug: string) {
  return recursos.find((r) => r.slug === slug);
}
