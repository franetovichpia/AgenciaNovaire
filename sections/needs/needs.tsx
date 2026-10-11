"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, MessageSquareText, SearchX, TimerReset } from "lucide-react";

import { Container } from "@/components/common/container";

const problems = [
  { icon: SearchX, text: "Tus clientes no encuentran información clara sobre lo que ofrecés." },
  { icon: MessageSquareText, text: "Dependés de Instagram o repetís las mismas respuestas por WhatsApp." },
  { icon: TimerReset, text: "Coordinás consultas y turnos manualmente y perdés tiempo." },
  { icon: CalendarCheck, text: "Recibís consultas, pero no tenés un camino simple para convertirlas en clientes." },
];

export function Needs() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-[#14120f] py-16 text-white sm:py-24">
      <Image src="/brand/hojas.jpg" alt="" fill sizes="100vw" className="object-cover object-center opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#14120f]/90 via-[#14120f]/70 to-[#14120f]/50" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#cdbda9]">El problema real</span>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl">
              No es falta de interés. Es que cuesta encontrarte, entenderte o reservar con vos.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
              Estas son las cuatro cosas que más te están frenando ahora mismo. Diseñamos tu presencia digital para resolverlas, incluso cuando vos no estás conectado.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 text-[#cdbda9]" />
                <p className="mt-5 text-sm leading-7 text-white/75">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
