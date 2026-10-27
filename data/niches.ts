export type Niche = {
  slug: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  imagePosition: string;
  includesTitle: string;
  includes: { title: string; text: string }[];
  exampleSlugs: string[];
  steps: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  whatsappText: string;
};

const steps = [
  {
    title: "Conversamos",
    text: "Una reunión de 30 minutos, sin costo, para conocer tu negocio y lo que necesitás.",
  },
  {
    title: "Diseñamos",
    text: "Armamos una propuesta visual con tu identidad, antes de escribir una línea de código.",
  },
  {
    title: "Desarrollamos y publicamos",
    text: "Construimos el sitio, lo revisamos juntos y lo dejamos online, listo para recibir consultas.",
  },
];

export const niches: Niche[] = [
  {
    slug: "arquitectos",
    path: "/web-para-arquitectos",
    seoTitle: "Diseño de Páginas Web para Arquitectos y Estudios de Arquitectura",
    seoDescription:
      "Sitios web para arquitectos y estudios de arquitectura: portfolio de obras, galería de proyectos, formulario de consultas y diseño adaptado a celulares.",
    eyebrow: "Novaire Studio · Diseño web para arquitectos",
    title: "Tu trabajo arquitectónico merece una web",
    accent: "a su altura.",
    intro:
      "Sitios web para arquitectos y estudios de arquitectura que quieren presentar sus proyectos, transmitir confianza y conseguir nuevas consultas.",
    image: "/brand/ambiente.jpg",
    imagePosition: "70% 65%",
    includesTitle: "Qué incluye tu web de arquitectura",
    includes: [
      {
        title: "Portfolio de obras",
        text: "Tus proyectos presentados con fotografías grandes y una navegación simple.",
      },
      {
        title: "Galería de imágenes y renders",
        text: "Imágenes, renders y recorridos, incluso visores 3D cuando el proyecto lo necesita.",
      },
      {
        title: "Presentación del estudio",
        text: "Quiénes son, cómo trabajan y qué servicios ofrecen, con una identidad visual propia.",
      },
      {
        title: "Consultas y WhatsApp",
        text: "Formulario de contacto y botón de WhatsApp para que los clientes te escriban al instante.",
      },
      {
        title: "Adaptada a celulares",
        text: "Se ve y funciona bien en cualquier pantalla, porque muchas consultas llegan desde el celular.",
      },
      {
        title: "Panel para administrarla",
        text: "Opcionalmente, un panel para que cargues y edites tus proyectos sin depender de nadie.",
      },
    ],
    exampleSlugs: ["bim-3d-5d", "landing-arquitecta", "arqstudio"],
    steps,
    faq: [
      {
        question: "¿Puedo mostrar mis proyectos en 3D?",
        answer:
          "Sí. Hemos desarrollado visores y recorridos 3D para el portfolio de un arquitecto, además de galerías de imágenes y renders.",
      },
      {
        question: "¿Voy a poder cargar mis propios proyectos?",
        answer:
          "Si lo necesitás, incluimos un panel administrativo para que agregues y edites obras por tu cuenta.",
      },
      {
        question: "¿Cuánto tarda una web para un estudio de arquitectura?",
        answer:
          "Una web de presentación puede estar lista en pocas semanas. Si incluye panel o visor 3D, el plazo se define en la propuesta.",
      },
    ],
    whatsappText: "Hola! Quiero una web para mi estudio de arquitectura.",
  },
  {
    slug: "inmobiliarias",
    path: "/web-para-inmobiliarias",
    seoTitle: "Diseño de Páginas Web para Inmobiliarias y Desarrollistas",
    seoDescription:
      "Sitios web para inmobiliarias y desarrollos: catálogo de propiedades, fichas con fotos, formulario de consultas y contacto directo por WhatsApp.",
    eyebrow: "Novaire Studio · Diseño web para inmobiliarias",
    title: "Tus propiedades merecen mostrarse",
    accent: "como lo que son.",
    intro:
      "Sitios web para inmobiliarias y desarrollos que presentan cada propiedad con claridad, generan confianza y convierten visitas en consultas.",
    image: "/brand/hojas.jpg",
    imagePosition: "50% 40%",
    includesTitle: "Qué incluye tu web inmobiliaria",
    includes: [
      {
        title: "Catálogo de propiedades",
        text: "Un listado ordenado, con filtros simples por tipo, zona y operación.",
      },
      {
        title: "Fichas con fotos",
        text: "Cada propiedad con su galería, descripción, ubicación y datos clave.",
      },
      {
        title: "Consultas por propiedad",
        text: "Formulario y WhatsApp con el aviso ya cargado, para que no se pierda ninguna consulta.",
      },
      {
        title: "Panel para administrar",
        text: "Cargá, editá y pausá propiedades vos mismo, sin pedir cambios a un desarrollador.",
      },
      {
        title: "Presentación de la inmobiliaria",
        text: "Tu equipo, tu trayectoria y tus servicios, con una imagen profesional.",
      },
      {
        title: "Adaptada a celulares",
        text: "La mayoría busca propiedades desde el celular: el sitio está pensado primero para esa pantalla.",
      },
    ],
    exampleSlugs: [],
    steps,
    faq: [
      {
        question: "¿Puedo cargar y quitar propiedades yo mismo?",
        answer:
          "Sí. Incluimos un panel simple para publicar, editar y pausar propiedades sin conocimientos técnicos.",
      },
      {
        question: "¿Sirve también para desarrollos y emprendimientos?",
        answer:
          "Sí. Podemos armar una web para un desarrollo puntual, con sus unidades, planos y formulario de contacto.",
      },
      {
        question: "¿Se puede conectar con WhatsApp?",
        answer:
          "Sí. Cada propiedad puede tener un botón que abre WhatsApp con la propiedad ya indicada.",
      },
    ],
    whatsappText: "Hola! Quiero una web para mi inmobiliaria.",
  },
  {
    slug: "turismo",
    path: "/web-para-turismo",
    seoTitle: "Diseño de Páginas Web para Turismo y Agencias de Viajes",
    seoDescription:
      "Sitios web para agencias de viajes, alojamientos y emprendimientos turísticos: paquetes, galerías, reservas y consultas por WhatsApp.",
    eyebrow: "Novaire Studio · Diseño web para turismo",
    title: "Que tu destino se vea tan bien",
    accent: "como se vive.",
    intro:
      "Sitios web para agencias de viajes, alojamientos y emprendimientos turísticos que inspiran a los visitantes y los convierten en reservas.",
    image: "/brand/hojas.jpg",
    imagePosition: "50% 30%",
    includesTitle: "Qué incluye tu web de turismo",
    includes: [
      {
        title: "Paquetes y experiencias",
        text: "Cada destino o servicio presentado con fotos, detalles y precios claros.",
      },
      {
        title: "Galería visual",
        text: "Imágenes grandes que transmiten lo que se vive, que es lo que más vende en turismo.",
      },
      {
        title: "Reservas y turnos online",
        text: "Sistema de reservas con calendario y disponibilidad, para evitar mensajes de ida y vuelta.",
      },
      {
        title: "Consultas por WhatsApp",
        text: "Contacto directo para resolver dudas y cerrar la reserva en el momento.",
      },
      {
        title: "Panel de administración",
        text: "Editá paquetes, fechas y precios por tu cuenta, cuando lo necesites.",
      },
      {
        title: "Adaptada a celulares",
        text: "Pensada para quien planifica un viaje desde el celular, en cualquier momento del día.",
      },
    ],
    exampleSlugs: [],
    steps,
    faq: [
      {
        question: "¿Se pueden tomar reservas desde la web?",
        answer:
          "Sí. Podemos sumar un sistema de reservas con calendario y disponibilidad, como el que usamos en nuestra propia agenda online.",
      },
      {
        question: "¿Sirve para alojamientos y no solo para agencias?",
        answer:
          "Sí. Armamos sitios para agencias, alojamientos, excursiones y otros emprendimientos turísticos.",
      },
      {
        question: "¿Puedo actualizar precios y paquetes yo?",
        answer:
          "Sí, con un panel simple de administración, sin depender de un desarrollador.",
      },
    ],
    whatsappText: "Hola! Quiero una web para mi emprendimiento de turismo.",
  },
];

export function getNiche(slug: string) {
  const niche = niches.find((item) => item.slug === slug);
  if (!niche) throw new Error(`Niche not found: ${slug}`);
  return niche;
}
