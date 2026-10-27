"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#14120f] text-white">
      <Image
        src="/brand/ambiente.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_65%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-24 select-none font-display text-[22vw] italic leading-none tracking-[-0.06em] text-white/10 sm:right-12 sm:text-[14vw]"
      >
        Novaire.
      </span>

      <Container className="relative pb-14 pt-32 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-white/75"
        >
          Estudio digital · Diseño web para profesionales y empresas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
        >
          Tu negocio merece una presencia digital{" "}
          <span className="italic text-accent">
            a la altura de lo que ofrecés.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg"
        >
          Diseñamos páginas web para arquitectos, inmobiliarias, turismo y
          otros profesionales. También desarrollamos tiendas online, sistemas
          de gestión y automatizaciones para hacer crecer tu negocio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 max-w-md"
        >
          <Link
            href="/agendar"
            className="flex items-center justify-between gap-6 border-b border-white/50 pb-4 text-base font-medium transition hover:border-white"
          >
            Agendar una reunión gratis
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <p className="mt-3 text-xs text-white/55">
            Sin costo · 30 minutos · Sin compromiso
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
