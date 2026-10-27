import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { niches } from "@/data/niches";

export function Niches() {
  return (
    <section id="rubros" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Webs por rubro
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-3xl lg:text-4xl">
              Diseño web pensado para{" "}
              <span className="italic text-primary">tu actividad.</span>
            </h2>
          </Reveal>

          <Reveal direction="right">
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              Cada rubro tiene sus propias necesidades. Mirá cómo trabajamos
              con arquitectos, inmobiliarias, turismo, estética, academias y
              concesionarias.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {niches.map((niche, index) => (
            <Reveal key={niche.slug} delay={(index % 3) * 0.08}>
              <Link
                href={niche.path}
                className="group flex h-full flex-col justify-between gap-8 border-b border-border p-6 transition-colors hover:bg-secondary/60 sm:p-8"
              >
                <div>
                  <span className="text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em]">
                    {niche.seoTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {niche.intro}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Ver más
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
