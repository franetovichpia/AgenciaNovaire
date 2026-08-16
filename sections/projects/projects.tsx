"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

type Project = {
  title: string;
  category: string;
  description: string;
  label: string;
  images: string[];
  background: string;
  imagePosition?: string;
  bookingPreview?: boolean;
};

const projects: Project[] = [
  {
    title: "Turnia",
    category: "Sistema de turnos · Profesionales",
    description:
      "Sistema de reservas con disponibilidad real, selección de fecha y hora, validación de turnos y registro seguro de clientes.",
    label: "Sistema web",
    images: [],
    background: "bg-[#ddd0c1]",
    bookingPreview: true,
  },
  {
    title: "La Piccola",
    category: "Aplicación móvil · Gastronomía",
    description:
      "Aplicación móvil para gestionar la experiencia de un restaurante, con acceso de usuarios, identidad visual y funcionalidades adaptadas al negocio.",
    label: "Mobile App",
    images: [
      "/projects/la-piccola/inicio-registro1.png",
    ],
    background: "bg-[#ead4c0]",
    imagePosition: "object-center",
  },
  {
    title: "Sonrisa Odonto",
    category: "Landing page · Salud",
    description:
      "Sitio web profesional para una clínica odontológica, diseñado para presentar servicios, transmitir confianza y generar nuevas consultas.",
    label: "Landing Page",
    images: [
      "/projects/sonrisa/1.png",
    ],
    background: "bg-[#eee9e2]",
    imagePosition: "object-top",
  },
  {
    title: "ArqStudio",
    category: "Sitio web · Arquitectura",
    description:
      "Experiencia editorial para un estudio de arquitectura, orientada a mostrar servicios, proyectos y una identidad visual sobria y profesional.",
    label: "Portfolio",
    images: [
      "/projects/arqstudio/home.png",
    ],
    background: "bg-[#ded3c8]",
    imagePosition: "object-top",
  },
];

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

        <div className="mt-16 space-y-10">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65 }}
                className="group overflow-hidden rounded-[2rem] border border-border bg-card"
              >
                <div
                  className={`grid lg:grid-cols-[1.25fr_0.75fr] ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`relative min-h-[420px] overflow-hidden p-5 sm:min-h-[540px] sm:p-8 ${project.background}`}
                  >
                    <div className="relative h-full min-h-[380px] overflow-hidden rounded-[1.5rem] border border-white/40 bg-white/20 shadow-2xl backdrop-blur-sm sm:min-h-[476px]">
                      {project.bookingPreview ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#f7f2ec] p-6 sm:p-12">
                          <div className="w-full max-w-md rounded-[1.75rem] border border-[#dfd5ca] bg-white p-6 shadow-2xl sm:p-8">
                            <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Reserva online</p><h4 className="mt-2 text-2xl font-semibold">Elegí tu horario</h4></div><CalendarDays className="h-7 w-7 text-primary" /></div>
                            <div className="mt-7 grid grid-cols-5 gap-2">{["Lun", "Mar", "Mié", "Jue", "Vie"].map((day, dayIndex) => <div key={day} className={`rounded-xl py-3 text-center text-xs ${dayIndex === 2 ? "bg-primary text-white" : "bg-secondary"}`}><span className="block">{day}</span><strong className="mt-1 block text-sm">{18 + dayIndex}</strong></div>)}</div>
                            <div className="mt-6 grid grid-cols-3 gap-2">{["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"].map((slot, slotIndex) => <div key={slot} className={`rounded-xl border px-2 py-3 text-center text-xs font-semibold ${slotIndex === 4 ? "border-primary bg-primary text-white" : "border-border"}`}>{slot}</div>)}</div>
                            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#f7f2ec] p-4"><span className="flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="h-4 w-4" /> 30 minutos</span><CheckCircle2 className="h-5 w-5 text-primary" /></div>
                          </div>
                        </div>
                      ) : (
                      <Image
                        src={project.images[0]}
                        alt={`Vista principal del proyecto ${project.title}`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className={`object-cover transition duration-700 group-hover:scale-[1.025] ${
                          project.imagePosition ?? "object-center"
                        }`}
                      />
                      )}

                      <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/45 to-transparent p-5 text-white">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                          Novaire project
                        </span>

                        <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs backdrop-blur-md">
                          {project.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        {project.category}
                      </span>

                      <h3 className="mt-5 font-display text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                        {project.title}
                      </h3>

                      <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
                        {project.description}
                      </p>

                      {project.images.length > 1 ? (
                        <div className="mt-9 grid grid-cols-2 gap-3">
                          {project.images.slice(1, 3).map((image, imageIndex) => (
                            <div
                              key={image}
                              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary"
                            >
                              <Image
                                src={image}
                                alt={`Vista ${imageIndex + 2} del proyecto ${
                                  project.title
                                }`}
                                fill
                                sizes="(max-width: 640px) 50vw, 220px"
                                className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
                                  project.imagePosition ?? "object-center"
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
                      <span className="text-sm text-muted-foreground">
                        Proyecto {String(index + 1).padStart(2, "0")}
                      </span>

                      <a
                        href={project.bookingPreview ? "/agendar" : "#contact"}
                        aria-label={`Consultar por un proyecto similar a ${project.title}`}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
