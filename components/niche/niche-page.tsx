import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { ProcessBand } from "@/components/editorial/process-band";
import { Ticker } from "@/components/editorial/ticker";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { niches, type Niche } from "@/data/niches";
import { projects, siteConfig } from "@/data/site";

export function NichePage({ niche }: { niche: Niche }) {
  const examples = niche.exampleSlugs.flatMap((slug) =>
    projects.filter((project) => project.slug === slug),
  );
  const others = niches.filter((item) => item.slug !== niche.slug);
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    niche.whatsappText,
  )}`;

  return (
    <>
      <Header />

      <main>
        <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-[#14120f] text-white">
          <Image
            src={niche.image}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: niche.imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

          <Container className="relative pb-14 pt-32 sm:pb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/75">
              {niche.eyebrow}
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {niche.title}{" "}
              <span className="italic text-accent">{niche.accent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              {niche.intro}
            </p>

            <div className="mt-9 max-w-md">
              <Link
                href="/agendar"
                className="flex items-center justify-between gap-6 border-b border-white/50 pb-4 text-base font-medium transition hover:border-white"
              >
                Solicitar una propuesta
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="mt-3 text-xs text-white/55">
                Sin costo · 30 minutos · Sin compromiso
              </p>
            </div>
          </Container>
        </section>

        <Ticker />

        <section className="bg-[#16231b] py-12 text-[#f3efe8] sm:py-16">
          <Container>
            <div className="flex items-start gap-6 sm:gap-10">
              <Reveal direction="left">
                <span
                  aria-hidden="true"
                  className="font-impact vertical-word block shrink-0 text-[4.5rem] leading-none text-accent sm:text-[8rem]"
                >
                  Incluye
                </span>
              </Reveal>

              <Reveal direction="right" className="flex-1">
                <h2 className="max-w-2xl font-display text-2xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl">
                  {niche.includesTitle}
                </h2>

                <div className="mt-10 grid gap-x-14 border-t border-white/15 md:grid-cols-2">
                  {niche.includes.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex gap-5 border-b border-white/15 py-7"
                    >
                      <span className="w-7 text-sm text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-medium tracking-[-0.02em]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/65">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {examples.length > 0 ? (
          <section className="py-20 sm:py-28">
            <Container>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Trabajos reales
              </span>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Proyectos que ya desarrollamos.
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {examples.map((project, index) => (
                  <Reveal key={project.slug} delay={index * 0.12}>
                    <article>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-secondary">
                        {project.images[0] ? (
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                            className="object-cover object-top"
                          />
                        ) : null}
                      </div>
                      <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.02em]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {project.summary}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {niche.showcases?.map((showcase) => (
          <section
            key={showcase.title}
            className="overflow-hidden py-20 sm:py-28"
          >
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <Reveal direction="left">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {showcase.eyebrow}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                    {showcase.title}
                  </h2>
                </Reveal>
                <Reveal direction="right">
                  <p className="max-w-xl text-base leading-8 text-muted-foreground">
                    {showcase.text}
                  </p>
                </Reveal>
              </div>

              {showcase.layout === "single" ? (
                <Reveal className="mt-14">
                  <div
                    className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15 ring-1 ring-black/5"
                    style={{ aspectRatio: showcase.ratio ?? "4 / 5" }}
                  >
                    <Image
                      src={showcase.images[0].src}
                      alt={showcase.images[0].alt}
                      fill
                      quality={95}
                      sizes="(min-width:768px) 672px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ) : showcase.layout === "wide" ? (
                <div className="mt-14 space-y-6 sm:space-y-8">
                  {showcase.images.map((image, index) => (
                    <Reveal key={image.src} delay={index * 0.1}>
                      <div className="relative aspect-[1892/870] overflow-hidden rounded-[1.5rem] shadow-2xl shadow-black/15 ring-1 ring-black/5 sm:rounded-[2rem]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          quality={95}
                          sizes="(min-width:1280px) 1200px, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : showcase.layout === "gallery" ? (
                <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
                  {showcase.images.map((image, index) => (
                    <Reveal key={image.src} delay={(index % 2) * 0.12}>
                      <figure>
                        <div className="relative aspect-[1100/865] overflow-hidden rounded-[1.5rem] shadow-xl shadow-black/15 ring-1 ring-black/5 sm:rounded-[2rem]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            quality={95}
                            sizes="(min-width:1280px) 580px, (min-width:640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        {image.caption ? (
                          <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {String(index + 1).padStart(2, "0")} —{" "}
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    </Reveal>
                  ))}
                </div>
              ) : showcase.layout === "steps" ? (
                <div className="mt-14 grid gap-8 md:grid-cols-3">
                  {showcase.images.map((image, index) => (
                    <Reveal key={image.src} delay={index * 0.12}>
                      <figure>
                        <div
                          className="relative overflow-hidden rounded-[1.5rem] shadow-xl shadow-black/15 ring-1 ring-black/5"
                          style={{ aspectRatio: showcase.ratio ?? "941 / 861" }}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            quality={95}
                            sizes="(min-width:768px) 380px, 100vw"
                            className="object-cover"
                          />
                        </div>
                        {image.caption ? (
                          <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {String(index + 1).padStart(2, "0")} —{" "}
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    </Reveal>
                  ))}
                </div>
              ) : showcase.layout === "duo" ? (
                <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
                  {showcase.images.map((image, index) => (
                    <Reveal key={image.src} delay={index * 0.12}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15 ring-1 ring-black/5">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          quality={95}
                          sizes="(min-width:1280px) 600px, (min-width:640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-12">
                  {showcase.images.map((image, index) => (
                    <div
                      key={image.src}
                      className={`w-[68vw] shrink-0 snap-center sm:w-[44vw] lg:w-auto ${
                        index % 2 === 1 ? "lg:translate-y-12" : ""
                      }`}
                    >
                      <Reveal delay={index * 0.1}>
                        <figure>
                          <div className="relative aspect-[9/17] overflow-hidden rounded-[2.25rem] border-[6px] border-[#16231b] bg-[#16231b] shadow-2xl shadow-black/20">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              quality={95}
                              sizes="(min-width:1024px) 300px, 68vw"
                              className="object-cover object-top"
                            />
                          </div>
                          {image.caption ? (
                            <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                              {String(index + 1).padStart(2, "0")} —{" "}
                              {image.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      </Reveal>
                    </div>
                  ))}
                </div>
              )}
            </Container>
          </section>
        ))}

        <ProcessBand steps={niche.steps} />

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <Reveal direction="left">
                <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Preguntas frecuentes
                </h2>
              </Reveal>

              <Reveal
                direction="right"
                className="divide-y divide-border border-y border-border"
              >
                {niche.faq.map((item) => (
                  <details key={item.question} className="group py-8">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                      <h3 className="text-lg font-semibold">{item.question}</h3>
                      <span className="text-2xl font-light transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-[#16231b] py-12 text-[#f3efe8] sm:py-16">
          <Container>
            <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-2xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Hablemos de tu{" "}
                  <span className="italic text-accent">proyecto.</span>
                </h2>
                <p className="mt-4 max-w-md text-base leading-8 text-white/65">
                  Contanos qué necesitás y te preparamos una propuesta a medida.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/agendar"
                  className="rounded-full bg-accent px-7 py-4 text-center text-sm font-semibold text-[#16231b]"
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
              <span>También hacemos webs para:</span>
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={item.path}
                  className="text-white underline-offset-4 hover:underline"
                >
                  {item.slug.charAt(0).toUpperCase() + item.slug.slice(1)}
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
