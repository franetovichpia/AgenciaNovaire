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
    title: "Landing pages",
    description:
      "Una página profesional que presenta tu negocio, genera confianza a primera vista y convierte visitas en consultas reales, con tu marca y un camino claro para contactarte.",
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
    title: "Sistemas de gestión",
    description:
      "Un panel privado para organizar tu operación diaria: clientes, ventas, turnos o stock en un solo lugar, sin planillas sueltas ni procesos manuales.",
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
    title: "E-commerce",
    description:
      "Tu tienda online lista para vender: catálogo de productos, carrito de compras, cobros integrados y un panel simple para administrar pedidos y stock.",
    icon: ShoppingBag,
    features: ["Catálogo de productos", "Carrito y checkout", "Medios de pago", "Panel de administración"],
  },
  {
    number: "04",
    title: "Aplicaciones móviles",
    description:
      "Una app para Android o instalable como PWA, conectada a la nube, con notificaciones y funciones a medida de tu negocio, sin depender de una tienda de aplicaciones.",
    icon: Smartphone,
    features: ["App para Android", "Instalable como PWA", "Notificaciones push", "Datos en la nube"],
  },
  {
    number: "05",
    title: "Diseño digital",
    description:
      "Definimos cómo se ve y se siente tu marca en digital: pantallas, flujos de uso y una identidad visual coherente antes de escribir una línea de código.",
    icon: Palette,
    features: ["Interfaces UI/UX", "Wireframes", "Prototipos interactivos", "Identidad de marca"],
  },
  {
    number: "06",
    title: "Automatizaciones",
    description:
      "Conectamos tus herramientas para que las tareas repetitivas se hagan solas: avisos, mails, carga de datos y procesos que hoy hacés a mano.",
    icon: Workflow,
    features: ["Envío de emails", "Alertas automáticas", "Formularios conectados", "Procesos internos"],
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
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Nuestros servicios
            </span>

            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Soluciones digitales para cada etapa de{" "}
              <span className="italic text-accent">un negocio.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-white/65">
              Diseñamos y desarrollamos productos pensados para comunicar,
              vender, organizar y simplificar procesos.
            </p>

            <div className="relative mt-8 hidden aspect-[16/10] overflow-hidden rounded-[1.75rem] lg:block">
              <Image
                src="/brand/hojas.jpg"
                alt=""
                fill
                sizes="32vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16231b]/70 to-transparent" />
            </div>
          </div>

          <div className="border-t border-white/15">
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
                        isOpen ? "text-white" : "text-white/55 group-hover:text-white/80"
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
          </div>
        </div>
      </Container>
    </section>
  );
}
