"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";
import { projects, type Project } from "@/data/site";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="overflow-hidden py-24 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Proyectos"
            title="Un portfolio en constante crecimiento."
            description="Cada proyecto combina una necesidad real, una identidad visual propia y una solución pensada para escalar. Tocá una card para ver el detalle."
          />

          <a
            href="/agendar"
            className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-semibold"
          >
            Empezar un proyecto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
