import { NextRequest } from "next/server";

import {
  argentinaNow,
  getAvailableSlots,
  isWeekday,
  meetingTypes,
} from "@/lib/booking";
import { createSupabaseAdmin } from "@/lib/supabase-server";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const timePattern = /^\d{2}:\d{2}$/;

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") ?? "";
  const now = argentinaNow();

  if (!datePattern.test(date) || !isWeekday(date) || date < now.date) {
    return Response.json({ error: "La fecha seleccionada no está disponible." }, { status: 400 });
  }

  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("appointments")
      .select("appointment_time")
      .eq("appointment_date", date)
      .neq("status", "cancelled");

    if (error) throw error;

    const reserved = new Set(
      (data ?? []).map((item) => String(item.appointment_time).slice(0, 5)),
    );
    const slots = getAvailableSlots().filter(
      (slot) => !reserved.has(slot) && (date !== now.date || slot > now.time),
    );

    return Response.json({ slots });
  } catch (error) {
    console.error("Error loading appointments", error);
    return Response.json(
      { error: "No pudimos consultar los horarios. Intentá nuevamente." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const phone = String(body.phone ?? "").trim();
    const meetingType = String(body.meetingType ?? "").trim();
    const message = String(body.message ?? "").trim();
    const date = String(body.date ?? "");
    const time = String(body.time ?? "");
    const now = argentinaNow();

    const validSlot = getAvailableSlots().includes(time);
    const validMeetingType = meetingTypes.includes(
      meetingType as (typeof meetingTypes)[number],
    );

    if (
      name.length < 2 ||
      !email.includes("@") ||
      phone.length < 6 ||
      !validMeetingType ||
      !datePattern.test(date) ||
      !timePattern.test(time) ||
      !isWeekday(date) ||
      !validSlot ||
      date < now.date ||
      (date === now.date && time <= now.time)
    ) {
      return Response.json({ error: "Revisá los datos y el horario elegido." }, { status: 400 });
    }

    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from("appointments").insert({
      client_name: name,
      client_email: email,
      client_phone: phone,
      meeting_type: meetingType,
      message: message || null,
      appointment_date: date,
      appointment_time: time,
      duration_minutes: 30,
      status: "confirmed",
    });

    if (error?.code === "23505") {
      return Response.json(
        { error: "Ese horario acaba de reservarse. Elegí otro disponible." },
        { status: 409 },
      );
    }

    if (error) throw error;

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment", error);
    return Response.json(
      { error: "No pudimos registrar la reunión. Intentá nuevamente." },
      { status: 500 },
    );
  }
}

