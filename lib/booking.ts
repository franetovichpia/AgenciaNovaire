export const BOOKING_TIME_ZONE = "America/Argentina/Buenos_Aires";
export const BOOKING_START_HOUR = 9;
export const BOOKING_END_HOUR = 18;
export const BOOKING_DURATION_MINUTES = 30;

export const meetingTypes = [
  "Página web",
  "Sistema de gestión",
  "Tienda online",
  "Aplicación móvil",
  "Otro proyecto",
] as const;

export function getAvailableSlots() {
  const slots: string[] = [];

  for (
    let minutes = BOOKING_START_HOUR * 60;
    minutes < BOOKING_END_HOUR * 60;
    minutes += BOOKING_DURATION_MINUTES
  ) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
  }

  return slots;
}

export function isWeekday(date: string) {
  const parsed = new Date(`${date}T12:00:00-03:00`);
  const day = parsed.getDay();
  return !Number.isNaN(parsed.getTime()) && day >= 1 && day <= 5;
}

export function argentinaNow() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: BOOKING_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    date: `${value.year}-${value.month}-${value.day}`,
    time: `${value.hour}:${value.minute}`,
  };
}

