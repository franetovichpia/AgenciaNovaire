type BookingDetails = {
  name: string;
  email: string;
  phone: string;
  meetingType: string;
  message: string;
  date: string;
  time: string;
};

function formatDate(date: string) {
  return date.split("-").reverse().join("/");
}

export async function sendBookingEmail(booking: BookingDetails) {
  const user = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  const notifyTo = process.env.BOOKING_NOTIFICATION_EMAIL || user;

  if (!user || !appPassword) {
    console.warn(
      "sendBookingEmail: GMAIL_USER/GMAIL_APP_PASSWORD no configurados, se omite el envío.",
    );
    return;
  }

  const { default: nodemailer } = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: appPassword },
  });

  const subject = `Nueva reunión: ${booking.name} · ${formatDate(booking.date)} ${booking.time}`;
  const text = [
    `Nueva reunión agendada desde novaire.`,
    ``,
    `Nombre: ${booking.name}`,
    `Email: ${booking.email}`,
    `Teléfono: ${booking.phone}`,
    `Motivo: ${booking.meetingType}`,
    `Fecha: ${formatDate(booking.date)}`,
    `Hora: ${booking.time} (Argentina)`,
    booking.message ? `Mensaje: ${booking.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    from: `Novaire <${user}>`,
    to: notifyTo,
    replyTo: booking.email,
    subject,
    text,
  });
}
