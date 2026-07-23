# PROJECT_CONTEXT.md — Creciendo con César

> Documento vivo de contexto técnico. Se actualiza cada vez que se hace un
> cambio importante en el proyecto (nueva integración, cambio de arquitectura,
> nueva página/flujo, decisión técnica relevante). No sustituye a
> `PRD.md` / `ARQUITECTURA.md` / `WIREFRAMES.md` / `SISTEMA_DISENO.md` /
> `COPYWRITING.md` (documentos de producto/diseño ya aprobados) — este
> documento es el resumen operativo para quien mantiene el código.
>
> **Última actualización:** 2026-07-22

---

## 1. Resumen del proyecto

"Creciendo con César" es el sitio web oficial de la marca personal de César
Carmona: educador en crecimiento digital, mentalidad e ingresos adicionales
para hispanohablantes en EE. UU. y Latinoamérica. No es una landing de venta
agresiva: comunica quién es César, filtra visitantes y los convierte en
**llamadas 1:1 calificadas**, además de vender un pequeño catálogo de
libros/ebooks vía Hotmart.

**Estado:** publicado en producción en **https://creciendoconcesar.online**,
con usuarios reales. Cualquier cambio debe tratarse como cambio en
producción.

## 2. Arquitectura

- **Next.js 16 (App Router)**, Server Components por defecto, Server Actions
  para los formularios (sin API routes separadas).
- Contenido "de negocio" (recursos, blog, config del sitio) vive como datos
  tipados en `src/lib/*.ts` — **no hay CMS conectado todavía**. Cambiar un
  texto o agregar un recurso requiere editar código y hacer deploy.
- Capa de notificaciones desacoplada (`src/lib/notifications.ts`): cada envío
  intenta email (Resend) y respaldo en Google Sheets en paralelo con
  `Promise.allSettled`, para que el fallo de un canal no afecte al otro.
  Diseñada para poder sumar WhatsApp como tercer canal sin tocar los
  formularios.
- Sin base de datos propia. Sin tests automatizados en el repo.

## 3. Tecnologías

| Categoría | Tecnología |
|---|---|
| Framework | Next.js 16.2.10 (App Router) |
| UI | React 19.2.4 + TypeScript |
| Estilos | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Analítica | `@next/third-parties` (componente oficial de GA4) |
| Lint | ESLint 9 + `eslint-config-next` |
| Hosting | Vercel (dominio `creciendoconcesar.online` apuntado por DNS) |

## 4. Variables de entorno

Definidas en `.env.local` (no versionado) según plantilla en `.env.example`.
Ninguna es obligatoria para correr en local — sin ellas, las integraciones
quedan inactivas y las notificaciones se imprimen en consola.

| Variable | Para qué | Estado en `.env.local` actual |
|---|---|---|
| `RESEND_API_KEY` | Envío de emails de notificación | ✅ Configurado |
| `NOTIFY_EMAIL_TO` | Destinatario de las notificaciones | ✅ Configurado |
| `NOTIFY_EMAIL_FROM` | Remitente (opcional, default `onboarding@resend.dev`) | ⬜ No seteado (usa default) |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Respaldo de leads en Google Sheets | ✅ Configurado |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 | ✅ Configurado |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (alternativa a GA_ID directo) | ⬜ No configurado |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (Instagram/Facebook Ads) | ⬜ No configurado |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity (heatmaps/sesiones) | ✅ Configurado |

**Importante:** confirmar que estas mismas variables estén cargadas en
*Environment Variables* del proyecto en Vercel — si no coinciden con
`.env.local`, producción podría estar notificando solo por logs, en
silencio.

## 5. Integraciones y servicios externos

