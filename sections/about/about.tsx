"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="about" className="overflow-hidden py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Sobre Novaire
            </span>

            <div className="relative mt-6 flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#171310] p-8">
              <Image src="/brand/hojas.jpg" alt="" fill sizes="(min-width:1024px) 32vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

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

            <div className="mt-10 space-y-6">
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}