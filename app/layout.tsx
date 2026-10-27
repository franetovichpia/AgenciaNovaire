import type { Metadata } from "next";
import {
  Playfair_Display,
  Manrope,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";

// Tipografías
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const evolveSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-evolve",
});

// Configuración del tema
const themeScript = `
  (function () {
    try {
      var stored = window.localStorage.getItem("novaire-theme");

      var theme =
        stored === "dark" || stored === "light"
          ? stored
          : window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches
          ? "dark"
          : "light";

      document.documentElement.setAttribute(
        "data-theme",
        theme
      );
    } catch (error) {}
  })();
`;

// Configuración SEO
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.studionovaire.com"
  ),

  title: {
    default:
      "Novaire Studio | Diseño Web para Profesionales y Empresas",
    template: "%s | Novaire Studio",
  },

  description:
    "Diseñamos páginas web para arquitectos, inmobiliarias, turismo y profesionales. Desarrollamos tiendas online, sistemas de gestión y automatizaciones a medida para empresas y emprendimientos.",

  applicationName: "Novaire Studio",

  keywords: [
    "Novaire Studio",
    "agencia de diseño web",
    "diseño web Argentina",
    "desarrollo web Argentina",
    "diseño web para profesionales",
    "páginas web para arquitectos",
    "diseño web para estudios de arquitectura",
    "páginas web para inmobiliarias",
    "diseño web inmobiliario",
    "páginas web para agencias de viajes",
    "diseño web para turismo",
    "sitios web para profesionales",
    "páginas web para abogados",
    "páginas web para empresas",
    "desarrollo web a medida",
    "landing pages",
    "tiendas online",
    "e-commerce",
    "sistemas de gestión",
    "sistemas de turnos online",
    "automatización de procesos",
    "automatización para empresas",
    "desarrollo de software",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.studionovaire.com/",
    siteName: "Novaire Studio",

    title:
      "Novaire Studio | Diseño Web y Soluciones Digitales",

    description:
      "Creamos sitios web para arquitectos, inmobiliarias, turismo y profesionales. Desarrollo web, tiendas online, sistemas y automatizaciones para potenciar negocios.",
  },

  twitter: {
    card: "summary",
    title:
      "Novaire Studio | Diseño Web y Automatización",
    description:
      "Sitios web profesionales, e-commerce, sistemas de gestión y automatizaciones a medida.",
  },

  category: "technology",
};

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body
        className={`
          ${playfair.variable}
          ${manrope.variable}
          ${evolveSans.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