| Servicio | Uso | Estado |
|---|---|---|
| **Resend** | Email de notificación por cada aplicación/inscripción | ✅ Activo |
| **Google Sheets (Apps Script webhook)** | Respaldo redundante de cada lead | ✅ Activo |
| **Google Analytics 4** | Medición de tráfico | ✅ Activo (vía `<GoogleAnalytics>` oficial) |
| **Microsoft Clarity** | Heatmaps y grabaciones de sesión | ✅ Activo |
| **Google Tag Manager** | Contenedor único de tags | ⬜ No activo |
| **Meta Pixel** | Tracking de campañas Meta Ads | ⬜ No activo |
| **Hotmart** | Checkout externo de los 4 libros | ✅ Activo, links reales en `src/lib/recursos.ts` |
| **Sanity (CMS)** | Edición de contenido sin tocar código | ⬜ No conectado (planeado a futuro) |
| **Skool** | Comunidad | ⬜ No existe todavía |
| **YouTube (VSL del Hero)** | Video de presentación del Home, embebido como "lite facade" | ✅ Activo — ID `ajDhiJP6YBE`, video oculto (unlisted) |
| **Calendly (`react-calendly`)** | Agendar la llamada 1:1, embebido inline tras enviar el formulario de aplicación | ✅ Activo — evento `creciendoconcesar/llamada-de-descubrimiento` |

## 6. Flujo de formularios

Dos formularios, ambos como Server Actions + capa de notificaciones común:

1. **Aplicación 1:1** (`/trabaja-conmigo/aplicar`)
   - Componente: `src/components/ApplicationForm.tsx`
   - Multi-paso (4 pasos, 13 preguntas), progreso guardado en `localStorage`
     (`cwc-aplicacion-v1`) para no perder respuestas si el visitante recarga.
   - Validación: nombre y teléfono obligatorios (incluye código de país vía
     `PhoneInput.tsx` + `src/lib/countryCodes.ts`).
   - Action: `src/app/trabaja-conmigo/aplicar/actions.ts` →
     `submitApplication` → sanitiza (trim + límite de 2000 chars por campo) →
     `notifyNewApplication()`.
   - **(2026-07-22)** Ya no revisa manualmente antes de agendar: tras un envío
     exitoso, el formulario muestra un mensaje de confirmación y, debajo,
     `CalendlyEmbed.tsx` (usa `InlineWidget` de `react-calendly`) con el
     evento `siteConfig.calendlyUrl` — el visitante agenda de inmediato,
     sin salir del sitio. Esto reemplaza el flujo documentado en
     `PRD.md`/`ARQUITECTURA.md` de "César revisa y envía Calendly a mano" —
     ver nota en §14.

2. **Suscripción a Masterclass** (`/trabaja-conmigo/masterclass`)
   - Componente: `src/components/MasterclassForm.tsx`, usa `useActionState`.
   - Campos: email (obligatorio, validado con regex), teléfono (opcional, con
     selector de país).
   - Action: `src/app/trabaja-conmigo/masterclass/actions.ts` →
     `subscribeToMasterclass` → `notifyNewMasterclassSubscriber()`.

Ambos terminan llamando a `src/lib/notifications.ts`, que dispara email +
respaldo en Sheets en paralelo.

## 7. SEO

- Metadata por página vía `export const metadata` (App Router), con plantilla
  de título (`%s · Creciendo con César`) definida en `src/app/layout.tsx`.
- `src/app/sitemap.ts` — genera rutas estáticas + recursos + posts de blog
  dinámicamente desde `src/lib/recursos.ts` y `src/lib/blog.ts`.
- `src/app/robots.ts` — permite todo, apunta al sitemap.
- `src/app/opengraph-image.tsx` y `twitter-image.tsx` — OG image dinámica
  generada con `ImageResponse`.
- JSON-LD (`Person` + `WebSite`) inyectado en `layout.tsx`.
- `src/app/manifest.ts` — PWA manifest básico.
- **Pendiente:** el Blog está vacío (0 posts) — la infraestructura SEO ya
  está lista, falta contenido.

## 8. Analytics

