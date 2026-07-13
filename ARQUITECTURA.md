# Arquitectura del Sitio — "Creciendo con César"

**Versión:** 1.0 (borrador para aprobación)
**Basado en:** [PRD.md](./PRD.md) (aprobado)
**Estado:** 🟡 Pendiente de aprobación antes de pasar a Wireframes

---

## 1. Sitemap (con URLs propuestas)

```
/                                  Home
/sobre-mi                          Sobre Mí
/viral-prosper                     Viral Prosper (síntesis)
/recursos                          Recursos / Libros (listado)
/recursos/[slug]                   Detalle de cada libro (ej. /recursos/los-7-filtros-antifraudes)
/blog                              Blog (listado)
/blog/[slug]                       Artículo individual
/trabaja-conmigo                   Trabaja Conmigo (hub de servicios y programas)
/trabaja-conmigo/masterclass       Detalle de la Masterclass
/trabaja-conmigo/aplicar           Formulario de Aplicación (llamada 1:1)
/legal/privacidad                  Política de Privacidad
/legal/terminos                    Términos y Condiciones
/legal/aviso-legal                 Aviso Legal
```

**Navegación principal (header):** Inicio · Sobre Mí · Viral Prosper · Recursos · Blog · **Trabaja Conmigo** (CTA destacado, botón, no solo link de texto). El texto exacto del botón se afinará en la fase de copywriting.

**Footer:** links legales, redes sociales (Instagram, Facebook, YouTube), mapa de sitio corto, © marca.

### Decisiones de estructura (confirmadas)

- **"Dolores del cliente ideal"** → **sección dentro de Home**. ✅ Confirmado — forma parte del recorrido natural del visitante sin obligarlo a navegar a otra página.
- **"Trabaja Conmigo"** → **página independiente** (`/trabaja-conmigo`). ✅ Confirmado — pensada para crecer a futuro como el centro de servicios, programas y el punto de entrada al formulario de aplicación. Presenta dos opciones iniciales:
  - **Opción 1 — 🚀 Masterclass:** para quien quiere conocer la metodología y los fundamentos → CTA "Acceder a la Masterclass" → lleva a `/trabaja-conmigo/masterclass`
  - **Opción 2 — 🤝 Reunión 1 a 1:** para quien busca orientación personalizada → CTA "Aplicar para una llamada" → lleva a `/trabaja-conmigo/aplicar` (el formulario de calificación)
  - La página queda estructurada como una lista de tarjetas de opciones, de modo que se puedan añadir más servicios/programas en el futuro sin rediseñar la página.
- **Recursos** con página de listado + una página propia por libro (mejor para SEO individual de cada título y para poder añadir más productos a futuro sin rediseñar). Slug del primer libro: `/recursos/los-7-filtros-antifraudes` (nombre completo, confirmado).

---

## 2. Estructura de contenido por página (bloques, antes de wireframe visual)

### Home (`/`)
1. **Hero** — foto profesional de César, headline de posicionamiento, subtítulo, CTA primario "Agenda tu llamada"
2. **Credibilidad rápida** — línea o cifra breve de autoridad (ej. personas guiadas, años de experiencia, lo que corresponda)
3. **¿Te sientes así?** — bloque de dolores (falta de dinero, tiempo, oportunidades, desconfianza)
4. **Quién es César** — resumen de historia (2-3 párrafos) + link a "Sobre Mí" completo
5. **Cómo te ayudo** — 3 tarjetas: Llamadas 1:1 / Viral Prosper / Recursos y libros
6. **Prueba social** — video testimonio + mensajes de texto recibidos
7. **Transparencia ante todo** — mención de "Los 7 Filtros Antifraudes" como evidencia de honestidad, con link a Recursos
8. **FAQ de objeciones** — "¿esto es serio?", "¿es una estafa?", "¿cuánto tiempo necesito?", etc. (Copy trabajará las respuestas exactas)
9. **CTA final** — repetición del llamado a agendar
10. Footer

### Sobre Mí (`/sobre-mi`)
1. Hero personal (foto + frase)
2. Historia completa: Cuba → EE.UU. → errores financieros → aprendizaje → misión actual
3. Misión y visión
4. Cómo trabajo / mis valores (transparencia, sin promesas falsas, acompañamiento)
5. CTA a agenda

### Viral Prosper (`/viral-prosper`)
1. Qué es (síntesis de metodología/ecosistema)
2. Relación con "Creciendo con César" (proyecto dentro del ecosistema, no protagonista)
3. Para quién es / qué incluye a nivel general
4. CTA a agenda

### Recursos (`/recursos` + `/recursos/[slug]`)
- Listado **único y mezclado**: materiales gratuitos y de pago aparecen juntos, sin separar en pestañas ni etiquetar "gratis"/"pago" en la tarjeta (consistente con no mostrar precios ni montos).
- Detalle de cada recurso: descripción, para quién es, qué aprenderás, y **un solo botón de acción** cuyo comportamiento depende del tipo de recurso configurado en el CMS:
  - Si es **gratuito** → el botón dispara la descarga directa del archivo (PDF u otro) al dispositivo del visitante.
  - Si es **de pago** → el botón redirige al checkout externo en Hotmart (el precio se muestra allá, nunca en el sitio).
