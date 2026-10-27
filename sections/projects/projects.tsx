"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { ProjectModal } from "@/components/projects/project-modal";
import { projects as allProjects, type Project } from "@/data/site";

const FEATURED_SLUGS = [
  "bim-3d-5d",
  "landing-arquitecta",
  "portal-comunicativo",
  "norte-logistica",
];

const projects = FEATURED_SLUGS.flatMap((slug) =>
  allProjects.filter((project) => project.slug === slug),
);

const CARD_WIDTH = 230;
const CARD_HEIGHT = 330;

function circularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const active = projects[activeIndex];

  function go(direction: -1 | 1) {
    setActiveIndex(
      (current) => (current + direction + projects.length) % projects.length,
    );
  }

  return (
    <section id="projects" className="mx-2 sm:mx-4 py-2 sm:py-3">
      <div>
        <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <AnimatePresence mode="sync">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 bg-gradient-to-br ${active.tint}`}
            >
              {active.images[0] ? (
                <Image
                  src={active.images[0]}
                  alt=""
                  fill
                  aria-hidden="true"
                  sizes="100vw"
                  className="scale-110 object-cover opacity-60 blur-3xl"
                />
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50" />

          <div className="relative flex flex-col items-center px-6 pb-14 pt-12 text-center sm:pt-16">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
              Proyectos
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-5 max-w-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fff1b5]">
                  {active.category}
                </p>

                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
                  {active.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                  {active.summary}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {active.highlights.map((item) => (
                    <span
                      key={item}
                      className="glass rounded-full px-4 py-2 text-xs font-medium text-white sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setOpenProject(active)}
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition duration-300 hover:bg-[#fff1b5] hover:shadow-[0_0_36px_rgba(255,241,181,0.5)]"
              >
                Ver proyecto
              </button>

              <a
                href="/agendar"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Empezar el mío
              </a>
            </div>

            <div className="relative mt-12 flex h-[380px] w-full max-w-4xl items-center justify-center">
              <button
                type="button"
                aria-label="Proyecto anterior"
                onClick={() => go(-1)}
                className="absolute left-0 z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50 sm:left-4"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              {projects.map((project, index) => {
                const offset = circularOffset(index, activeIndex, projects.length);
                const isActive = offset === 0;
                const distance = Math.abs(offset);

                return (
                  <motion.button
                    key={project.slug}
                    type="button"
                    aria-label={
                      isActive
                        ? `Ver ${project.title}`
                        : `Mostrar ${project.title}`
                    }
                    onClick={() =>
                      isActive ? setOpenProject(project) : setActiveIndex(index)
                    }
                    animate={{
                      x: offset * 150,
                      y: distance * 28,
                      rotate: offset * 9,
                      scale: Math.max(1 - distance * 0.13, 0.5),
                      opacity: distance > 3 ? 0 : 1,
                      filter: `blur(${Math.min(distance * 1.1, 4)}px)`,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    style={{
                      width: CARD_WIDTH,
                      height: CARD_HEIGHT,
                      zIndex: 10 - distance,
                      pointerEvents: distance > 3 ? "none" : "auto",
                    }}
                    className="absolute cursor-pointer overflow-hidden rounded-[1.5rem] shadow-2xl ring-1 ring-white/15"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.tint}`}
                    >
                      {project.images[0] ? (
                        <Image
                          src={project.images[0]}
                          alt=""
                          fill
                          sizes="230px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center p-4">
                          <span
                            className="font-evolve text-center text-lg leading-tight tracking-[-0.02em]"
                            style={{ color: "#f2f0ea" }}
                          >
                            {project.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}

              <button
                type="button"
                aria-label="Siguiente proyecto"
                onClick={() => go(1)}
                className="absolute right-0 z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50 sm:right-4"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