Todo centralizado en `src/components/Analytics.tsx`, montado en
`layout.tsx`. Cada script se inyecta **condicionalmente** según si su env var
existe — así el sitio funciona igual sin ninguna integración configurada.
Si `NEXT_PUBLIC_GTM_ID` está seteado, se prioriza GTM sobre GA4 directo
(recomendación oficial de Next.js: cuando hay GTM, GA4 se configura desde
ahí).

## 9. Deploy

- Hosting: **Vercel**, deploy automático desde el repo de Git (rama principal
  `master`).
- Dominio productivo: `creciendoconcesar.online` (DNS apuntado a Vercel).
- No hay carpeta `.vercel` en el working tree local (normal, está en
  `.gitignore`) — el proyecto parece estar vinculado vía el dashboard de
  Vercel, no vía CLI local.
- Cabeceras de seguridad HTTP configuradas en `next.config.ts`:
  `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`.

## 10. Estructura de carpetas

```
src/app/                                Rutas (App Router)
  page.tsx                              Home
  sobre-mi/page.tsx
  viral-prosper/page.tsx
  recursos/page.tsx, recursos/[slug]/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx
  trabaja-conmigo/page.tsx
  trabaja-conmigo/masterclass/page.tsx, actions.ts
  trabaja-conmigo/aplicar/page.tsx, actions.ts
  legal/privacidad|terminos|aviso-legal/page.tsx
  layout.tsx, globals.css, not-found.tsx
  sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, twitter-image.tsx, icon.png

src/components/                         Componentes reutilizables (ver §11)

src/lib/                                Datos y config de negocio
  site.ts          → config global (nombre, url, redes, nav)
  recursos.ts       → catálogo de libros/ebooks (Hotmart)
  blog.ts           → posts (vacío actualmente)
  countryCodes.ts   → códigos de país para PhoneInput
  notifications.ts  → capa de notificaciones (email + Sheets)

public/                                 Assets estáticos
  cesar.jpg, covers/*.jpg, testimonios/testimonio-michel.mp4
```

## 11. Componentes importantes

| Componente | Rol |
|---|---|
| `Header.tsx` / `MobileNav.tsx` | Navegación principal, CTA "Trabaja Conmigo" destacado |
| `Footer.tsx` | Links legales, redes sociales |
| `Button.tsx` / `Card.tsx` / `Badge.tsx` | Primitivas de UI del sistema de diseño |
| `ApplicationForm.tsx` | Formulario multi-paso de aplicación 1:1 |
| `MasterclassForm.tsx` | Formulario de suscripción a la masterclass |
| `PhoneInput.tsx` | Selector de país + número, compartido por ambos formularios |
| `TestimonialVideo.tsx` | Reproductor de testimonio en video |
| `PhotoPlaceholder.tsx` | Placeholder visual mientras falta una foto real |
| `Analytics.tsx` | Inyección condicional de GTM/GA4/Meta Pixel/Clarity |
| `icons.tsx` | Iconos SVG inline compartidos |
| `VslPlayer.tsx` | VSL del Hero: "lite facade" de YouTube (miniatura + botón play); el iframe solo se monta al hacer clic, cero carga de video/cookies antes de eso |
| `LiveViewersBadge.tsx` | Punto verde animado + contador de "personas viendo" que fluctúa 12–20 cada 20–40s (dato simulado, no real — ver §14) |
| `CalendlyEmbed.tsx` | `InlineWidget` de `react-calendly`, coloreado con la paleta del sitio (negro/dorado), montado solo tras un envío exitoso de `ApplicationForm` |

## 12. Convenciones de código

- TypeScript estricto; tipos de dominio definidos junto a los datos (ej.
  `Recurso` en `recursos.ts`, `BlogPost` en `blog.ts`).
- Server Components por defecto; `"use client"` solo en componentes con
  estado/interactividad (formularios, nav móvil).
