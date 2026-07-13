# Wireframes — "Creciendo con César"

**Versión:** 1.0 (borrador para aprobación)
**Basado en:** [PRD.md](./PRD.md) y [ARQUITECTURA.md](./ARQUITECTURA.md) (aprobados)
**Estado:** 🟡 Pendiente de aprobación antes de pasar al Sistema de Diseño

---

## Cómo leer este documento

Estos wireframes son de **baja fidelidad**: definen jerarquía visual, orden de lectura y disposición de cada bloque (columna única vs. columnas, dónde va la imagen, qué se ve primero). **No definen** todavía color, tipografía ni estilo — eso es la siguiente fase (Sistema de Diseño). Todo aquí puede ajustarse sin afectar el trabajo ya aprobado de arquitectura.

Convenciones de los diagramas de caja:
- `[ ]` = bloque de contenido
- `IMG` = espacio de imagen/foto
- `CTA` = botón de acción
- Ancho del bloque ≈ importancia visual relativa

---

## 1. Home (`/`)

```
┌─────────────────────────────────────────────┐
│  Header: logo-texto  Inicio·Sobre Mí·Viral   │  ← fijo (sticky) al hacer scroll
│  Prosper·Recursos·Blog        [Trabaja Conmigo]│
├─────────────────────────────────────────────┤
│                                               │
│   HERO (100vh o cercano)                     │
│   ┌───────────────┐   ┌───────────────────┐ │
│   │  Headline      │   │                    │ │
│   │  Subtítulo     │   │      IMG           │ │
│   │  [CTA primario]│   │  (foto de César)   │ │
│   └───────────────┘   └───────────────────┘ │
│   Texto a la izquierda, foto a la derecha    │
│   (en mobile: texto primero, foto debajo —   │
│   confirmado, prioridad al mensaje)          │
│                                               │
├─────────────────────────────────────────────┤
│  Credibilidad rápida — 1 línea o 3 cifras     │
│  centradas, bloque angosto, mucho aire        │
├─────────────────────────────────────────────┤
│  ¿TE SIENTES ASÍ?                             │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                 │
│  │dolor│ │dolor│ │dolor│ │dolor│  (grid 4 col │
│  └────┘ └────┘ └────┘ └────┘   → 2 col mobile)│
├─────────────────────────────────────────────┤
│  QUIÉN ES CÉSAR                               │
│  ┌───────────────┐   ┌───────────────────┐   │
│  │     IMG        │   │ Historia resumida  │   │
│  │ (foto/retrato) │   │ [Conoce mi historia]│   │
│  └───────────────┘   └───────────────────┘   │
│  (invertido respecto al hero: foto izquierda) │
├─────────────────────────────────────────────┤
│  CÓMO TE AYUDO                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Llamadas │ │  Viral   │ │ Recursos │      │
│  │   1:1    │ │ Prosper  │ │ y libros │      │
│  └──────────┘ └──────────┘ └──────────┘      │
│  3 tarjetas iguales, mismo peso visual        │
├─────────────────────────────────────────────┤
│  PRUEBA SOCIAL                                │
│  ┌───────────────┐   ┌───────────────────┐   │
│  │  Video         │   │  Mensajes/textos   │   │
│  │  testimonio    │   │  de testimonio     │   │
│  └───────────────┘   └───────────────────┘   │
├─────────────────────────────────────────────┤
│  TRANSPARENCIA ANTE TODO                      │
│  Bloque angosto centrado, cita/idea fuerte    │
│  + mención de "Los 7 Filtros Antifraudes"     │
│  [Ver el libro]                               │
├─────────────────────────────────────────────┤
│  PREGUNTAS FRECUENTES (objeciones)            │
│  Acordeón vertical, una columna                │
│  ¿Es esto serio? / ¿Es una estafa? / etc.     │
├─────────────────────────────────────────────┤
│  CTA FINAL                                    │
│  Bloque centrado, ancho completo, contraste    │
│  fuerte. [Trabaja Conmigo]                    │
├─────────────────────────────────────────────┤
│  Footer: legal · redes · mapa corto · ©       │
└─────────────────────────────────────────────┘
```

**Notas de jerarquía:** el Hero y el CTA final son los únicos bloques "de alto contraste"; todo lo demás mantiene el mismo peso visual para no competir con la conversión. La sección de dolores usa 4 íconos/frases cortas, sin párrafos largos — es para generar identificación rápida, no para leer.

