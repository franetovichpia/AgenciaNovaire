export const siteConfig = {
  name: "Novaire",
  description:
    "Diseñamos páginas web, sistemas de gestión y aplicaciones digitales para empresas y emprendimientos.",
  email: "agencianovaire@gmail.com",
  whatsapp: "https://wa.me/541121542210",
  instagram: "https://www.instagram.com/studionovaire?igsh=d3g2bWQzZXV0aGJi&utm_source=qr",
  linkedin: "#",
};

export const navigation = [
  {
    name: "Soluciones",
    href: "/#solutions",
  },
  {
    name: "Servicios",
    href: "/#services",
  },
  {
    name: "Proyectos",
    href: "/#projects",
  },
  {
    name: "Nosotros",
    href: "/#about",
  },
  {
    name: "Preguntas",
    href: "/#faq",
  },
  {
    name: "Agendar",
    href: "/agendar",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  label: string;
  summary: string;
  description: string;
  highlights: string[];
  images: string[];
  tint: string;
  whatsappName: string;
};

export const projects: Project[] = [
  {
    slug: "arqstudio",
    title: "ArqStudio",
    category: "Landing page · Arquitectura",
    label: "Sitio web",
    summary:
      "Landing page pensada para captar clientes y mostrar proyectos y servicios de un estudio de arquitectura.",
    description:
      "Landing page con enfoque en arquitectura, pensada para captar clientes y mostrar los proyectos y servicios del estudio con una estética editorial, sobria y profesional.",
    highlights: [
      "Enfoque en captación de clientes",
      "Vitrina de proyectos y servicios",
      "Identidad visual editorial",
    ],
    images: [
      "/projects/arqstudio/home.png",
      "/projects/arqstudio/servicios.png",
      "/projects/arqstudio/contacto.png",
    ],
    tint: "from-[#2d2622] via-[#171514] to-[#0d0c0b]",
    whatsappName: "ArqStudio",
  },
  {
    slug: "bim-3d-5d",
    title: "Arquitectura BIM 3D y 5D",
    category: "Sitio web · Panel administrativo",
    label: "Portfolio interactivo",
    summary:
      "Sitio web profesional con panel administrativo para un cliente arquitecto, con visor 3D de proyectos y propiedades.",
    description:
      "Caso de un cliente arquitecto: sitio web profesional con panel administrativo donde se muestran sus proyectos y propiedades con un visor y recorrido en 3D, además de funciones especiales a medida. Un portfolio interactivo pensado para destacar el trabajo técnico del estudio.",
    highlights: [
      "Panel administrativo a medida",
      "Visor y recorrido 3D de proyectos",
      "Portfolio interactivo",
    ],
    images: [
      "/projects/bim-3d-5d/escritorio.jpg",
      "/projects/bim-3d-5d/monitor.jpg",
    ],
    tint: "from-[#3a2230] via-[#241620] to-[#120a0f]",
    whatsappName: "Arquitectura BIM 3D y 5D",
  },
  {
    slug: "landing-arquitecta",
    title: "Landing · Arquitecta",
    category: "Landing page · Arquitectura",
    label: "Landing page",
    summary:
      "Landing page básica enfocada en una arquitecta: servicios, trayectoria y propiedades destacadas.",
    description:
      "Landing page básica enfocada en los servicios de una arquitecta, pensada para captar clientes y mostrar su trayectoria y sus propiedades destacadas de forma simple y directa.",
    highlights: [
      "Enfoque en captación de clientes",
      "Trayectoria profesional",
      "Propiedades destacadas",
    ],
    images: [
      "/projects/landing-arquitecta/hero.jpg",
      "/projects/landing-arquitecta/home.jpg",
      "/projects/landing-arquitecta/contacto.jpg",
    ],
    tint: "from-[#1f2a2c] via-[#131c1d] to-[#0a1011]",
    whatsappName: "esta landing de arquitectura",
  },
  {
    slug: "portal-comunicativo",
    title: "Portal comunicativo",
    category: "Landing page · Contenido",
    label: "Panel de contenido",
    summary:
      "Landing page para un proyecto comunicativo con entrevistas y panel administrativo para autogestionar el contenido.",
    description:
      "Landing page para un proyecto comunicativo, donde se muestran entrevistas. Incluye un panel administrativo personalizado para que el propio cliente pueda autogestionar el contenido de la página sin depender de un desarrollador.",
    highlights: [
      "Sección de entrevistas",
      "Panel administrativo a medida",
      "Autogestión de contenido",
    ],
    images: [
      "/projects/portal-comunicativo/sofa.jpg",
      "/projects/portal-comunicativo/laptop.jpg",
    ],
    tint: "from-[#233327] via-[#15201a] to-[#0b120e]",
    whatsappName: "este proyecto comunicativo",
  },
  {
    slug: "norte-logistica",
    title: "Norte Logística",
    category: "Landing page · Logística",
    label: "Landing page",
    summary:
      "Landing page para una empresa de transporte y logística, enfocada en cotizaciones de envío.",
    description:
      "Landing page para una empresa de logística, con un mensaje claro, identidad visual fuerte y llamadas a la acción pensadas para que los clientes coticen su envío.",
    highlights: [
      "Enfoque en cotización de envíos",
      "Identidad visual propia",
      "Llamadas a la acción claras",
    ],
    images: ["/projects/norte-logistica/home.jpg"],
    tint: "from-[#3a2418] via-[#21150e] to-[#100a06]",
    whatsappName: "Norte Logística",
  },
  {
    slug: "turnia",
    title: "Turnia · Agenda digital",
    category: "Aplicación web · Reservas",
    label: "Agenda online",
    summary:
      "Agenda digital para reservar reuniones online: el cliente elige fecha y horario y la reserva queda registrada al instante.",
    description:
      "Agenda digital para organizar turnos y reuniones online sin mensajes de ida y vuelta. El cliente elige fecha y horario, completa sus datos y la reserva queda registrada al instante, con disponibilidad siempre actualizada.",
    highlights: [
      "Reservas online en un solo lugar",
      "Datos de contacto organizados",
      "Disponibilidad actualizada",
    ],
    images: [
      "/projects/turnia/portada.jpg",
      "/projects/turnia/calendario.jpg",
      "/projects/turnia/agenda.jpg",
      "/projects/turnia/reserva.jpg",
      "/projects/turnia/laptop.jpg",
    ],
    tint: "from-[#3a2218] via-[#22140e] to-[#100a06]",
    whatsappName: "Turnia, la agenda digital",
  },
  {
    slug: "nucleo-pilates",
    title: "Estudio Núcleo Pilates",
    category: "Landing page · Salud y bienestar",
    label: "Landing page",
    summary:
      "Landing page para un estudio de pilates, pensada para presentar clases y convertir visitas en reservas.",
    description:
      "Landing page para un estudio de pilates, diseñada para presentar sus clases, generar confianza y convertir visitas en reservas reales.",
    highlights: [
      "Presentación de clases",
      "Enfoque en conversión a reserva",
      "Diseño cálido y profesional",
    ],
    images: ["/projects/nucleo-pilates/home.png"],
    tint: "from-[#332318] via-[#20160e] to-[#0f0a06]",
    whatsappName: "Estudio Núcleo Pilates",
  },
  {
    slug: "la-piccola",
    title: "La Piccola",
    category: "Aplicación móvil · Gastronomía",
    label: "App móvil",
    summary:
      "App móvil de gestión de un restaurante, con acceso por perfiles y escaneo de QR.",
    description:
      "Aplicación móvil para gestionar la experiencia de un restaurante, con acceso mediante distintos perfiles de usuario, escaneo de QR y otras funcionalidades a medida del negocio.",
    highlights: [
      "Acceso con distintos perfiles",
      "Escaneo de QR",
      "Identidad visual propia",
    ],
    images: [
      "/projects/la-piccola/inicio-registro1.png",
      "/projects/la-piccola/branding.png",
    ],
    tint: "from-[#33241a] via-[#1f150f] to-[#100b07]",
    whatsappName: "La Piccola",
  },
  {
    slug: "pipi-balloons",
    title: "Pipi Balloons",
    category: "Marca y sitio web · Eventos",
    label: "Marca y sitio",
    summary:
      "Identidad de marca y sitio web con catálogo para una empresa de decoración con globos.",
    description:
      "Identidad de marca y sitio web con catálogo para una empresa de decoración con globos, con un lenguaje visual lúdico y una vitrina de productos clara.",
    highlights: [
      "Identidad de marca",
      "Catálogo de productos",
      "Lenguaje visual lúdico",
    ],
    images: ["/projects/pipi-balloons/home.png"],
    tint: "from-[#2a2033] via-[#181120] to-[#0c0810]",
    whatsappName: "Pipi Balloons",
  },
];