- Formularios usan Server Actions (`"use server"`) en archivos `actions.ts`
  junto a la página, no API routes.
- Estilos con clases de Tailwind inline; tokens de color semánticos del
  sistema de diseño (`text-primary`, `text-secondary`, `dorado`, `surface`,
  `border`, etc. — ver `SISTEMA_DISENO.md`).
- Contenido de negocio centralizado en `src/lib/*.ts`, nunca hardcodeado
  dentro de los componentes de página.
- Sin backend/API propio: toda integración externa se llama directo desde
  Server Actions o Server Components.

## 13. Tareas pendientes

- Completar y revisar legalmente los textos de `/legal/*` (tienen placeholders
  tipo `[ RAZÓN SOCIAL ]`, `[ EMAIL DE CONTACTO ]`, `[ FECHA ]`).
- Publicar contenido en el Blog (actualmente 0 posts).
- Confirmar si `public/cesar.jpg` es ya la foto final o sigue pendiente.
- Configurar Google Tag Manager y/o Meta Pixel si se activan campañas pagas.
- Conectar Sanity (CMS) si se decide dejar de editar contenido por código.
- Implementar canal WhatsApp en la capa de notificaciones (diseño ya
  preparado en `notifications.ts`).
- Verificar que las env vars de producción en Vercel coincidan con las de
  `.env.local`.
- Evaluar agregar tests automatizados (hoy no hay ninguno).
- Si se sube un video VSL con mejor resolución a YouTube, actualizar
  `vslYoutubeId` en `src/app/page.tsx` (hoy `ajDhiJP6YBE`) — el thumbnail
  `maxresdefault.jpg` de ese video no existe y cae a `hqdefault.jpg`
  (menor resolución) vía el fallback de `VslPlayer.tsx`.
- Decidir si el contador de "personas viendo" (`LiveViewersBadge.tsx`) se
  mantiene como número simulado o se conecta a un dato real — ver nota de
  tensión de marca en §14.

## 14. Decisiones técnicas tomadas

- **Sin CMS en v1**: contenido en código (`src/lib/`), migración a Sanity
  queda como paso futuro documentado, no bloqueante.
- **Notificaciones desacopladas**: interfaz genérica de "canal" para poder
  sumar WhatsApp sin reestructurar formularios; Slack descartado
  explícitamente.
- **Un solo botón de acción por recurso**: el visitante descubre si es
  gratis o de pago al presionar el botón, sin indicador previo en la
  tarjeta (decisión de producto, no técnica, pero afecta la UI de
  `recursos.ts`).
- **Recursos: listado único y mezclado** (gratis y de pago juntos, sin
  pestañas ni precios visibles en el sitio).
- **GA4 vía componente oficial** de `@next/third-parties`, priorizado sobre
  un `<Script>` manual; se apaga automáticamente si se activa GTM.
- **Cada integración de Analytics es opt-in por env var** — el sitio nunca
  depende de que una integración exista para funcionar.
- Este proyecto trata todo cambio como cambio en producción (sitio ya
  público, con usuarios reales) — ver protocolo de Tech Lead acordado con
  César: analizar impacto → implementar → verificar → resumir, sin romper
  SEO/Analytics/formularios/rendimiento/accesibilidad/seguridad, y sin
  eliminar funcionalidad sin confirmación explícita.
- **Hero de Home rediseñado (2026-07-17)**: el H1 (`src/app/page.tsx`) pasó
  de un título corto de 2 líneas a una pregunta de identificación de dolor,
  partida en bloques `<span className="block">` cortos (control manual de
  quiebres de línea, no depende solo del wrap del navegador) con las
  palabras "dinero", "tiempo" y "oportunidades" resaltadas en
  `text-dorado-text`. Tamaño responsive hasta 70px en `xl` (dentro del rango
  64–72px pedido). El layout de 2 columnas (texto + foto) solo se activa
  desde `lg` (1024px) — en mobile/tablet el Hero se apila (texto completo
  arriba, foto centrada debajo con `max-w-sm`), evitando que la foto quede
  desbalanceada en anchos intermedios. La foto (`/cesar.jpg`) se mantiene en
  la misma sección y lado (derecha en desktop), solo se redujo su columna
  para que el titular domine visualmente. Verificado sin overflow horizontal
  ni quiebres de línea no deseados en 375/640/768/1024/1280px.
