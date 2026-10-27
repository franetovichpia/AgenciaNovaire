import type { Metadata } from "next";

import { Ticker } from "@/components/editorial/ticker";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import { About } from "@/sections/about/about";
import { Contact } from "@/sections/contact/contact";
import { Faq } from "@/sections/faq/faq";
import { Hero } from "@/sections/hero/hero";
import { Needs } from "@/sections/needs/needs";
import { Projects } from "@/sections/projects/projects";
import { Services } from "@/sections/services/services";

export const metadata: Metadata = {
  title: "Diseño Web para Profesionales y Empresas",
  description:
    "Creamos páginas web para arquitectos, inmobiliarias, turismo y profesionales. También desarrollamos tiendas online, sistemas de gestión y automatizaciones a medida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Novaire Studio | Diseño Web para Profesionales",
    description:
      "Sitios web profesionales y soluciones digitales para empresas, estudios de arquitectura, inmobiliarias y turismo.",
    url: "https://www.studionovaire.com/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="contenido-principal">
        <Hero />
        <Ticker />
        <Needs />
        <Services />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
