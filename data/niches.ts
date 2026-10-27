export type Showcase = {
  eyebrow: string;
  title: string;
  text: string;
  ratio?: string;
  layout: "duo" | "phones" | "single" | "wide" | "steps" | "gallery";
  images: { src: string; alt: string; caption?: string }[];
};

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
  showcases?: Showcase[];
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
    exampleSlugs: [],
    showcases: [
      {
        eyebrow: "Visor 3D",
        title: "Tus proyectos, para recorrer en pantalla.",
        text: "Para un arquitecto desarrollamos un portfolio con visor y recorrido 3D del modelo, filtros por elementos y un panel para administrar sus proyectos. El cliente explora la obra desde la computadora o la tablet.",
        layout: "duo",
        images: [
          {
            src: "/projects/bim-3d-5d/monitor.jpg",
            alt: "Portfolio de arquitectura con visor 3D en monitor y tablet",
          },
          {
            src: "/projects/bim-3d-5d/escritorio.jpg",
            alt: "Sitio web de un arquitecto con visor 3D en laptop y monitor",
          },
        ],
      },
      {
        eyebrow: "Sitio de obras",
        title: "Cada obra, contada con fotografías grandes.",
        text: "Para un taller de arquitectura y paisaje diseñamos un sitio donde cada obra tiene su propia presentación, con imágenes a pantalla completa y un camino directo para consultar.",
        layout: "phones",
        images: [
          {
            src: "/projects/landing-arquitecta/inicio-taller.jpg",
            alt: "Inicio de la web de un taller de arquitectura",
            caption: "Inicio",
          },
          {
            src: "/projects/landing-arquitecta/obra-ocampo.jpg",
            alt: "Presentación de la obra Edificio Ocampo",
            caption: "Obras construidas",
          },
          {
            src: "/projects/landing-arquitecta/obra-laguna.jpg",
            alt: "Presentación de la obra Casa Laguna",
            caption: "Cada obra, una historia",
          },
          {
            src: "/projects/landing-arquitecta/imaginando.jpg",
            alt: "Sección para iniciar una consulta: casa propia o proyecto de inversión",
            caption: "Un primer paso para consultar",
          },
        ],
      },
    ],
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
    showcases: [
      {
        eyebrow: "Demo inmobiliaria",
        title: "Un buscador claro, fichas con fotos y panel de gestión.",
        text: "Así puede verse tu inmobiliaria: búsqueda por operación, tipo y ciudad, propiedades destacadas con sus fotos y un formulario de consulta en cada ficha, con un panel para administrar todo.",
        layout: "single",
        images: [
          {
            src: "/projects/inmobiliaria-demo/laptop-tablet.jpg",
            alt: "Demo de web inmobiliaria con buscador y propiedades destacadas en laptop y ficha de propiedad en tablet",
          },
        ],
      },
    ],
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
    showcases: [
      {
        eyebrow: "Demo · Agencia de viajes",
        title: "Destinos que inspiran y un camino directo para consultar.",
        text: "Así puede verse tu agencia: un inicio con imágenes que invitan a viajar, destinos y propuestas con su detalle, y la conversación por WhatsApp siempre a mano.",
        layout: "gallery",
        images: [
          {
            src: "/projects/turismo-demo/inicio.jpg",
            alt: "Inicio de la web de una agencia de viajes con una playa caribeña y un avión",
            caption: "Un inicio que invita a viajar",
          },
          {
            src: "/projects/turismo-demo/destinos.jpg",
            alt: "Buscador de destinos y tarjetas de Caribe, Brasil y Europa",
            caption: "Buscador y destinos",
          },
          {
            src: "/projects/turismo-demo/propuesta.jpg",
            alt: "Detalle de una propuesta de viaje al Caribe con botón para consultar",
            caption: "Cada propuesta, en detalle",
          },
          {
            src: "/projects/turismo-demo/contacto.jpg",
            alt: "Sección de contacto por WhatsApp de una agencia de viajes",
            caption: "Contacto por WhatsApp",
          },
        ],
      },
      {
        eyebrow: "Demo · Viajes de surf",
        title: "Una marca con identidad propia, desde el primer scroll.",
        text: "Para un emprendimiento de viajes de surf: un inicio con imágenes a pantalla completa, destinos en movimiento y un formulario que arma la consulta y la envía por WhatsApp.",
        ratio: "1100 / 865",
        layout: "steps",
        images: [
          {
            src: "/projects/surf-trips/inicio.jpg",
            alt: "Inicio de la web Surf Trips con surfistas frente al mar",
            caption: "Inicio con imagen a pantalla completa",
          },
          {
            src: "/projects/surf-trips/destinos.jpg",
            alt: "Franja animada de destinos como Sri Lanka, Europa y Costa Rica",
            caption: "Destinos en movimiento",
          },
          {
            src: "/projects/surf-trips/formulario.jpg",
            alt: "Formulario de consulta con destino, nivel y cantidad de personas",
            caption: "Formulario que llega por WhatsApp",
          },
        ],
      },
    ],
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
  {
    slug: "esteticas",
    path: "/web-para-esteticas",
    seoTitle: "Diseño de Páginas Web para Centros de Estética con Reserva de Turnos",
    seoDescription:
      "Sitios web para centros de estética, spas y salones de belleza: catálogo de tratamientos con precios, reserva de turnos online con calendario y panel de gestión de agenda.",
    eyebrow: "Novaire Studio · Diseño web para estéticas",
    title: "Que tus clientas reserven su turno",
    accent: "sin escribirte.",
    intro:
      "Sitios web para centros de estética, spas y salones de belleza, con un catálogo de tratamientos, reserva de turnos online y gestión de agenda en un solo lugar.",
    image: "/brand/ambiente.jpg",
    imagePosition: "35% 45%",
    includesTitle: "Qué incluye tu web de estética y gestión de turnos",
    includes: [
      {
        title: "Catálogo de tratamientos",
        text: "Cada servicio con su descripción, duración y precio de referencia, ordenado por categorías y con buscador.",
      },
      {
        title: "Reserva de turnos online",
        text: "Tus clientas eligen servicio, profesional, día y horario en pocos pasos, desde el celular.",
      },
      {
        title: "Calendario y disponibilidad",
        text: "Los horarios ocupados dejan de ofrecerse solos: sin superposiciones ni mensajes de ida y vuelta.",
      },
      {
        title: "Confirmación y recordatorios",
        text: "La clienta recibe la confirmación de su turno y un aviso para recordárselo.",
      },
      {
        title: "Panel de gestión de agenda",
        text: "Vos ves y administrás los turnos, los servicios, los precios y los profesionales en un panel simple.",
      },
      {
        title: "Diseño a tu medida",
        text: "Una web con la identidad de tu centro: fotos, colores y tipografía que transmiten calma y confianza.",
      },
    ],
    exampleSlugs: [],
    showcases: [
      {
        eyebrow: "Demo · Centro de estética",
        title: "Una web que transmite calma y vende tus tratamientos.",
        text: "Así puede verse tu centro de estética: fotografías cuidadas, tus tratamientos más elegidos a la vista y un botón para reservar siempre presente.",
        layout: "wide",
        images: [
          {
            src: "/projects/esteticas/sitio-inicio.jpg",
            alt: "Inicio de la web de un centro de estética con tratamientos y botón de reservar turno",
          },
          {
            src: "/projects/esteticas/sitio-reservar.jpg",
            alt: "Sección final de la web de estética con servicios, horarios y contacto",
          },
        ],
      },
      {
        eyebrow: "Gestión de turnos",
        title: "De elegir el servicio a la reserva confirmada, en tres pasos.",
        text: "El sistema de turnos guía a tus clientas: eligen el tratamiento, ven solo los días y horarios libres y reciben la confirmación al instante.",
        layout: "steps",
        images: [
          {
            src: "/projects/esteticas/turnos-servicios.jpg",
            alt: "Paso 1 de la reserva: lista de servicios con precios y buscador",
            caption: "Elegí el servicio",
          },
          {
            src: "/projects/esteticas/turnos-calendario.jpg",
            alt: "Paso 3 de la reserva: calendario con días y horarios disponibles",
            caption: "Día y horario disponibles",
          },
          {
            src: "/projects/esteticas/turnos-confirmacion.jpg",
            alt: "Pantalla de reserva confirmada",
            caption: "Reserva confirmada",
          },
        ],
      },
    ],
    steps,
    faq: [
      {
        question: "¿Mis clientas pueden reservar turno desde el celular?",
        answer:
          "Sí. El sistema de reservas está pensado primero para el celular: eligen servicio, día y horario en pocos pasos.",
      },
      {
        question: "¿Puedo manejar varios profesionales y servicios?",
        answer:
          "Sí. Cada servicio tiene su duración y precio, y los turnos pueden asignarse a distintos profesionales.",
      },
      {
        question: "¿Voy a poder cambiar precios y horarios yo misma?",
        answer:
          "Sí. Incluimos un panel de gestión para editar servicios, precios, horarios y ver la agenda sin depender de un desarrollador.",
      },
    ],
    whatsappText: "Hola! Quiero una web con reserva de turnos para mi centro de estética.",
  },
  {
    slug: "academias",
    path: "/web-para-academias",
    seoTitle: "Diseño de Páginas Web para Academias, Institutos y Cursos",
    seoDescription:
      "Sitios web para academias, institutos y cursos de oficios: catálogo de cursos, próximas fechas con cupos, metodología y consultas o inscripción por WhatsApp.",
    eyebrow: "Novaire Studio · Diseño web para academias y cursos",
    title: "Que tus cursos se llenen con",
    accent: "una web que enseña a elegir.",
    intro:
      "Sitios web para academias, institutos y cursos de oficios que muestran su propuesta con claridad, publican las próximas fechas y convierten visitas en inscripciones.",
    image: "/brand/ambiente.jpg",
    imagePosition: "70% 70%",
    includesTitle: "Qué incluye tu web de cursos y formación",
    includes: [
      {
        title: "Catálogo de cursos",
        text: "Cada curso con su contenido, duración, modalidad y a quién está dirigido.",
      },
      {
        title: "Próximas fechas y cupos",
        text: "Calendario de inicios con horarios y lugares disponibles, siempre a la vista.",
      },
      {
        title: "Inscripción y consultas",
        text: "Botón de consulta por WhatsApp en cada curso y formulario para reservar tu lugar.",
      },
      {
        title: "Tu metodología, bien contada",
        text: "Cómo se aprende, quiénes enseñan y qué resultados esperar, para generar confianza.",
      },
      {
        title: "Panel para actualizar fechas",
        text: "Editá cursos, cupos y fechas por tu cuenta, sin depender de un desarrollador.",
      },
      {
        title: "Adaptada a celulares",
        text: "Tus futuros alumnos comparan opciones desde el celular: la web está pensada para esa pantalla.",
      },
    ],
    exampleSlugs: [],
    showcases: [
      {
        eyebrow: "Demo · Academia de cursos de mecánica",
        title: "Una propuesta clara, con cursos y fechas a la vista.",
        text: "Así puede verse tu academia: un inicio que dice qué se aprende, un listado de próximas fechas con cupos y un botón de consulta en cada una.",
        layout: "gallery",
        images: [
          {
            src: "/projects/academia-demo/inicio.jpg",
            alt: "Inicio de la web de una academia de mecánica automotriz con botones de cursos y fechas",
            caption: "Inicio y propuesta",
          },
          {
            src: "/projects/academia-demo/fechas.jpg",
            alt: "Listado de próximas fechas de cursos con cupos libres y botón de consulta",
            caption: "Próximas fechas y cupos",
          },
        ],
      },
      {
        eyebrow: "Metodología",
        title: "Mostrá cómo se aprende, no solo qué se enseña.",
        text: "Una sección de metodología con pasos numerados y una imagen del oficio ayuda a que el alumno entienda tu forma de enseñar antes de escribirte.",
        layout: "wide",
        images: [
          {
            src: "/projects/academia-demo/metodologia.jpg",
            alt: "Sección de metodología de una academia con tres pasos y foto de un tablero de auto",
          },
        ],
      },
    ],
    steps,
    faq: [
      {
        question: "¿Puedo publicar las fechas y los cupos de cada curso?",
        answer:
          "Sí. Armamos un listado de próximas fechas con horarios y cupos, y un panel para que lo actualices vos.",
      },
      {
        question: "¿Los alumnos pueden inscribirse desde la web?",
        answer:
          "Pueden consultar o reservar su lugar con un formulario o por WhatsApp. Si necesitás inscripción y pagos online, también lo evaluamos.",
      },
      {
        question: "¿Sirve para cualquier tipo de curso?",
        answer:
          "Sí: oficios, idiomas, formación profesional, talleres y cursos online o presenciales.",
      },
    ],
    whatsappText: "Hola! Quiero una web para mi academia de cursos.",
  },
  {
    slug: "concesionarias",
    path: "/web-para-concesionarias",
    seoTitle: "Diseño de Páginas Web para Concesionarias y Agencias de Autos",
    seoDescription:
      "Sitios web para concesionarias y agencias de autos: stock de vehículos con buscador, cotización de permuta, financiación y contacto directo por WhatsApp.",
    eyebrow: "Novaire Studio · Diseño web para concesionarias",
    title: "Que tu stock se vea como lo que es:",
    accent: "una oportunidad.",
    intro:
      "Sitios web para concesionarias y agencias de autos con stock actualizado, buscador de vehículos, cotización de permutas y contacto directo con tus vendedores.",
    image: "/brand/ambiente.jpg",
    imagePosition: "50% 50%",
    includesTitle: "Qué incluye tu web de concesionaria",
    includes: [
      {
        title: "Stock con buscador",
        text: "Los vehículos disponibles, con filtros por tipo, marca y orden de ingreso.",
      },
      {
        title: "Fichas con fotos y datos",
        text: "Cada vehículo con su galería, año, kilómetros, precio y botón para consultar.",
      },
      {
        title: "Cotización de permuta",
        text: "Un formulario para que el cliente cargue fotos, kilómetros y descripción de su usado.",
      },
      {
        title: "Consultas por WhatsApp",
        text: "Botón flotante y contacto directo con el vendedor desde cada unidad.",
      },
      {
        title: "Panel para cargar vehículos",
        text: "Publicá, editá y marcá como vendidas tus unidades sin pedir cambios a nadie.",
      },
      {
        title: "Comparador y trámites",
        text: "Secciones para comparar unidades y consultar por gestoría y financiación.",
      },
    ],
    exampleSlugs: [],
    showcases: [
      {
        eyebrow: "Demo · Concesionaria",
        title: "Un buscador de vehículos a primera vista.",
        text: "Así puede verse tu agencia: un inicio contundente con buscador de stock, accesos a cotizar tu permuta y contacto directo por WhatsApp e Instagram.",
        layout: "wide",
        images: [
          {
            src: "/projects/concesionaria-demo/inicio.jpg",
            alt: "Inicio de la web de una concesionaria con buscador de vehículos por tipo y marca",
          },
        ],
      },
      {
        eyebrow: "Permuta",
        title: "Convertí a quien quiere entregar su usado en consulta.",
        text: "Un bloque destacado invita a cotizar el vehículo usado, con fotos y kilómetros, para tomarlo en parte de pago o como permuta.",
        layout: "single",
        ratio: "922 / 857",
        images: [
          {
            src: "/projects/concesionaria-demo/permuta.jpg",
            alt: "Bloque para cotizar un vehículo usado como permuta, con años de trayectoria",
          },
        ],
      },
    ],
    steps,
    faq: [
      {
        question: "¿Puedo cargar y actualizar el stock yo mismo?",
        answer:
          "Sí. Incluimos un panel para publicar, editar y marcar como vendidos tus vehículos.",
      },
      {
        question: "¿Se puede conectar con WhatsApp y redes?",
        answer:
          "Sí. Cada unidad puede tener un botón de consulta por WhatsApp, y la web enlaza tu Instagram y otros canales.",
      },
      {
        question: "¿Se puede ofrecer financiación y cotización de permutas?",
        answer:
          "Sí. Armamos formularios para cotizar el usado y consultar por financiación, que llegan directo a tus vendedores.",
      },
    ],
    whatsappText: "Hola! Quiero una web para mi concesionaria.",
  },
];

export function getNiche(slug: string) {
  const niche = niches.find((item) => item.slug === slug);
  if (!niche) throw new Error(`Niche not found: ${slug}`);
  return niche;
}
