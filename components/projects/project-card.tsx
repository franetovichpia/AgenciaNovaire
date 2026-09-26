"use client";

import { type MouseEvent, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), {
    stiffness: 220,
    damping: 22,
  });

  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  const contentY = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(event: MouseEvent<HTMLButtonElement>) {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const stagger = ["lg:translate-y-0", "lg:translate-y-4", "lg:-translate-y-3"][
    index % 3
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.09, ease: "easeOut" }}
      style={{ perspective: 1200 }}
      className={stagger}
    >
      <motion.button
        ref={cardRef}
        type="button"
        onClick={() => onOpen(project)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] text-left shadow-xl shadow-black/10"
      >
        <motion.div
          style={{ x: imageX, y: imageY, scale: 1.2 }}
          className={`absolute -inset-4 overflow-hidden bg-gradient-to-br ${project.tint}`}
        >
          {project.images[0] ? (
            <Image
              src={project.images[0]}
              alt=""
              fill
              aria-hidden="true"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="scale-125 object-cover opacity-70 saturate-150 blur-2xl"
            />
          ) : null}
        </motion.div>

        <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" />

        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative flex h-full flex-col justify-between p-6"
        >
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
              {project.label}
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 group-hover:bg-accent group-hover:text-accent-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <motion.div
            style={{ y: contentY }}
            className="project-glass rounded-[1.25rem] p-5"
          >
            <p className="text-xs font-medium text-white/70">
              {project.category}
            </p>

            <h3
              className="font-evolve mt-2 text-2xl font-medium tracking-[-0.02em] sm:text-[1.7rem]"
              style={{ color: "#fff1b5" }}
            >
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-xs leading-6 text-white/75">
              {project.summary}
            </p>
          </motion.div>
        </div>
      </motion.button>
    </motion.div>
  );
}
