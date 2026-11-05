export type ZoneGroup = {
  title: string;
  text: string;
  places: string[];
};

export type ZonePage = {
  slug: string;
  path: string;
  label: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  groupsTitle: string;
  groups: ZoneGroup[];
  faq: { question: string; answer: string }[];
  whatsappText: string;
};

export const zonePages: ZonePage[] = [
  {
    slug: "buenos-aires",
    path: "/diseno-web-buenos-aires",
    label: "Buenos Aires y La Plata",
    seoTitle: "Diseño Web en Buenos Aires, Zona Oeste, Zona Sur y La Plata",
    seoDescription:
      "Diseño y desarrollo web para profesionales y empresas de Zona Oeste, Zona Sur, La Plata y CABA: Ituzaingó, Lomas de Zamora, Lanús y más. Reunión inicial gratuita.",
    eyebrow: "Novaire Studio · Diseño web en Buenos Aires",
    title: "Diseño web para tu negocio en",
    accent: "Buenos Aires y La Plata.",
    intro:
      "Trabajamos con profesionales, comercios y empresas de Zona Oeste, Zona Sur, La Plata y CABA. Páginas web a medida, tiendas online y reservas de turnos, con reuniones online y, según la zona, presenciales a coordinar.",
    groupsTitle: "Zonas en las que trabajamos",
    groups: [
      {
        title: "Zona Oeste",
        text: "Webs para comercios, estudios y profesionales del oeste del Gran Buenos Aires.",
        places: [
          "Ituzaingó",
          "Morón",
          "Castelar",
          "Haedo",
          "Ramos Mejía",
          "San Justo",
          "Merlo",
          "Moreno",
          "Hurlingham",
        ],
      },
      {
        title: "Zona Sur",
        text: "Webs para negocios, clínicas, estudios y emprendimientos del sur del Gran Buenos Aires.",
        places: [
          "Lomas de Zamora",
          "Lanús",
          "Banfield",
          "Temperley",
          "Avellaneda",
          "Quilmes",
          "Berazategui",
        ],
      },
      {
        title: "La Plata y alrededores",
        text: "Webs para estudios, comercios, academias y profesionales de la capital bonaerense.",
        places: ["La Plata", "City Bell", "Gonnet", "Berisso", "Ensenada"],
      },
      {
        title: "CABA y Zona Norte",
        text: "Webs para marcas, estudios y empresas de la Ciudad y el norte del Gran Buenos Aires.",
        places: [
          "Ciudad de Buenos Aires",
          "San Isidro",
          "Vicente López",
          "Tigre",
          "San Fernando",
        ],
      },
    ],
    faq: [
      {
        question: "¿Hacen páginas web en Ituzaingó, Lomas de Zamora, Lanús y La Plata?",
        answer:
          "Sí. Trabajamos con negocios y profesionales de Zona Oeste, Zona Sur, La Plata y CABA. Las reuniones se hacen por videollamada y, según la zona, se pueden coordinar de forma presencial.",
      },
      {
        question: "¿Tengo que estar en Buenos Aires para trabajar con ustedes?",
        answer:
          "No. Todo el proceso puede hacerse online, desde la primera reunión hasta la publicación del sitio, y trabajamos con clientes de todo el país.",
      },
      {
        question: "¿Cuánto cuesta una página web?",
        answer:
          "Depende del alcance: no es lo mismo una página de presentación que una tienda online o un sistema de turnos. Después de la reunión inicial gratuita preparamos una propuesta con alcance, etapas, tiempos y presupuesto.",
      },
    ],
    whatsappText: "Hola! Quiero una página web para mi negocio en Buenos Aires.",
  },
  {
    slug: "exterior",
    path: "/diseno-web-exterior",
    label: "Clientes del exterior",
    seoTitle: "Diseño Web para Clientes del Exterior, 100 % Online",
    seoDescription:
      "Diseño y desarrollo web en español para profesionales y empresas de Uruguay, Chile, España, México, Colombia y Estados Unidos. Todo el proceso es online.",
    eyebrow: "Novaire Studio · Diseño web para el exterior",
    title: "Tu web en español, desde Argentina y",
    accent: "100 % online.",
    intro:
      "Trabajamos a distancia con profesionales y empresas de otros países. Reuniones por videollamada, avances compartidos en línea y un sitio listo para recibir consultas, sin importar dónde estés.",
    groupsTitle: "Países con los que trabajamos",
    groups: [
      {
        title: "Países vecinos",
        text: "Cercanía horaria y mismo idioma para reuniones ágiles.",
        places: ["Uruguay", "Chile", "Paraguay"],
      },
      {
        title: "Resto de Latinoamérica",
        text: "Webs en español para mercados de habla hispana.",
        places: ["México", "Colombia"],
      },
      {
        title: "España",
        text: "Sitios en español para negocios y profesionales con clientes en España.",
        places: ["España"],
      },
      {
        title: "Estados Unidos",
        text: "Webs en español para negocios que atienden a la comunidad hispanohablante.",
        places: ["Estados Unidos"],
      },
    ],
    faq: [
      {
        question: "¿Pueden hacer mi página web si vivo fuera de Argentina?",
        answer:
          "Sí. Todo el proceso se hace online: reunión inicial por videollamada, diseño, revisiones y publicación. Los sitios se desarrollan en español.",
      },
      {
        question: "¿Cómo coordinamos las reuniones con otro huso horario?",
        answer:
          "Acordamos un horario que les resulte cómodo a ambos. La primera reunión es gratuita, dura 30 minutos y no tiene compromiso.",
      },
      {
        question: "¿Cómo se define el presupuesto?",
        answer:
          "Después de la reunión inicial preparamos una propuesta personalizada con alcance, etapas, tiempos y presupuesto.",
      },
    ],
    whatsappText: "Hola! Quiero una página web para mi negocio desde el exterior.",
  },
];

export function getZonePage(slug: string) {
  const page = zonePages.find((item) => item.slug === slug);
  if (!page) throw new Error(`Zone page not found: ${slug}`);
  return page;
}

/** Todas las localidades y países, para los datos estructurados. */
export const allPlaces = zonePages.flatMap((page) =>
  page.groups.flatMap((group) => group.places),
);
