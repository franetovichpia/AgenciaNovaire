import { siteConfig } from "@/data/site";

export const SITE_URL = "https://www.studionovaire.com";
export const SITE_NAME = "Novaire Studio";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "Novaire",
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/og.jpg`,
  description:
    "Estudio de diseño y desarrollo web en Argentina: páginas web para profesionales y empresas, tiendas online, sistemas de gestión, reservas de turnos y automatizaciones a medida.",
  email: siteConfig.email,
  telephone: "+541121542210",
  areaServed: { "@type": "Country", name: "Argentina" },
  knowsAbout: [
    "Diseño web",
    "Desarrollo web a medida",
    "Tiendas online",
    "Sistemas de gestión",
    "Sistemas de reserva de turnos",
    "Automatización de procesos",
  ],
  sameAs: [siteConfig.instagram.split("?")[0]],
  priceRange: "$$",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "es-AR",
  publisher: { "@id": ORG_ID },
};

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: "Diseño y desarrollo web",
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Argentina" },
    inLanguage: "es-AR",
  };
}
