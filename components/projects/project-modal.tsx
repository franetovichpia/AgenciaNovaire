"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import { siteConfig } from "@/data/site";
import type { Project } from "@/data/site";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <ModalContent key={project.slug} project={project} onClose={onClose} />
      ) : null}
    </AnimatePresence>
  );
}

function ModalContent({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const slideCount = project.images.length;

  useEffect(() => {
    if (slideCount <= 1) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        setSlide((current) => (current + 1) % slideCount);
      }
      if (event.key === "ArrowLeft") {
        setSlide((current) => (current - 1 + slideCount) % slideCount);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [slideCount]);

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hola! Quiero un proyecto como ${project.whatsappName}...`,
  )}`;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] bg-card shadow-2xl"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
        >
          <X className="h-4 w-4" />
        </button>

        <div
          className={`relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gradient-to-br sm:aspect-[16/8] ${project.tint}`}
        >
          {slideCount > 0 ? (
            <Image
              src={project.images[slide]}
              alt={`Captura de ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span
                className="font-evolve text-3xl tracking-[-0.02em] sm:text-4xl"
                style={{ color: "#fff1b5" }}
              >
                Capturas próximamente
              </span>
            </div>
          )}

          {slideCount > 1 ? (
            <>
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() =>
                  setSlide((current) => (current - 1 + slideCount) % slideCount)
                }
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Foto siguiente"
                onClick={() => setSlide((current) => (current + 1) % slideCount)}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-1.5">
                {project.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Ir a la foto ${index + 1}`}
                    onClick={() => setSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === slide ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="overflow-y-auto p-7 sm:p-9">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {project.category}
          </span>

          <h2 className="mt-2 font-display text-2xl font-medium tracking-[-0.04em] text-foreground sm:text-3xl">
            {project.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:w-auto"
          >
            Quiero este proyecto
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
