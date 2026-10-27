"use client";

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
    <section id="solutions" className="card-section card-ink relative py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-6 h-72 w-72 rounded-full bg-[#fff1b5]/20 blur-[110px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[110px]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4, margin: "0px 0px -18% 0px" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#fff1b5]">El problema real</span>
            <h2 className="mt-5 max-w-xl font-display text-2xl text-white sm:text-3xl">
              No es falta de interés. Es que cuesta{" "}
              <span className="italic">encontrarte, entenderte o reservar con vos.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
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
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.25 + index * 0.25 }}
                className="glass rounded-[1.75rem] p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1b5] text-black"><Icon className="h-5 w-5" /></span>
                <p className="mt-5 text-base leading-7 text-white">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
