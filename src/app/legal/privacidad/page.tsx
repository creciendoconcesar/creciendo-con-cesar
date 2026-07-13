import type { Metadata } from "next";
import { siteHostname } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  alternates: { canonical: "/legal/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="mb-4 font-display text-2xl font-bold text-text-primary">
        Política de Privacidad
      </h1>
      <p className="mb-8 text-xs text-text-muted">
        Última actualización: [ FECHA ]
      </p>

      <div className="mb-10 rounded-card border border-border-strong bg-surface p-5 text-sm text-text-secondary">
        <strong className="text-text-primary">Nota interna:</strong> este es
        un borrador redactado para ser revisado y ajustado por el
        departamento legal antes de su publicación. Los campos entre
        corchetes (ej. [ RAZÓN SOCIAL ]) deben completarse con la información
        legal real del negocio.
      </div>

      <div className="flex flex-col gap-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            1. Responsable del tratamiento de datos
          </h2>
          <p>
            Esta Política de Privacidad aplica al sitio web{" "}
            <span className="text-text-primary">{siteHostname}</span>{" "}
            (en adelante, &ldquo;el Sitio&rdquo;), operado por{" "}
            <span className="text-text-primary">
              [ RAZÓN SOCIAL / NOMBRE LEGAL ]
            </span>{" "}
            (en adelante, &ldquo;nosotros&rdquo; o &ldquo;César&rdquo;), con
            domicilio en{" "}
            <span className="text-text-primary">
              [ DIRECCIÓN LEGAL O PAÍS DE REGISTRO ]
            </span>
            . Para cualquier consulta relacionada con el tratamiento de datos
            personales, puedes escribir a{" "}
            <span className="text-text-primary">[ EMAIL DE CONTACTO ]</span>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            2. Qué datos recopilamos
          </h2>
          <p className="mb-3">
            Recopilamos los siguientes datos personales, dependiendo de cómo
            interactúes con el Sitio:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong className="text-text-primary">
                Formulario de aplicación para la llamada 1 a 1:
              </strong>{" "}
              nombre completo, número de teléfono, y las respuestas que
              proporciones sobre tu situación laboral, tus motivaciones, tus
              retos y tu disposición a invertir en tu crecimiento personal.
            </li>
            <li>
              <strong className="text-text-primary">
                Formulario de suscripción a la Masterclass:
              </strong>{" "}
              correo electrónico y, opcionalmente, número de teléfono.
            </li>
            <li>
              <strong className="text-text-primary">
                Datos de navegación:
              </strong>{" "}
              dirección IP, tipo de dispositivo y navegador, páginas
              visitadas, tiempo de permanencia y origen del tráfico, a través
              de herramientas de analítica (ver sección 4).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            3. Para qué usamos tus datos
          </h2>
          <ul className="flex flex-col gap-2">
            <li>Contactarte para coordinar una llamada 1 a 1, si aplicaste.</li>
            <li>
              Enviarte contenido relacionado con la Masterclass a la que te
              suscribiste.
            </li>
            <li>
              Entender cómo se usa el Sitio, para mejorarlo (analítica).
            </li>
            <li>
              Medir la efectividad de campañas publicitarias en redes
              sociales.
            </li>
            <li>
              Cumplir con obligaciones legales cuando corresponda.
            </li>
          </ul>
          <p className="mt-3">
            No vendemos ni alquilamos tus datos personales a terceros con
            fines comerciales ajenos a lo aquí descrito.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            4. Servicios de terceros que utilizamos
          </h2>
          <p className="mb-3">
            Para operar el Sitio, compartimos ciertos datos (principalmente
            de navegación) con los siguientes proveedores:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong className="text-text-primary">
                Google Analytics 4 y Google Tag Manager
              </strong>{" "}
              — analítica de tráfico y comportamiento.
            </li>
            <li>
              <strong className="text-text-primary">Meta Pixel</strong> —
              medición y optimización de campañas en Instagram y Facebook.
            </li>
            <li>
              <strong className="text-text-primary">
                Microsoft Clarity
              </strong>{" "}
              — mapas de calor y grabaciones anónimas de sesión, para
              entender la experiencia de uso.
            </li>
            <li>
              <strong className="text-text-primary">Resend</strong> — envío
              de las notificaciones por email que genera el formulario de
              aplicación y el de la Masterclass.
            </li>
            <li>
              <strong className="text-text-primary">Hotmart</strong> —
              procesamiento de la compra cuando adquieres alguno de nuestros
              recursos digitales. Hotmart procesa tus datos de pago de forma
              independiente, bajo su propia política de privacidad.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            5. Cuánto tiempo conservamos tus datos
          </h2>
          <p>
            Conservamos tus datos mientras exista una relación activa
            contigo (por ejemplo, mientras estés en proceso de coordinar una
            llamada, o mientras sigas suscrito a la Masterclass), y
            posteriormente durante el plazo necesario para cumplir
            obligaciones legales o resolver eventuales reclamos. Puedes
            solicitar la eliminación de tus datos en cualquier momento (ver
            sección 6).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            6. Tus derechos
          </h2>
          <p>
            Puedes solicitar en cualquier momento: acceder a los datos que
            tenemos sobre ti, corregirlos si están desactualizados,
            eliminarlos, u oponerte a que sigamos usándolos para contactarte.
            Para ejercer cualquiera de estos derechos, escribe a{" "}
            <span className="text-text-primary">[ EMAIL DE CONTACTO ]</span>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            7. Cookies
          </h2>
          <p>
            El Sitio utiliza cookies propias y de terceros (asociadas a las
            herramientas listadas en la sección 4) para recordar
            preferencias, medir tráfico y mostrar publicidad relevante en
            otras plataformas. Puedes deshabilitar las cookies desde la
            configuración de tu navegador, aunque esto puede afectar el
            funcionamiento del Sitio.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            8. Cambios a esta política
          </h2>
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente.
            Publicaremos cualquier cambio en esta misma página, indicando la
            fecha de la última actualización.
          </p>
        </section>
      </div>
    </article>
  );
}
