"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

type Project = {
  title: string;
  category: string;
  label: string;
  href: string;
  images: string[];
  background: string;
  imagePosition?: string;
  bookingPreview?: boolean;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Turnia",
    category: "Sistema de turnos · Profesionales",
    label: "Sistema web",
    href: "/agendar",
    images: [],
    background: "bg-[#ddd0c1]",
    bookingPreview: true,
    featured: true,
  },
  {
    title: "La Piccola",
    category: "Aplicación móvil · Gastronomía",
    label: "Mobile App",
    href: "#contact",
    images: [
      "/projects/la-piccola/inicio-registro1.png",
      "/projects/la-piccola/branding.png",
    ],
    background: "bg-[#ead4c0]",
    imagePosition: "object-center",
  },
  {
    title: "Sonrisa Odonto",
    category: "Landing page · Salud",
    label: "Landing Page",
    href: "#contact",
    images: [
      "/projects/sonrisa/1.png",
      "/projects/sonrisa/servicios.png",
    ],
    background: "bg-[#eee9e2]",
    imagePosition: "object-top",
  },
  {
    title: "ArqStudio",
    category: "Sitio web · Arquitectura",
    label: "Portfolio",
    href: "#contact",
    images: [
      "/projects/arqstudio/home.png",
      "/projects/arqstudio/servicios.png",
    ],
    background: "bg-[#ded3c8]",
    imagePosition: "object-top",
  },
  {
    title: "Pipi Deco & Balloons",
    category: "Landing page · Eventos y decoración",
    label: "Landing Page",
    href: "#contact",
    images: ["/projects/pipi-balloons/home.png"],
    background: "bg-[#f3ded9]",
    imagePosition: "object-top",
  },
];

function ProjectOverlay({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 opacity-0 transition duration-500 group-hover:opacity-100 sm:p-5">
        <span className="rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {project.label}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow-lg">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
          {project.category}
        </span>
        <h3 className="mt-1.5 font-display text-xl font-medium leading-tight tracking-[-0.03em] text-white translate-y-1 transition duration-500 group-hover:translate-y-0 sm:text-2xl">
          {project.title}
        </h3>
      </div>
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Proyectos"
            title="Ideas transformadas en productos digitales concretos."
            description="Cada proyecto combina una necesidad real, una identidad visual clara y una solución pensada para crecer."
          />

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-semibold"
          >
            Empezar un proyecto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              aria-label={`Ver el proyecto ${project.title}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative block overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                project.featured
                  ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                  : "lg:col-span-2"
              }`}
            >
              <div className={`relative h-full min-h-[260px] overflow-hidden ${project.background}`}>
                {project.bookingPreview ? (
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                    <div className="w-full max-w-sm rounded-[1.5rem] border border-[#dfd5ca] bg-white p-5 shadow-2xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl sm:p-7">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                            Reserva online
                          </p>
                          <h4 className="mt-1.5 text-xl font-semibold">Elegí tu horario</h4>
                        </div>
                        <CalendarDays className="h-6 w-6 text-primary" />
                      </div>
                      <div className="mt-5 grid grid-cols-5 gap-1.5">
                        {["Lun", "Mar", "Mié", "Jue", "Vie"].map((day, dayIndex) => (
                          <div
                            key={day}
                            className={`rounded-lg py-2 text-center text-[10px] transition-colors duration-300 ${
                              dayIndex === 2
                                ? "bg-primary text-white"
                                : "bg-secondary group-hover:bg-primary/15"
                            }`}
                          >
                            <span className="block">{day}</span>
                            <strong className="mt-0.5 block text-xs">{18 + dayIndex}</strong>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-1.5">
                        {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"].map(
                          (slot, slotIndex) => (
                            <div
                              key={slot}
                              className={`rounded-lg border px-1.5 py-2 text-center text-[10px] font-semibold ${
                                slotIndex === 4
                                  ? "border-primary bg-primary text-white"
                                  : "border-border"
                              }`}
                            >
                              {slot}
                            </div>
                          ),
                        )}
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-xl bg-[#f7f2ec] p-3">
                        <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                          <Clock3 className="h-3.5 w-3.5" /> 30 minutos
                        </span>
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={project.images[0]}
                      alt={`Vista principal del proyecto ${project.title}`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                      className={`object-cover transition duration-700 ease-out group-hover:scale-110 ${
                        project.images.length > 1 ? "group-hover:opacity-0" : ""
                      } ${project.imagePosition ?? "object-center"}`}
                    />

                    {project.images[1] ? (
                      <Image
                        src={project.images[1]}
                        alt={`Vista secundaria del proyecto ${project.title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                        className={`object-cover opacity-0 transition duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 ${
                          project.imagePosition ?? "object-center"
                        }`}
                      />
                    ) : null}
                  </>
                )}

                <ProjectOverlay project={project} />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