---

## 2. Sobre Mí (`/sobre-mi`)

```
┌─────────────────────────────────────────────┐
│  Hero angosto: IMG (foto) + frase personal    │
│  a una columna, centrado                      │
├─────────────────────────────────────────────┤
│  Historia completa                            │
│  Columna única de texto (ancho de lectura,     │
│  ~650px), con 2-3 fotos intercaladas si hay    │
│  material; formato "storytelling" progresivo   │
│  (Cuba → EE.UU. → error financiero → misión)   │
├─────────────────────────────────────────────┤
│  Misión y Visión                              │
│  ┌───────────────┐   ┌───────────────────┐   │
│  │    Misión      │   │      Visión        │   │
│  └───────────────┘   └───────────────────┘   │
│  2 columnas iguales, mismo peso                │
├─────────────────────────────────────────────┤
│  Cómo trabajo / mis valores                   │
│  Lista de 3-4 valores en fila (íconos + texto  │
│  corto), no tarjetas pesadas                   │
├─────────────────────────────────────────────┤
│  CTA a Trabaja Conmigo                        │
├─────────────────────────────────────────────┤
│  Footer                                       │
└─────────────────────────────────────────────┘
```

---

## 3. Viral Prosper (`/viral-prosper`)

```
┌─────────────────────────────────────────────┐
│  Hero: título + síntesis en 1 frase           │
├─────────────────────────────────────────────┤
│  Qué es (columna única, texto breve)          │
├─────────────────────────────────────────────┤
│  Relación con Creciendo con César             │
│  Bloque tipo "diagrama simple": Creciendo con  │
│  César (marca) → Viral Prosper (uno de sus     │
│  proyectos) — para dejar clara la jerarquía    │
├─────────────────────────────────────────────┤
│  Para quién es (lista corta)                  │
├─────────────────────────────────────────────┤
│  CTA a Trabaja Conmigo                        │
├─────────────────────────────────────────────┤
│  Footer                                       │
└─────────────────────────────────────────────┘
```

---

## 4. Recursos (`/recursos` + `/recursos/[slug]`)

**Listado `/recursos`:**
```
┌─────────────────────────────────────────────┐
│  Encabezado breve de la sección               │
├─────────────────────────────────────────────┤
│  ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ portada  │ │ portada  │ │ portada  │      │
│  │ título   │ │ título   │ │ título   │      │
│  │ 1 línea  │ │ 1 línea  │ │ 1 línea  │      │
│  └──────────┘ └──────────┘ └──────────┘      │
│  Grid de tarjetas iguales, sin distinguir      │
│  visualmente gratis vs. pago                   │
├─────────────────────────────────────────────┤
│  Footer                                       │
└─────────────────────────────────────────────┘
```

**Detalle `/recursos/[slug]`:**
```
┌─────────────────────────────────────────────┐
│  ┌───────────────┐   ┌───────────────────┐   │
│  │   IMG portada  │   │ Título             │   │
│  │                │   │ Descripción breve  │   │
│  │                │   │ Para quién es      │   │
│  │                │   │ [CTA único]         │   │
│  └───────────────┘   └───────────────────┘   │
├─────────────────────────────────────────────┤
│  Qué aprenderás (lista con bullets)            │
├─────────────────────────────────────────────┤
│  Footer                                       │
└─────────────────────────────────────────────┘
```
El botón `[CTA único]` descarga o redirige a Hotmart según el tipo configurado — visualmente es un solo botón, sin variación de diseño entre ambos casos.

---

## 5. Trabaja Conmigo (`/trabaja-conmigo`) — página clave del embudo

```
┌─────────────────────────────────────────────┐
│  Encabezado de posicionamiento                │
│  ("Así puedes empezar a trabajar conmigo")     │
├─────────────────────────────────────────────┤
│  ┌─────────────────┐   ┌─────────────────┐   │
│  │ 🚀 Masterclass    │   │ 🤝 Reunión 1 a 1  │   │
│  │ descripción breve │   │ descripción breve  │   │
│  │ [Acceder a la     │   │ [Aplicar para una  │   │
│  │  Masterclass]     │   │  llamada]          │   │
│  └─────────────────┘   └─────────────────┘   │
│  2 tarjetas del mismo tamaño, una junto a otra │
│  (en mobile: apiladas). Espacio visual         │
│  reservado debajo para futuras opciones sin    │
│  romper el layout (grid preparado a 3-4 cols)  │
├─────────────────────────────────────────────┤
│  Footer                                       │
└─────────────────────────────────────────────┘
```

