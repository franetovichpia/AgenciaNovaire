import type { Metadata } from "next";
import {
  Anton,
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

// Tipografía condensada para títulos verticales y bandas editoriales
const impact = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-impact",
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
  metadataBase: new URL("https://www.studionovaire.com"),

  title: {
    default: "Novaire Studio | Diseño Web para Profesionales",
    template: "%s | Novaire Studio",
  },

  description:
    "Diseño y desarrollo web para profesionales, arquitectos, inmobiliarias, turismo y empresas. Creamos tiendas online, sistemas de gestión y automatizaciones a medida.",

  applicationName: "Novaire Studio",

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
    title: "Novaire Studio | Diseño Web y Soluciones Digitales",
    description:
      "Sitios web para profesionales y empresas, e-commerce, sistemas de gestión y automatizaciones.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Novaire Studio | Diseño Web y Soluciones Digitales",
    description:
      "Soluciones digitales a medida para profesionales, empresas y emprendimientos.",
  },
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
          ${impact.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
