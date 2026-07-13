# Creciendo con César — sitio web

Sitio construido con Next.js (App Router) + Tailwind CSS v4, siguiendo
[PRD.md](./PRD.md), [ARQUITECTURA.md](./ARQUITECTURA.md),
[WIREFRAMES.md](./WIREFRAMES.md), [SISTEMA_DISENO.md](./SISTEMA_DISENO.md) y
[COPYWRITING.md](./COPYWRITING.md).

## Correr en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Qué falta conectar (cuentas externas)

El sitio funciona completo en local sin nada de esto — son integraciones que
requieren que **tú** crees la cuenta y me compartas las credenciales (nunca
debo crear cuentas ni manejar contraseñas por ti).

| Integración | Para qué | Dónde se configura |
|---|---|---|
| **Dominio** `creciendoconcesar.online` | Publicar el sitio con su dominio real | Apuntar el DNS a Vercel (ya definido en `src/lib/site.ts`) |
| **Vercel** | Hosting y despliegue | Crear cuenta, conectar este proyecto |
| **Resend** | Que te lleguen por email las aplicaciones a la llamada 1:1 y las inscripciones a la masterclass | `RESEND_API_KEY`, `NOTIFY_EMAIL_TO` en `.env.local` (ver `.env.example`) |
| **Hotmart** | Vender los dos libros | Reemplazar los links `REEMPLAZAR-...` en `src/lib/recursos.ts` por tus links reales de checkout |
| **Google Analytics 4 / Tag Manager** | Medir visitas y conversión | `NEXT_PUBLIC_GTM_ID` o `NEXT_PUBLIC_GA_ID` en `.env.local` |
| **Meta Pixel** | Medir y optimizar campañas de Instagram/Facebook | `NEXT_PUBLIC_META_PIXEL_ID` en `.env.local` |
| **Microsoft Clarity** | Mapas de calor y grabaciones de sesión | `NEXT_PUBLIC_CLARITY_ID` en `.env.local` |
| **Sanity (CMS)** | Poder editar textos/imágenes sin tocar código | No conectado todavía — el contenido hoy vive directamente en el código (`src/lib/`, `src/app/`), listo para migrarse cuando quieras dar este paso |
| **Skool** | Comunidad / alojamiento de contenido de la masterclass | Aún no existe — cuando la crees, se agregan los enlaces donde corresponda |

## Fotos pendientes

La foto profesional que compartiste está en formato **HEIC**, que los
navegadores no soportan. Mientras tanto, el sitio muestra recuadros con la
etiqueta "Foto pendiente" en los lugares donde va tu imagen (Home, Sobre Mí,
portadas de recursos). Envíame la misma foto en **JPG o PNG** (o conviértela
tú con cualquier app de tu teléfono) y la coloco en `/public`.

## Notas de contenido

- Los textos legales (`/legal/*`) son **borradores** — deben pasar por
  revisión de un abogado antes de publicar el sitio, tal como se señaló en el
  PRD.
- El Blog está listo pero vacío — se agregan artículos editando
  `src/lib/blog.ts` (o migrando a Sanity más adelante).
