"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { CalendarDays, CheckCircle2, LoaderCircle } from "lucide-react";

import { argentinaNow, meetingTypes } from "@/lib/booking";

type Status = "idle" | "loading" | "submitting" | "success" | "error";

export function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const minimumDate = argentinaNow().date;

  async function loadSlots(selectedDate: string) {
    setStatus("loading");
    setTime("");
    setError("");

    try {
      const response = await fetch(`/api/appointments?date=${selectedDate}`);
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error);
      setSlots(payload.slots);
      setStatus("idle");
    } catch (requestError) {
      setSlots([]);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "No pudimos consultar los horarios.",
      );
      setStatus("error");
    }
  }

  async function handleDateChange(value: string) {
    const selected = new Date(`${value}T12:00:00`);
    const day = selected.getDay();
    if (day === 0 || day === 6) {
      setDate("");
      setSlots([]);
      setError("Las reuniones se realizan de lunes a viernes.");
      setStatus("error");
      return;
    }
    setDate(value);
    await loadSlots(value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!date || !time) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");
    setError("");

    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        meetingType: formData.get("meetingType"),
        message: formData.get("message"),
        date,
        time,
      }),
    });
    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error || "No pudimos registrar la reunión.");
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center p-8 text-center sm:p-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"><CheckCircle2 className="h-8 w-8 text-primary" /></div>
        <h2 className="mt-7 font-display text-3xl font-medium tracking-[-0.05em]">¡Reunión confirmada!</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">Reservamos tu reunión para el {date.split("-").reverse().join("/")} a las {time}. Nos pondremos en contacto para enviarte el enlace.</p>
        <Link href="/" className="mt-8 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-7 sm:p-12">
      <div className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-primary" /><h2 className="text-lg font-semibold">Elegí fecha y horario</h2></div>

      <label className="mt-7 block space-y-2">
        <span className="text-sm font-medium">Fecha</span>
        <input required type="date" min={minimumDate} value={date} onChange={(event) => handleDateChange(event.target.value)} className="h-14 w-full rounded-2xl px-4 text-sm" />
      </label>

      {date ? (
        <div className="mt-6">
          <span className="text-sm font-medium">Horarios disponibles</span>
          {status === "loading" ? <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><LoaderCircle className="h-4 w-4 animate-spin" /> Consultando agenda...</div> : (
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {slots.map((slot) => <button key={slot} type="button" onClick={() => setTime(slot)} className={`rounded-xl border px-3 py-3 text-sm font-semibold ${time === slot ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"}`}>{slot}</button>)}
              {!slots.length ? <p className="col-span-full text-sm text-muted-foreground">No quedan horarios para este día.</p> : null}
            </div>
          )}
        </div>
      ) : null}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="space-y-2"><span className="text-sm font-medium">Nombre</span><input required name="name" minLength={2} className="h-14 w-full rounded-2xl px-4 text-sm" placeholder="Tu nombre" /></label>
        <label className="space-y-2"><span className="text-sm font-medium">Teléfono</span><input required name="phone" type="tel" minLength={6} className="h-14 w-full rounded-2xl px-4 text-sm" placeholder="11 0000 0000" /></label>
      </div>
      <label className="mt-5 block space-y-2"><span className="text-sm font-medium">Email</span><input required name="email" type="email" className="h-14 w-full rounded-2xl px-4 text-sm" placeholder="nombre@email.com" /></label>
      <label className="mt-5 block space-y-2"><span className="text-sm font-medium">¿Sobre qué querés conversar?</span><select required name="meetingType" defaultValue="" className="h-14 w-full rounded-2xl px-4 text-sm"><option value="" disabled>Seleccionar una opción</option>{meetingTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
      <label className="mt-5 block space-y-2"><span className="text-sm font-medium">Contanos brevemente tu necesidad</span><textarea name="message" rows={4} className="w-full resize-none rounded-2xl p-4 text-sm" placeholder="¿Qué te gustaría crear o mejorar?" /></label>

      {error ? <p role="alert" className="mt-5 rounded-2xl bg-red-50 p-4 text-sm text-red-700">{error}</p> : null}
      <button disabled={!date || !time || status === "submitting"} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-45">
        {status === "submitting" ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Reservando...</> : "Confirmar reunión de 30 minutos"}
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">Lunes a viernes · Horario de Argentina</p>
    </form>
  );
}
