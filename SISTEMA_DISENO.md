# Sistema de Diseño — "Creciendo con César"

**Versión:** 1.0 (aprobado)
**Basado en:** Dirección Visual 3 (Calidez Cinemática), ajustada con sistema tricolor
**Estado:** ✅ Aprobado — referencia oficial para desarrollo

---

## 1. Filosofía

Base cálida y humana (fondo umber, tipografía condensada de carácter), pero con una disciplina de **producto digital**: espacio generoso, jerarquía clara, y un sistema de color con **tres roles fijos, nunca decorativos**. Ningún color se usa "porque queda bien" — cada uno comunica algo específico.

---

## 2. Color

### 2.1 Base (neutros)

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#211A14` | Fondo de página |
| `--surface` | `#2B2219` | Tarjetas, paneles |
| `--surface-2` | `#332820` | Elementos elevados (modales, dropdowns) |
| `--border` | `rgba(244,232,214,0.10)` | Borde por defecto — más sutil que antes para dar más aire |
| `--border-strong` | `rgba(244,232,214,0.20)` | Borde en hover/foco |
| `--text-primary` | `#F4E8D6` | Texto principal (marfil cálido) |
| `--text-secondary` | `#C7B49C` | Texto de apoyo |
| `--text-muted` | `#9C8B72` | Placeholders, metadatos |

### 2.2 Sistema tricolor (roles fijos)

Cada color tiene **un solo trabajo**. No se intercambian entre sí ni se usan por variedad visual.

| Rol | Color | Cuándo usarlo | Nunca usarlo para |
|---|---|---|---|
| 🟢 **Verde — Transparencia** | sólido `#7C9468` · tinte `rgba(124,148,104,.16)` · texto `#B7CBA0` | Contenido verificable: disclaimers, "Los 7 Filtros Antifraudes", políticas, badges de confianza, sección legal | Botones de acción, elementos decorativos |
| 🟡 **Dorado — Acción y Premium** | sólido `#C7A76B` · tinte `rgba(199,167,107,.16)` · texto `#E0C99A` · texto-sobre-sólido `#241505` | CTAs principales (Aplicar, Acceder), badges de Masterclass/paquetes premium | Contenido informativo neutro, texto de cuerpo |
| 🌸 **Rosa — Humano** | sólido `#C98B93` · tinte `rgba(201,139,147,.16)` · texto `#E3B7BC` | Testimonios, historias personales, comunidad | CTAs de conversión, contenido legal/verificable |

**Regla de uso:** en una misma vista, el dorado aparece como máximo en **un** botón de acción principal (nunca dos CTAs dorados compitiendo). Verde y rosa se usan en badges/etiquetas y acentos de ícono, no en botones de acción.

---

## 3. Tipografía

| Rol | Familia (producción) | Fallback de sistema | Peso | Tracking |
|---|---|---|---|---|
| Display (titulares) | Condensada de carácter — a licenciar (ref: Druk, Zilla Condensed) | `'Arial Narrow','Helvetica Neue Condensed',sans-serif` | 700 | +0.01em |
| Cuerpo | Sans redondeada humanista (ref: SF Pro Rounded) | `-apple-system,'Segoe UI',sans-serif` | 400 / 600 (énfasis) | normal |
| Utilitaria (eyebrows, labels) | Igual que cuerpo, mayúsculas | — | 600 | +0.08em |

**Escala tipográfica:**

| Nivel | Tamaño | Line-height | Uso |
|---|---|---|---|
| Display XL | 44–56px (clamp) | 1.1 | Hero de Home |
| Display L | 32–38px | 1.15 | Títulos de sección |
| H2 | 24px | 1.25 | Subtítulos |
| Body | 16px | 1.7 | Texto de lectura |
| Body pequeño | 14px | 1.6 | Descripciones de tarjeta |
| Caption/Eyebrow | 12px | 1.5 | Etiquetas, metadatos |

---

## 4. Espaciado (más aire, ajuste solicitado)

Escala base de 4px, aplicada con más generosidad que en la propuesta inicial:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96px`

- Padding interno de tarjetas: `28px` (antes 22px)
- Separación entre secciones de página: `96px` en desktop, `64px` en mobile
- Gap entre elementos de una fila (botones, tarjetas): `24px`

---

## 5. Componentes

### 5.1 Botones

- **Primario:** píldora completa (`border-radius: 999px`), relleno sólido dorado, texto en `#241505` (tinta oscura, nunca blanco/negro genérico). Un solo primario visible por vista.
- **Secundario (refinado — ajuste solicitado):** sin fondo, **sin borde**. Solo texto en `--text-secondary`, peso 600, con una flecha `→` como único elemento gráfico. Al pasar el cursor, el texto pasa a `--text-primary` (sin subrayado, sin caja). Es deliberadamente más callado que el primario.

### 5.2 Tarjetas

- Fondo `--surface`, borde `--border` (sutil), radio `16px`, padding `28px`.
- Ícono en celda tonal de 34px, color según el rol semántico de la tarjeta (ej. una tarjeta de "Reunión 1 a 1" usa tinte dorado porque es una acción).
- Sin sombra decorativa; la separación se logra con espacio, no con elevación.

### 5.3 Badges / etiquetas

- Píldora pequeña, fondo = tinte del rol (16% opacidad), texto = color-texto del mismo rol. Nunca texto negro/blanco genérico sobre badge de color.

### 5.4 Formularios (aplica al formulario de 4 pasos)

- Campos con fondo `--surface-2`, borde `--border`, radio `10px`, altura 44px.
- Barra de progreso: track en `--border`, relleno en dorado sólido, con etiqueta "Paso X de 4" en texto utilitario.
- Estados de foco: anillo sutil en dorado al 30% de opacidad — nunca cambia el borde a un color de rol distinto (evita confundir "foco" con "verificado" o "premium").

### 5.5 Iconografía

- Trazo grueso y redondeado (1.8px, joints curvos) — cálido, hecho a mano, nunca corporativo afilado.
- Color del ícono = color del rol semántico del bloque donde vive (verde/dorado/rosa/neutro), nunca decorativo fuera de esos roles.

---

## 6. Lo que NO cambia respecto a la Dirección 3 original

Confirmado explícitamente por el cliente como ya aprobado, sin ajustes:
- Fondo umber cálido y superficie tonal.
- Tipografía condensada en titulares + sans redondeada en cuerpo.
- Tarjetas con esquinas suaves (16px) y fotografía real como protagonista frecuente.
- Botones primarios en píldora completa.

---

*Con este documento como referencia, el Sistema de Diseño queda aprobado. Siguiente fase: Copywriting final de cada página, y luego Desarrollo.*
