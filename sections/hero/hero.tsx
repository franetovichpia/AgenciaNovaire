"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { HeroBackdrop } from "@/components/common/hero-backdrop";

export function Hero() {
  return (
    <section className="card-section card-ink relative flex min-h-[80svh] items-end text-white">
      <HeroBackdrop />

      <Container className="relative pb-16 pt-40 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif-italic text-2xl text-white/80 sm:text-3xl"
        >
          Estudio digital · Diseño web para profesionales y empresas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-3xl sm:text-5xl lg:text-6xl"
        >
          Tu negocio merece una presencia digital{" "}
          <span className="italic">a la altura de lo que ofrecés.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 max-w-xl text-base leading-8 text-white/70"
        >
          Diseñamos páginas web para arquitectos, inmobiliarias, turismo y
          otros profesionales. También desarrollamos tiendas online, sistemas
          de gestión y automatizaciones para <span className="hl">hacer crecer tu negocio.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Link
            href="/agendar"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black transition duration-300 hover:bg-[#fff1b5] hover:shadow-[0_0_44px_rgba(255,241,181,0.6)]"
          >
            Agendar una reunión gratis
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">
            Sin costo · 30 minutos · Sin compromiso
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