---

## 6. Masterclass (`/trabaja-conmigo/masterclass`)

```
┌─────────────────────────────────────────────┐
│  Hero: qué es, para quién, qué aprenderás      │
│  (columna única, breve)                        │
├─────────────────────────────────────────────┤
│  Formulario de suscripción                    │
│  ┌───────────────────────────────────────┐   │
│  │  Email (obligatorio)                   │   │
│  │  Teléfono (recomendado)                │   │
│  │  [Quiero inscribirme]                   │   │
│  └───────────────────────────────────────┘   │
│  Formulario corto, centrado, sin distracciones │
├─────────────────────────────────────────────┤
│  Footer                                       │
└─────────────────────────────────────────────┘
```

---

## 7. Aplicar para la llamada 1:1 (`/trabaja-conmigo/aplicar`)

```
┌─────────────────────────────────────────────┐
│  Encabezado de "requisitos" (los 7 puntos)     │
│  Columna única, lista clara, tono de filtro    │
│  de expectativas, no de venta                  │
├─────────────────────────────────────────────┤
│  Formulario de Aplicación — confirmado: 4 pasos│
│  ┌───────────────────────────────────────┐   │
│  │  Barra de progreso siempre visible     │   │
│  │  ("Paso 2 de 4") — orienta al visitante │   │
│  │  y refuerza que el proceso es corto     │   │
│  │  ─────────────────────────────────      │   │
│  │  Paso 1: información básica (nombre*,  │   │
│  │          teléfono* obligatorios)        │   │
│  │  Paso 2: situación actual               │   │
│  │  Paso 3: reto y motivación (preguntas   │   │
│  │          abiertas)                      │   │
│  │  Paso 4: compromiso e inversión → envío │   │
│  │  [Enviar aplicación]                    │   │
│  └───────────────────────────────────────┘   │
├─────────────────────────────────────────────┤
│  Pantalla de confirmación (tras enviar)        │
│  Mensaje: "Gracias, reviso tu aplicación       │
│  personalmente y te contacto pronto" + nota    │
│  breve de privacidad                           │
├─────────────────────────────────────────────┤
│  Footer                                       │
└─────────────────────────────────────────────┘
```

**Confirmado:** experiencia ligera y conversacional en 4 pasos — información básica → situación actual → reto y motivación → compromiso y envío — con barra de progreso visible en todo momento. Cada paso se guarda progresivamente para no perder respuestas si el visitante se distrae.

---

## 8. Blog (`/blog` + `/blog/[slug]`)

```
Listado: grid de tarjetas (imagen + título + fecha), 3 columnas → 1 en mobile
Detalle: columna única de lectura (~650px), imagen destacada arriba,
         CTA interno al final del artículo (a Recursos o Trabaja Conmigo)
```

---

## 9. Legal (`/legal/*`)

```
Columna única de texto, sin elementos decorativos, encabezado simple.
```

---

## 10. Header y Footer (globales)

**Header:** logo-texto a la izquierda, navegación centrada/derecha, botón "Trabaja Conmigo" siempre visible y con mayor contraste que el resto de los links. Se colapsa a menú hamburguesa en mobile.

**Footer:** 3 columnas (Navegación / Legal / Redes sociales) que se apilan en mobile, línea final de copyright.

---

## 11. Comportamiento Responsive (regla general)

- Todo layout de 2 columnas → **se apila verticalmente en mobile**, siempre con el **texto antes que la imagen**, incluido el Hero. Confirmado: la prioridad es que el visitante entienda en los primeros segundos quién es César, cómo ayuda y cuál es la acción principal — la foto refuerza esa conexión, no la antecede.
- Grids de 3-4 tarjetas → **2 columnas en tablet, 1 en mobile**.
- El CTA principal de cada página permanece visible sin necesidad de scroll excesivo en mobile.

---

## 12. Decisiones Confirmadas

1. Formulario de aplicación en **4 pasos** con **barra de progreso** siempre visible. ✅
2. En mobile, el **texto va antes que la foto** en todos los bloques de 2 columnas, incluido el Hero. ✅
3. Sin bloques adicionales o sobrantes señalados — la lista de bloques queda confirmada tal como está documentada.

**No quedan puntos abiertos.**

---

*Con tu aprobación, avanzamos a la fase de **Sistema de Diseño**.*
