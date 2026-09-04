import Link from "next/link";
import { ArrowRight, CalendarCheck, MessageSquareText, SearchX, TimerReset } from "lucide-react";

import { Container } from "@/components/common/container";

const problems = [
  { icon: SearchX, text: "Tus clientes no encuentran información clara sobre lo que ofrecés." },
  { icon: MessageSquareText, text: "Dependés de Instagram o repetís las mismas respuestas por WhatsApp." },
  { icon: TimerReset, text: "Coordinás consultas y turnos manualmente y perdés tiempo." },
  { icon: CalendarCheck, text: "Recibís consultas, pero no tenés un camino simple para convertirlas en clientes." },
];

export function Needs() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-foreground py-28 text-background sm:py-32">
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-primary/30 blur-[110px]" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#cdbda9]">El problema real</span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl">
              No es falta de interés. Es que cuesta encontrarte, entenderte o reservar con vos.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
              Estas son las cuatro cosas que más te están frenando ahora mismo. Diseñamos tu presencia digital para resolverlas, incluso cuando vos no estás conectado.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm">
                <Icon className="h-5 w-5 text-[#cdbda9]" />
                <p className="mt-5 text-sm leading-7 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-9 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/60">
            Contanos tu situación. Analizamos el problema y te proponemos una página, sistema o automatización adaptada a tu forma de trabajar.
          </p>
          <Link href="/agendar" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#f4eee7] px-7 py-4 text-sm font-semibold text-foreground hover:opacity-100">
            Agendar una reunión
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
