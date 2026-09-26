"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";

const values = [
  {
    number: "01",
    title: "Diseño con intención",
    description:
      "Cada decisión visual responde a un objetivo y acompaña la identidad de la marca.",
  },
  {
    number: "02",
    title: "Tecnología funcional",
    description:
      "Construimos soluciones claras, mantenibles y preparadas para evolucionar.",
  },
  {
    number: "03",
    title: "Trabajo cercano",
    description:
      "Creemos en una comunicación directa, transparente y colaborativa.",
  },
];

export function About() {
  return (
    <section id="about" className="overflow-hidden py-28 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Sobre Novaire
            </span>

            <div className="relative mt-8 flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#171310] p-8">
              <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary/25 blur-[100px]" />
              <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-accent/20 blur-[90px]" />

              <span className="relative font-evolve text-7xl tracking-[-0.03em]" style={{ color: "#fff1b5" }}>
                N.
              </span>

              <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <p className="font-display text-2xl font-medium leading-tight tracking-[-0.04em] text-white">
                  Estrategia, diseño y desarrollo trabajando en una misma
                  dirección.
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
                  Estudio Novaire
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              Creamos herramientas digitales que ayudan a los negocios a verse
              mejor, trabajar mejor y crecer.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">
              Novaire nace como un estudio digital enfocado en desarrollar
              soluciones personalizadas para empresas, profesionales y
              emprendimientos. No trabajamos con fórmulas genéricas: cada
              proyecto parte de una necesidad concreta.
            </p>

            <div className="mt-12 space-y-7">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="grid gap-4 border-t border-border pt-6 sm:grid-cols-[0.15fr_0.35fr_0.5fr]"
                >
                  <span className="text-sm text-primary">{value.number}</span>

                  <h3 className="font-semibold">{value.title}</h3>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background"
            >
              Trabajemos juntos
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}