import type { Metadata } from "next";
import { siteHostname } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  alternates: { canonical: "/legal/terminos" },
};

export default function TerminosPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="mb-4 font-display text-2xl font-bold text-text-primary">
        Términos y Condiciones
      </h1>
      <p className="mb-8 text-xs text-text-muted">
        Última actualización: [ FECHA ]
      </p>

      <div className="mb-10 rounded-card border border-border-strong bg-surface p-5 text-sm text-text-secondary">
        <strong className="text-text-primary">Nota interna:</strong> borrador
        para revisión del departamento legal. Completar los campos entre
        corchetes con la información legal real antes de publicar.
      </div>

      <div className="flex flex-col gap-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            1. Aceptación de los términos
          </h2>
          <p>
            Al acceder y utilizar el sitio web{" "}
            <span className="text-text-primary">{siteHostname}</span>{" "}
            (en adelante, &ldquo;el Sitio&rdquo;), operado por{" "}
            <span className="text-text-primary">
              [ RAZÓN SOCIAL / NOMBRE LEGAL ]
            </span>
            , aceptas los presentes Términos y Condiciones. Si no estás de
            acuerdo, te pedimos no utilizar el Sitio.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            2. Descripción del servicio
          </h2>
          <p>
            El Sitio ofrece contenido educativo sobre economía moderna,
            desarrollo de habilidades digitales y crecimiento personal, así
            como los siguientes servicios:
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              Contenido educativo gratuito (Masterclass, blog, redes
              sociales).
            </li>
            <li>
              Venta de recursos digitales (libros electrónicos) a través de
              la plataforma de terceros Hotmart.
            </li>
            <li>
              Reuniones individuales (&ldquo;llamadas 1 a 1&rdquo;) de
              orientación personalizada, sujetas a un proceso previo de
              aplicación y calificación.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            3. Naturaleza del contenido y ausencia de garantías
          </h2>
          <p>
            Todo el contenido del Sitio tiene fines educativos y de
            orientación general. No constituye asesoría financiera, legal,
            fiscal ni de inversión personalizada. Los resultados mencionados
            en el Sitio, si los hay, dependen del esfuerzo, las habilidades,
            el tiempo invertido y las circunstancias particulares de cada
            persona.{" "}
            <strong className="text-text-primary">
              No garantizamos ningún ingreso ni resultado específico.
            </strong>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            4. Proceso de aplicación para la llamada 1 a 1
          </h2>
          <p>
            Solicitar una llamada 1 a 1 no garantiza que la reunión se lleve
            a cabo. Evaluamos cada aplicación de forma manual y nos
            reservamos el derecho de no coordinar la llamada si
            consideramos que no es el momento adecuado para el solicitante,
            en cuyo caso podremos ofrecer un recurso educativo alternativo.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            5. Compras de productos digitales
          </h2>
          <p>
            Los recursos digitales (libros electrónicos) se comercializan a
            través de Hotmart. El proceso de pago, facturación, reembolsos y
            entrega del producto se rige por los términos y condiciones de
            Hotmart, ajenos a este Sitio. Cualquier reclamo relacionado con
            el pago debe dirigirse directamente a Hotmart.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            6. Propiedad intelectual
          </h2>
          <p>
            Todo el contenido del Sitio (textos, metodología, marca
            &ldquo;Creciendo con César&rdquo;, &ldquo;Viral Prosper&rdquo;,
            libros y demás materiales) es propiedad de{" "}
            <span className="text-text-primary">
              [ RAZÓN SOCIAL / NOMBRE LEGAL ]
            </span>{" "}
            o se usa bajo licencia. Queda prohibida su reproducción,
            distribución o uso comercial sin autorización previa por
            escrito.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            7. Limitación de responsabilidad
          </h2>
          <p>
            En la máxima medida permitida por la ley, no seremos
            responsables por daños indirectos, incidentales o consecuentes
            derivados del uso del Sitio, de la aplicación del contenido
            educativo compartido, o de decisiones tomadas con base en él.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            8. Enlaces a terceros
          </h2>
          <p>
            El Sitio puede contener enlaces a plataformas de terceros (redes
            sociales, Hotmart, herramientas de agenda). No somos
            responsables por el contenido o las prácticas de privacidad de
            esos sitios externos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            9. Ley aplicable y jurisdicción
          </h2>
          <p>
            Estos Términos se rigen por las leyes de{" "}
            <span className="text-text-primary">
              [ PAÍS / ESTADO Y JURISDICCIÓN APLICABLE ]
            </span>
            . Cualquier disputa se someterá a los tribunales competentes de
            dicha jurisdicción.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            10. Modificaciones
          </h2>
          <p>
            Podemos actualizar estos Términos en cualquier momento.
            Publicaremos la fecha de la última actualización al inicio de
            esta página.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            11. Contacto
          </h2>
          <p>
            Para preguntas sobre estos Términos, escribe a{" "}
            <span className="text-text-primary">[ EMAIL DE CONTACTO ]</span>.
          </p>
        </section>
      </div>
    </article>
  );
}
