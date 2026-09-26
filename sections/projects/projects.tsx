"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { ProjectModal } from "@/components/projects/project-modal";
import { projects, type Project } from "@/data/site";

const CARD_WIDTH = 190;
const CARD_HEIGHT = 270;

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
    <section id="projects" className="py-24 sm:py-28">
      <Container>
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

          <div className="relative flex flex-col items-center px-6 pb-20 pt-14 text-center sm:pt-20">
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
                <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                  {active.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                  {active.summary}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOpenProject(active)}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#171310] transition hover:opacity-90"
              >
                Ver proyecto
              </button>

              <a
                href="/agendar"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Empezar el mío
              </a>
            </div>

            <div className="relative mt-14 flex h-[300px] w-full max-w-3xl items-center justify-center">
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
                      x: offset * 122,
                      y: distance * 24,
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
                          sizes="190px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center p-4">
                          <span
                            className="font-evolve text-center text-lg leading-tight tracking-[-0.02em]"
                            style={{ color: "#fff1b5" }}
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
      </Container>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