- El visitante descubre si es gratis o de pago **al presionar el botón**, tal como lo pediste — no hay indicador previo en la tarjeta.

### Blog (`/blog` + `/blog/[slug]`)
- Listado con filtro por categoría (a futuro)
- Artículo estándar: título, fecha, contenido, CTA interno a Contacto o Recursos según el tema

### Trabaja Conmigo (`/trabaja-conmigo`)
1. Encabezado de posicionamiento ("así puedes empezar a trabajar conmigo")
2. Tarjeta **Opción 1 — 🚀 Masterclass**: descripción breve + CTA "Acceder a la Masterclass"
3. Tarjeta **Opción 2 — 🤝 Reunión 1 a 1**: descripción breve + CTA "Aplicar para una llamada"
4. Espacio reservado para futuras opciones (mentorías, programas, comunidad) sin rediseñar la página
5. Sin montos ni precios visibles, consistente con la política definida en el PRD

### Masterclass (`/trabaja-conmigo/masterclass`)
**Definido:** para v1, la Masterclass es de **acceso gratuito**. La página termina en un formulario propio de suscripción ("incubadora"), no en un checkout.
1. Qué es, para quién es, qué se aprende
2. Formulario de suscripción: email (obligatorio) + teléfono (recomendado, para poder nutrir por WhatsApp cuando esa integración exista) → confirma inscripción a la incubadora previa a la fecha en vivo
3. Mensaje de confirmación tras suscribirse

**Nota de roadmap (no se construye en v1, solo queda registrado):** estás probando en paralelo, con un amigo, una versión de **masterclass paga** (empaquetando los dos libros a un precio simbólico junto con el acceso a la masterclass, para filtrar curiosos y aumentar el compromiso). Si esa prueba funciona, se evaluará más adelante si se replica dentro de este sitio como una segunda opción de acceso (gratis vs. pago) en esta misma página, sin romper la estructura actual — el modelo de contenido ya queda preparado para soportar ambos caminos en el futuro (ver sección 4).

### Aplicar para la llamada 1:1 (`/trabaja-conmigo/aplicar`)
1. Encabezado de "requisitos" para solicitar la llamada (los 7 puntos ya definidos por César)
2. **Formulario de Aplicación** (13 preguntas del PRD; Nombre y Teléfono obligatorios)
3. Mensaje de confirmación post-envío: agradecimiento + expectativa clara ("reviso tu aplicación personalmente y te contacto pronto"), sin revelar si calificó o no automáticamente
4. Nota breve de privacidad + link a política

### Legal (`/legal/*`)
Páginas de texto simple, sin necesidad de diseño complejo.

---

## 3. Flujos de Usuario

### Flujo A — Conversión principal (el más importante)
```
Visitante (redes sociales / Google / directo)
        │
        ▼
   Home o Blog
        │
        ▼
   /trabaja-conmigo
        │
        ▼
  Elige entre Masterclass o Reunión 1 a 1
        │
        ▼
   /trabaja-conmigo/aplicar
        │
        ▼
  Lee requisitos + Completa Formulario de Aplicación
        │
        ▼
  Sistema guarda la respuesta + notifica a César (email)
        │
        ▼
  César revisa manualmente
        │
   ┌────┴─────┐
   ▼          ▼
Califica   No califica
   │          │
   ▼          ▼
César envía   César envía
Calendly a    video educativo
mano (mensaje)   por YouTube
   │
   ▼
Llamada 1:1 agendada
```

### Flujo A.1 — Camino de la Masterclass (alternativo, dentro de Trabaja Conmigo)
```
/trabaja-conmigo → Opción "Masterclass" → /trabaja-conmigo/masterclass → CTA de acceso
   (mecanismo exacto de acceso pendiente de definir: registro gratuito vs. checkout de pago)
```

### Flujo B — Recursos (gratis o de pago, mismo recorrido)
```
Visitante → Home/Blog → /recursos → /recursos/[recurso] → Botón único de acción
                                                              │
                                                    ┌─────────┴─────────┐
                                                    ▼                   ▼
                                              Recurso gratuito     Recurso de pago
                                                    │                   │
                                                    ▼                   ▼
                                          Descarga directa       Checkout en Hotmart
                                          del archivo             (fuera del sitio)
```

### Flujo D — Suscripción a la Masterclass (gratuita, v1)
```
Visitante → /trabaja-conmigo → Opción "Masterclass" → /trabaja-conmigo/masterclass
        → Formulario de suscripción (email + teléfono) → Confirmación
        → Entra a la "incubadora" (nutrición por email, y por WhatsApp cuando esa integración exista)
```

### Flujo C — Descubrimiento por contenido (SEO / redes)
```
Google o red social → /blog/[articulo] → CTA interno → /trabaja-conmigo o /recursos
```

