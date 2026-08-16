import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, Video } from "lucide-react";

import { BookingForm } from "@/components/booking/booking-form";
import { Container } from "@/components/common/container";

export const metadata: Metadata = {
  title: "Agendar una reunión",
  description: "Reservá una reunión de 30 minutos con Novaire para conversar sobre tu proyecto digital.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen py-8 sm:py-12">
      <Container>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Volver a Novaire
        </Link>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft lg:grid lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="relative overflow-hidden bg-foreground p-8 text-white sm:p-12">
            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-primary/30 blur-[100px]" />
            <span className="relative text-sm font-semibold uppercase tracking-[0.22em] text-[#cdbda9]">Primera conversación</span>
            <h1 className="relative mt-5 font-display text-4xl font-medium leading-tight tracking-[-0.05em] text-white sm:text-5xl">Hablemos de tu proyecto.</h1>
            <p className="relative mt-6 text-sm leading-7 text-white/65">Elegí el día y el horario que te resulte más cómodo. La reunión es para conocernos, entender tu necesidad y orientarte sobre los próximos pasos.</p>

            <div className="relative mt-10 space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3 text-sm text-white/75"><Clock3 className="h-5 w-5 text-[#cdbda9]" /> 30 minutos</div>
              <div className="flex items-center gap-3 text-sm text-white/75"><Video className="h-5 w-5 text-[#cdbda9]" /> Reunión virtual</div>
            </div>
          </aside>
          <BookingForm />
        </div>
      </Container>
    </main>
  );
}

