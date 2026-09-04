import { google } from "googleapis";

import { BOOKING_DURATION_MINUTES, BOOKING_TIME_ZONE } from "@/lib/booking";

type BookingDetails = {
  name: string;
  email: string;
  phone: string;
  meetingType: string;
  message: string;
  date: string;
  time: string;
};

export async function createCalendarEvent(booking: BookingDetails) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!clientEmail || !privateKey || !calendarId) {
    console.warn(
      "createCalendarEvent: credenciales de Google Calendar no configuradas, se omite la creación del evento.",
    );
    return;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const start = new Date(`${booking.date}T${booking.time}:00-03:00`);
  const end = new Date(start.getTime() + BOOKING_DURATION_MINUTES * 60 * 1000);

  await calendar.events.insert({
    calendarId,
    requestBody: {
      summary: `Reunión Novaire · ${booking.name}`,
      description: [
        `Motivo: ${booking.meetingType}`,
        `Email: ${booking.email}`,
        `Teléfono: ${booking.phone}`,
        booking.message ? `Mensaje: ${booking.message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
      start: { dateTime: start.toISOString(), timeZone: BOOKING_TIME_ZONE },
      end: { dateTime: end.toISOString(), timeZone: BOOKING_TIME_ZONE },
      attendees: [{ email: booking.email, displayName: booking.name }],
      guestsCanModify: false,
    },
    sendUpdates: "all",
  });
}
