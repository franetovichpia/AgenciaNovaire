# Configurar avisos de reservas (email + Google Calendar)

Cuando alguien agenda una reunión desde `/agendar`, ya se guarda en Supabase.
Con estas variables de entorno, además:

- llega un email a la agencia con los datos del cliente, y/o
- se crea el evento directo en un Google Calendar.

Las dos son independientes: podés activar una, la otra, o ambas. Si faltan
las variables de una, esa parte simplemente no se ejecuta (la reserva se
sigue guardando igual).

## 1. Email por Gmail (recomendado, 5 minutos)

1. Entrá a la cuenta de Gmail que va a enviar los avisos (por ejemplo
   `agencianovaire@gmail.com`) y activá la verificación en 2 pasos:
   https://myaccount.google.com/security
2. Generá una "Contraseña de aplicación":
   https://myaccount.google.com/apppasswords
   (elegí "Otra", ponele un nombre como "Novaire web" y copiá el código de 16
   caracteres).
3. En Vercel (o en tu `.env.local` para probar local), agregá:
   ```
   GMAIL_USER=agencianovaire@gmail.com
   GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
   BOOKING_NOTIFICATION_EMAIL=agencianovaire@gmail.com
   ```
   `BOOKING_NOTIFICATION_EMAIL` es opcional: si no lo ponés, el aviso llega al
   mismo `GMAIL_USER`.

## 2. Evento directo en Google Calendar (opcional)

1. Creá un proyecto en Google Cloud Console: https://console.cloud.google.com
2. Habilitá la "Google Calendar API" para ese proyecto.
3. Creá una cuenta de servicio (Service Account) y generá una clave JSON.
4. Del JSON descargado, vas a necesitar dos valores:
   - `client_email`
   - `private_key`
5. Abrí Google Calendar en la cuenta donde querés que aparezcan las
   reuniones, entrá a "Configuración y uso compartido" del calendario y
   compartilo con el `client_email` de la cuenta de servicio, con permiso
   "Realizar cambios en los eventos".
6. Copiá el "ID de calendario" (en esa misma configuración, sección
   "Integrar calendario").
7. Agregá en Vercel:
   ```
   GOOGLE_SERVICE_ACCOUNT_EMAIL=nombre@proyecto.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_CALENDAR_ID=agencianovaire@gmail.com
   ```
   Importante: `GOOGLE_PRIVATE_KEY` tiene que llevar los `\n` literales (no
   saltos de línea reales) si lo pegás en el panel de variables de Vercel.

Después de agregar las variables, hacé un redeploy en Vercel para que tomen
efecto.
