"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  Code2,
  LayoutDashboard,
  Palette,
  ShoppingBag,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Páginas web profesionales",
    description:
      "Sitios web para profesionales, estudios y empresas, adaptados a celulares y orientados a generar consultas, con tu marca y un camino claro para contactarte.",
    icon: Code2,
    features: [
      "Diseño a medida",
      "Optimizada para celular",
      "Botón de WhatsApp",
      "Formulario de contacto",
    ],
  },
  {
    number: "02",
    title: "Sistemas de gestión a medida",
    description:
      "Herramientas para organizar clientes, ventas, turnos, stock y procesos internos en un solo lugar, sin planillas sueltas ni tareas manuales.",
    icon: LayoutDashboard,
    features: [
      "Panel de control",
      "Gestión de usuarios",
      "Reportes y métricas",
      "Tareas automáticas",
    ],
  },
  {
    number: "03",
    title: "Tiendas online y e-commerce",
    description:
      "Catálogos, pagos, pedidos y administración de productos en una tienda online lista para vender, con un panel simple para gestionarla.",
    icon: ShoppingBag,
    features: [
      "Catálogo de productos",
      "Carrito y checkout",
      "Medios de pago",
      "Panel de administración",
    ],
  },
  {
    number: "04",
    title: "Aplicaciones móviles",
    description:
      "Aplicaciones y soluciones web adaptadas a las necesidades de cada negocio: para Android o instalables como PWA, con notificaciones y datos en la nube.",
    icon: Smartphone,
    features: [
      "App para Android",
      "Instalable como PWA",
      "Notificaciones push",
      "Datos en la nube",
    ],
  },
  {
    number: "05",
    title: "Diseño UI/UX e interfaces digitales",
    description:
      "Diseño de experiencias, interfaces y prototipos para productos digitales, con una identidad visual coherente antes de escribir una línea de código.",
    icon: Palette,
    features: [
      "Interfaces UI/UX",
      "Wireframes",
      "Prototipos interactivos",
      "Identidad de marca",
    ],
  },
  {
    number: "06",
    title: "Automatización de procesos",
    description:
      "Integraciones entre herramientas, notificaciones y tareas repetitivas automatizadas: avisos, mails y carga de datos que hoy hacés a mano.",
    icon: Workflow,
    features: [
      "Envío de emails",
      "Alertas automáticas",
      "Formularios conectados",
      "Procesos internos",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#16231b] py-16 text-[#f3efe8] sm:py-24"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[auto_1.15fr_0.7fr] lg:gap-12">
          <Reveal direction="left" className="flex items-end gap-5 lg:block">
            <h2 className="font-impact text-6xl leading-none text-accent sm:text-7xl vertical-word-lg lg:text-[8rem]">
              Servicios
            </h2>

            <p className="max-w-[16rem] pb-1 text-sm leading-7 text-white/65 lg:hidden">
              Productos digitales pensados para comunicar, vender, organizar y
              simplificar procesos.
            </p>
          </Reveal>

          <Reveal className="border-t border-white/15">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = active === index;

              return (
                <div key={service.title} className="border-b border-white/15">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className="group flex w-full items-center gap-5 py-6 text-left sm:gap-8"
                  >
                    <span
                      className={`w-8 text-sm transition-colors ${
                        isOpen ? "text-accent" : "text-white/40"
                      }`}
                    >
                      {service.number}
                    </span>

                    <h3
                      className={`flex-1 font-display text-2xl font-medium tracking-[-0.03em] transition-colors sm:text-3xl ${
                        isOpen
                          ? "text-white"
                          : "text-white/55 group-hover:text-white/80"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen
                          ? "border-accent bg-accent text-[#16231b]"
                          : "border-white/25 text-white/60"
                      }`}
                    >
                      {isOpen ? (
                        <Icon className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-[3.25rem] sm:pl-[4rem]">
                          <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                            {service.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="rounded-full border border-accent/40 px-3.5 py-1.5 text-xs font-medium text-accent"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>

          <Reveal
            direction="right"
            delay={0.15}
            className="hidden lg:block lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm leading-7 text-white/65">
              Productos digitales pensados para comunicar, vender, organizar y
              simplificar procesos.
            </p>

            <div className="relative mt-6 h-[22rem]">
              <div className="absolute left-0 top-0 h-56 w-40 -rotate-3 overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src="/brand/hojas.jpg"
                  alt=""
                  fill
                  sizes="12vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-60 w-40 rotate-3 overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src="/brand/ambiente.jpg"
                  alt=""
                  fill
                  sizes="12vw"
                  className="object-cover object-[75%_60%]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
