"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MousePointerClick } from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { niches, type Niche } from "@/data/niches";

function FlipCard({ niche, index }: { niche: Niche; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[15.5rem] cursor-pointer [perspective:1200px] sm:h-[17rem]"
      onPointerEnter={(e) => e.pointerType === "mouse" && setFlipped(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setFlipped(false)}
      onClick={(e) => {
        const isLink = (e.target as HTMLElement).closest("a");
        if (!isLink) setFlipped((current) => !current);
      }}
      onFocus={() => setFlipped(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFlipped(false);
        }
      }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Frente: solo el nombre del rubro */}
        <div
          className="glass absolute inset-0 flex flex-col justify-between rounded-[2rem] p-7 [backface-visibility:hidden]"
          aria-hidden={flipped}
        >
          <span className="text-sm font-semibold text-foreground/60">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <h3 className="font-display text-2xl sm:text-3xl">
              {niche.label}
            </h3>
            <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/60">
              <MousePointerClick className="h-4 w-4" />
              Descubrí más
            </p>
          </div>
        </div>

        {/* Dorso: la información y el enlace a la página */}
        <Link
          href={niche.path}
          tabIndex={flipped ? 0 : -1}
          aria-hidden={!flipped}
          className="absolute inset-0 flex flex-col justify-between rounded-[2rem] bg-[#0a0a0a] p-7 text-[#f2f0ea] shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="text-base leading-7 text-white/85">{niche.intro}</p>

          <span className="inline-flex items-center justify-between gap-3 border-t border-white/20 pt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#fff1b5]">
            Ver página de {niche.label.toLowerCase()}
            <ArrowUpRight className="h-5 w-5 shrink-0" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export function Niches() {
  return (
    <section
      id="rubros"
      className="card-section relative bg-background py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-[#fff1b5] blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-4 h-80 w-80 rounded-full bg-[#0a0a0a]/15 blur-[110px]" />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Webs por rubro
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl">
              Diseño web pensado para{" "}
              <span className="italic">
                <span className="hl">tu actividad.</span>
              </span>
            </h2>
          </Reveal>

          <Reveal direction="right">
            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Cada rubro tiene sus propias necesidades. Pasá el cursor por tu
              actividad y mirá cómo trabajamos.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {niches.map((niche, index) => (
            <Reveal key={niche.slug} delay={(index % 3) * 0.3}>
              <FlipCard niche={niche} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
