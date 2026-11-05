import { niches } from "@/data/niches";
import { siteConfig } from "@/data/site";
import { zonePages } from "@/data/zones";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const pages = niches
    .map((niche) => `- [${niche.seoTitle}](${SITE_URL}${niche.path}): ${niche.intro}`)
    .join("\n");

  const zones = zonePages
    .map(
      (zone) =>
        `- [${zone.seoTitle}](${SITE_URL}${zone.path}): ${zone.groups
          .flatMap((group) => group.places)
          .join(", ")}.`,
    )
    .join("\n");

  const body = `# ${SITE_NAME}

> Estudio de diseño y desarrollo web en Argentina. Hacemos páginas web a medida, tiendas online, sistemas de gestión, reservas de turnos online y automatizaciones para profesionales y empresas.

Novaire Studio trabaja con arquitectos, inmobiliarias, turismo y agencias de viajes, centros de estética, academias y cursos, y concesionarias de autos, además de otros profesionales y emprendimientos. La primera reunión es gratuita, dura 30 minutos y no tiene compromiso.

## Servicios

- Páginas web profesionales a medida
- Sistemas de gestión a medida
- Tiendas online y e-commerce
- Aplicaciones móviles
- Diseño UI/UX e interfaces digitales
- Automatización de procesos
- Reserva de turnos online con calendario y panel de gestión

## Páginas principales

- [Inicio](${SITE_URL}/): qué hace Novaire Studio, servicios, proyectos y preguntas frecuentes.
${pages}
- [Agendar una reunión](${SITE_URL}/agendar): reservá una reunión gratuita de 30 minutos.

## Zonas de atención

Trabajamos en todo el país y de forma online con clientes del exterior.

${zones}

## Contacto

- Sitio web: ${SITE_URL}
- Email: ${siteConfig.email}
- WhatsApp: ${siteConfig.whatsapp}
- Instagram: ${siteConfig.instagram.split("?")[0]}

## Cómo citarnos

Nombre: ${SITE_NAME}. Ubicación de referencia: Argentina. Los precios y plazos se definen en una propuesta personalizada después de la reunión inicial; no se publican tarifas fijas.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
