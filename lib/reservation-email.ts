import type { ReservationFormData } from "@/lib/reservation-data"

function formatDateNL(dateStr: string) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;color:#666;font-size:14px;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#181616;font-size:14px;font-weight:600;">${value}</td>
    </tr>
  `
}

export function buildRestaurantEmail(data: ReservationFormData) {
  const date = formatDateNL(data.date)

  return {
    subject: `Nieuwe reservering — ${data.name} (${data.guests} pers., ${date})`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f5f5f7;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:32px 16px;">
            <tr>
              <td align="center">
                <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
                  <tr>
                    <td style="background:#16a083;padding:28px 32px;">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;">Nieuwe reservering</h1>
                      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Merhaba Habesha Restaurant</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        ${row("Naam", data.name)}
                        ${row("E-mail", data.email)}
                        ${row("Telefoon", data.phone)}
                        ${row("Datum", date)}
                        ${row("Tijd", data.time)}
                        ${row("Personen", String(data.guests))}
                        ${row("Gelegenheid", data.occasion)}
                        ${row("Verzoeken", data.requests.trim() || "—")}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 32px 28px;">
                      <a href="tel:${data.phone.replace(/\s/g, "")}" style="display:inline-block;background:#16a083;color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:600;">
                        Bel klant
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  }
}

export function buildCustomerEmail(data: ReservationFormData) {
  const date = formatDateNL(data.date)

  return {
    subject: `Je reservering bij Merhaba Habesha — ${date}`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f5f5f7;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:32px 16px;">
            <tr>
              <td align="center">
                <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
                  <tr>
                    <td style="background:#16a083;padding:28px 32px;">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;">Reservering ontvangen</h1>
                      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Bedankt, ${data.name.split(" ")[0]}!</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px;">
                      <p style="margin:0 0 20px;color:#444;font-size:15px;line-height:1.6;">
                        We hebben je reservering ontvangen en nemen zo snel mogelijk contact met je op om te bevestigen.
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;border-radius:12px;padding:4px 16px;">
                        ${row("Datum", date)}
                        ${row("Tijd", data.time)}
                        ${row("Personen", String(data.guests))}
                        ${row("Gelegenheid", data.occasion)}
                      </table>
                      <p style="margin:24px 0 0;color:#666;font-size:13px;line-height:1.6;">
                        Brinklaan 18, 7311 LB Apeldoorn · +31 6 87180111
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  }
}
