import type { Metadata } from "next";
import { siteHostname } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso Legal",
  alternates: { canonical: "/legal/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <h1 className="mb-4 font-display text-2xl font-bold text-text-primary">
        Aviso Legal
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
            1. Identificación del titular del Sitio
          </h2>
          <p>
            En cumplimiento de la normativa aplicable de transparencia en
            servicios de la sociedad de la información, se informa que el
            sitio web{" "}
            <span className="text-text-primary">{siteHostname}</span>{" "}
            es operado por:
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            <li>
              Titular:{" "}
              <span className="text-text-primary">
                [ RAZÓN SOCIAL / NOMBRE LEGAL COMPLETO ]
              </span>
            </li>
            <li>
              Identificación fiscal:{" "}
              <span className="text-text-primary">
                [ NÚMERO DE IDENTIFICACIÓN FISCAL / EIN / RFC, SEGÚN
                CORRESPONDA ]
              </span>
            </li>
            <li>
              Domicilio:{" "}
              <span className="text-text-primary">
                [ DIRECCIÓN LEGAL COMPLETA ]
              </span>
            </li>
            <li>
              Contacto:{" "}
              <span className="text-text-primary">[ EMAIL DE CONTACTO ]</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            2. Objeto del Sitio
          </h2>
          <p>
            El Sitio tiene como finalidad divulgar contenido educativo sobre
            economía moderna, desarrollo de habilidades digitales y
            crecimiento personal, presentar los recursos y servicios de
            César, y permitir la solicitud de reuniones individuales de
            orientación, sujetas a un proceso de aplicación y evaluación
            previa.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            3. Relación con modelos de negocio de terceros
          </h2>
          <p>
            César colabora con una empresa de comercialización en red
            (&ldquo;nueva economía&rdquo; / negocio digital moderno),
            legalmente registrada y avalada en los países donde opera. Este
            Sitio no constituye, por sí mismo, un contrato de vinculación a
            dicha empresa: cualquier posible vinculación se formaliza,
            fuera de este Sitio, directamente con la empresa correspondiente
            y bajo sus propios términos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            4. Disclaimer de resultados
          </h2>
          <p>
            Los resultados mencionados en este Sitio dependen del esfuerzo,
            las habilidades, el tiempo invertido y las circunstancias
            particulares de cada persona.{" "}
            <strong className="text-text-primary">
              No se garantiza ningún ingreso ni resultado específico.
            </strong>{" "}
            La información aquí compartida tiene fines educativos y de
            orientación, y no debe interpretarse como una promesa de
            resultados económicos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            5. Propiedad intelectual
          </h2>
          <p>
            Los signos distintivos &ldquo;Creciendo con César&rdquo; y
            &ldquo;Viral Prosper&rdquo;, así como los textos, metodología,
            libros y demás contenidos del Sitio, están protegidos por
            derechos de propiedad intelectual y son titularidad de{" "}
            <span className="text-text-primary">
              [ RAZÓN SOCIAL / NOMBRE LEGAL ]
            </span>{" "}
            o se utilizan bajo licencia.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            6. Exclusión de responsabilidad
          </h2>
          <p>
            No garantizamos la disponibilidad continua e ininterrumpida del
            Sitio, ni nos hacemos responsables por daños derivados de fallas
            técnicas, interrupciones del servicio, o del contenido de
            plataformas de terceros enlazadas desde el Sitio (incluyendo,
            sin limitarse a, Hotmart y redes sociales).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-text-primary">
            7. Legislación aplicable
          </h2>
          <p>
            El presente Aviso Legal se rige por las leyes de{" "}
            <span className="text-text-primary">
              [ PAÍS / ESTADO Y JURISDICCIÓN APLICABLE ]
            </span>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
