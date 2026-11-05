import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { HeroBackdrop } from "@/components/common/hero-backdrop";
import { JsonLd } from "@/components/common/json-ld";
import { Reveal } from "@/components/common/reveal";
import { ProcessBand } from "@/components/editorial/process-band";
import { Ticker } from "@/components/editorial/ticker";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { niches, steps } from "@/data/niches";
import { siteConfig } from "@/data/site";
import { zonePages, type ZonePage } from "@/data/zones";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export function ZonePageView({ page }: { page: ZonePage }) {
  const others = zonePages.filter((item) => item.slug !== page.slug);
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    page.whatsappText,
  )}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: page.seoTitle,
            description: page.seoDescription,
            path: page.path,
          }),
          faqSchema(page.faq),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: page.seoTitle, path: page.path },
          ]),
        ]}
      />
      <Header />

      <main className="pt-16">
        <section className="card-section card-ink relative flex min-h-[60svh] items-end text-white">
          <HeroBackdrop />

          <Container className="relative pb-14 pt-32 sm:pb-20">
            <p className="font-serif-italic text-xl text-white/80 sm:text-2xl">
              {page.eyebrow}
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-3xl sm:text-5xl xl:text-6xl">
              {page.title} <span className="italic">{page.accent}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {page.intro}
            </p>

            <div className="mt-9 max-w-md">
              <Link
                href="/agendar"
                className="flex items-center justify-between gap-6 border-b border-white/50 pb-4 text-base font-medium transition hover:border-[#fff1b5] hover:text-[#fff1b5]"
              >
                Agendar una reunión gratuita
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="mt-3 text-xs text-white/55">
                Sin costo · 30 minutos · Sin compromiso
              </p>
            </div>
          </Container>
        </section>

        <Ticker />

        <section className="card-section relative bg-background py-14 sm:py-20">
          <div className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-[#fff1b5] blur-[100px]" />
          <Container className="relative">
            <Reveal direction="left">
              <h2 className="max-w-2xl font-display text-2xl sm:text-3xl lg:text-4xl">
                {page.groupsTitle}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {page.groups.map((group, index) => (
                <Reveal key={group.title} delay={(index % 2) * 0.25}>
                  <div className="glass h-full rounded-[2rem] p-7 sm:p-9">
                    <h3 className="font-display text-xl sm:text-2xl">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      {group.text}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {group.places.map((place) => (
                        <li
                          key={place}
                          className="rounded-full bg-[#0a0a0a] px-4 py-2 text-sm font-medium text-[#f2f0ea]"
                        >
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="card-section bg-background py-14 sm:py-20">
          <Container>
            <Reveal direction="left">
              <h2 className="max-w-2xl font-display text-2xl sm:text-3xl lg:text-4xl">
                Webs para tu <span className="hl">rubro</span>
              </h2>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {niches.map((niche) => (
                <Link
                  key={niche.slug}
                  href={niche.path}
                  className="glass rounded-full px-5 py-3 text-sm font-medium transition hover:bg-[#fff1b5]"
                >
                  {niche.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <ProcessBand steps={steps} />

        <section className="card-section bg-background py-14 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <Reveal direction="left">
                <h2 className="font-display text-2xl sm:text-3xl">
                  Preguntas frecuentes
                </h2>
              </Reveal>

              <Reveal
                direction="right"
                className="divide-y divide-border border-y border-border"
              >
                {page.faq.map((item) => (
                  <details key={item.question} className="group py-8">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                      <h3 className="text-lg font-semibold">{item.question}</h3>
                      <span className="text-2xl font-light transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="card-section card-ink py-14 text-[#f3efe8] sm:py-20">
          <Container>
            <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-2xl font-display text-2xl sm:text-3xl lg:text-4xl">
                  Hablemos de tu <span className="italic">proyecto.</span>
                </h2>
                <p className="mt-4 max-w-md text-base leading-8 text-white/70">
                  Contanos qué necesitás y te preparamos una propuesta a medida.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/agendar"
                  className="rounded-full bg-accent px-7 py-4 text-center text-sm font-semibold text-black"
                >
                  Agendar una reunión
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-semibold"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>

            <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-8 text-sm text-white/60">
              <span>También:</span>
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={item.path}
                  className="text-white underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