- **Ajuste de tamaño del Hero (2026-07-17, mismo día)**: el H1 original de
  70px en `xl` resultó demasiado grande y fragmentado (8 líneas forzadas).
  Se rediseñó a texto fluido natural (sin `<span className="block">` por
  frase, solo los 3 keywords en dorado como spans inline), con tamaño
  reducido ~34% en desktop: `lg:text-[42px]` (antes 64px) y
  `xl:text-[46px]` (antes 70px). El bloque de texto (H1 + subtítulo +
  botones) ahora mide prácticamente lo mismo que la foto en `xl` (425px vs
  424px medido). Mobile (`text-4xl`/36px) y tablet (`sm:text-5xl`,
  `md:text-5xl`/48px) quedaron sin cambios respecto a la versión anterior,
  ya que el ajuste se limitó a `lg`/`xl` según lo pedido. Subtítulo con
  `max-w-xl` para 3-4 líneas legibles junto al titular.
- **Hero reestructurado alrededor del VSL (2026-07-22)**: se reemplazó la
  foto del Hero por un video VSL (`VslPlayer.tsx`), y luego se simplificó
  a una sola columna centrada: Hook (H1) → video → `LiveViewersBadge` →
  un único botón "Aplicar para una llamada". Se quitaron de esta sección
  el subtítulo y el segundo botón "Conoce mi historia" (siguen accesibles
  vía nav/"Sobre Mí") para enfocar la atención solo en el hook y el video.
  El video original (`VSL Chat.mp4`, 415 MB) no podía commitearse — GitHub
  bloquea archivos >100MB — así que se aloja en YouTube como oculto
  (unlisted) y se embebe con el patrón "lite facade": miniatura +
  botón de play, sin cargar el iframe/cookies de YouTube hasta el clic.
- **Contador de viewers es un dato simulado, no real** (`LiveViewersBadge.tsx`):
  fluctúa 12–20 cada 20–40s vía `setTimeout`, con fade de 300ms. Se señaló
  a César que esto entra en tensión con el posicionamiento de "sin
  promesas falsas" de `PRD.md`; lo confirmó explícitamente y se implementó
  tal cual. Si en el futuro se quiere basar en datos reales, reemplazar la
  lógica de `randomViewers()` por una fuente real (ej. analítica en vivo).
- **Calendly integrado inline, no manual (2026-07-22)**: `PRD.md`/
  `ARQUITECTURA.md` documentaban como decisión confirmada de v1 que César
  revisaría cada aplicación manualmente antes de enviar su link de
  Calendly por mensaje. Esa decisión fue revertida explícitamente por
  César: ahora, tras cualquier envío exitoso de `ApplicationForm`, se
  muestra un mensaje de confirmación y de inmediato el calendario
  (`CalendlyEmbed.tsx`, `react-calendly` → `InlineWidget`) para agendar sin
  salir del sitio ni filtro manual previo. Se agregó la dependencia
  `react-calendly` (`npm install`). El evento usado es
  `siteConfig.calendlyUrl` en `src/lib/site.ts`. No requiere variables de
  entorno nuevas (la URL es pública). Verificado que Resend, Google
  Sheets, GA4 y Clarity siguen intactos — el cambio solo afecta qué se
  renderiza después de que `submitApplication` devuelve éxito.

---

*Este documento debe actualizarse después de cada cambio importante:
integraciones nuevas, cambios de arquitectura, nuevas páginas/flujos, o
decisiones técnicas relevantes.*
