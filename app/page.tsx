import type { Metadata } from "next";

import { faqSchema } from "@/lib/seo";

import { Ticker } from "@/components/editorial/ticker";
import { JsonLd } from "@/components/common/json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import { About } from "@/sections/about/about";
import { Contact } from "@/sections/contact/contact";
import { Faq, questions } from "@/sections/faq/faq";
import { Hero } from "@/sections/hero/hero";
import { Niches } from "@/sections/niches/niches";
import { Needs } from "@/sections/needs/needs";
import { Projects } from "@/sections/projects/projects";
import { Services } from "@/sections/services/services";

export const metadata: Metadata = {
  title: {
    absolute: "Diseño Web para Profesionales y Empresas | Novaire Studio",
  },
  description:
    "Creamos páginas web para arquitectos, inmobiliarias, turismo y profesionales. También tiendas online, sistemas de gestión y automatizaciones a medida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Novaire Studio | Diseño Web para Profesionales",
    description:
      "Sitios web profesionales y soluciones digitales para empresas, estudios de arquitectura, inmobiliarias y turismo.",
    url: "https://www.studionovaire.com/",
    siteName: "Novaire Studio",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(questions)} />
      <Header />

      <main id="contenido-principal">
        <Hero />
        <Ticker />
        <Needs />
        <Services />
        <Niches />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