---

## 4. Modelo de Contenido (para el CMS)

Esto define qué podrás editar tú mismo sin tocar código:

| Tipo de contenido | Campos principales |
|---|---|
| **Aplicación/Lead** (generado por el formulario, no editado por ti) | nombre, teléfono, respuestas del cuestionario, fecha, estado (nuevo / calificado / no calificado / contactado) |
| **Testimonio** | nombre (o anónimo), tipo (video/texto), contenido, archivo/link |
| **Recurso/Libro** | título, descripción, portada, bullets de beneficios, **tipo (gratuito / de pago)**, archivo descargable (si es gratuito) o link de Hotmart (si es de pago) |
| **Suscriptor de Masterclass** (generado por el formulario, no editado por ti) | email, teléfono, fecha de inscripción — base para la incubadora por email/WhatsApp |
| **Post de Blog** | título, slug, contenido, imagen destacada, categoría, metadatos SEO |
| **FAQ** | pregunta, respuesta |
| **Opción de "Trabaja Conmigo"** | título (ej. Masterclass, Reunión 1 a 1), ícono/emoji, descripción breve, texto del CTA, destino del CTA — editable para poder añadir nuevas opciones sin tocar código |
| **Configuración general** | textos del hero, enlaces a redes sociales, link del video "no calificado" |

---

## 5. Arquitectura Técnica (confirmación del Tech Lead)

- **Framework:** Next.js (App Router) — SSG/ISR para páginas de contenido (Home, Sobre Mí, Recursos, Blog) y rutas dinámicas para blog/recursos.
- **Estilos:** Tailwind CSS — permite construir el sistema de diseño oscuro/minimalista de forma consistente y mantenible.
- **Hosting:** Vercel — despliegue automático, buen tier gratuito inicial, óptimo para Next.js y Core Web Vitals.
- **CMS headless recomendado:** **Sanity** — Studio de edición embebido y gratuito en el tier inicial, modelo de contenido flexible (ideal para Testimonios, Recursos, Blog, FAQ, Configuración), curva de aprendizaje baja para alguien no técnico.
  - Alternativa evaluada: Payload CMS (más control, pero requiere base de datos propia y más mantenimiento de infraestructura) — se descarta para v1 por complejidad innecesaria.
- **Formulario de Aplicación** (vive en `/trabaja-conmigo/aplicar`):
  - Construido como formulario propio en Next.js (no Typeform ni Calendly).
  - Al enviarse: (1) se guarda la respuesta (como documento en Sanity o en una tabla simple), (2) se dispara una notificación a César a través de un **servicio de notificaciones desacoplado** (una capa intermedia con un solo canal activo en v1: **email**, vía un proveedor como Resend). Esta capa se diseña con una interfaz genérica ("enviar notificación de nueva aplicación") para que agregar **WhatsApp** más adelante sea solo cuestión de añadir un nuevo canal/adaptador, sin reestructurar el formulario ni el resto del proyecto. Slack queda descartado, no se construye esa integración.
  - Nombre y Teléfono validados como obligatorios antes de permitir el envío.
- **Analítica:** Google Tag Manager como contenedor único, con GA4, Meta Pixel y Microsoft Clarity configurados como tags dentro de GTM (facilita agregar/quitar sin tocar código). Eventos custom: inicio de formulario, envío completado, clics a Hotmart.
- **Dominio:** creciendoconcesar.online → apuntado a Vercel vía DNS.
- **Formatos de imagen:** conversión de material HEIC a WebP/JPG optimizado antes de subir al CMS.

---

## 6. Decisiones Confirmadas y Único Punto Pendiente

**Confirmado:**
1. "Dolores del cliente" vive como sección de Home. ✅
2. "Trabaja Conmigo" es página independiente (`/trabaja-conmigo`), con Masterclass y Reunión 1 a 1 como sus dos opciones iniciales, preparada para crecer. ✅
3. Stack aprobado: Next.js + Tailwind + Vercel + Sanity. ✅
4. Notificaciones solo por email en v1, con arquitectura desacoplada para sumar WhatsApp después sin reestructurar. Slack descartado. ✅
5. Slugs de recursos con nombre completo: `/recursos/los-7-filtros-antifraudes` (y equivalente para el resto). ✅

6. Masterclass en v1: **acceso gratuito** vía formulario propio de suscripción (email + teléfono). La versión paga (libros + masterclass a precio simbólico) se está probando externamente y queda anotada como posible expansión futura, sin comprometer la estructura actual. ✅
7. Recursos: listado único y mezclado (gratis y de pago juntos), con un botón de acción por recurso que descarga el archivo o redirige a Hotmart según el tipo configurado en el CMS. ✅
8. Se añaden los enlaces de pago de Hotmart para los dos libros actuales en v1. ✅

**No quedan puntos abiertos técnicamente**, pendiente solo de tu confirmación final.

---

*Con tu aprobación, avanzamos a la fase de **Wireframes**.*
