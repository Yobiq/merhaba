import { NextResponse } from "next/server"
import { Resend } from "resend"
import { occasions } from "@/lib/reservation-data"
import {
  buildCustomerEmail,
  buildRestaurantEmail,
} from "@/lib/reservation-email"
import type { ReservationFormData } from "@/lib/reservation-data"

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  return new Resend(apiKey)
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateBody(body: unknown): body is ReservationFormData {
  if (!body || typeof body !== "object") return false

  const data = body as Record<string, unknown>

  return (
    typeof data.date === "string" &&
    data.date.length > 0 &&
    typeof data.time === "string" &&
    data.time.length > 0 &&
    typeof data.guests === "number" &&
    data.guests >= 1 &&
    data.guests <= 12 &&
    typeof data.name === "string" &&
    data.name.trim().length > 0 &&
    typeof data.email === "string" &&
    isValidEmail(data.email) &&
    typeof data.phone === "string" &&
    data.phone.trim().length > 0 &&
    typeof data.occasion === "string" &&
    occasions.includes(data.occasion as (typeof occasions)[number]) &&
    typeof data.requests === "string"
  )
}

function userFacingError(resendMessage: string) {
  if (resendMessage.includes("domain is not verified")) {
    return "E-mail domein is nog niet geverifieerd bij Resend. Neem contact op met het restaurant."
  }
  if (resendMessage.includes("only send testing emails")) {
    return "E-mail is nog in testmodus. Het restaurant moet het Resend-domein instellen."
  }
  return "Kon de reservering niet versturen. Probeer het opnieuw of bel ons."
}

export async function POST(request: Request) {
  try {
    const resend = getResend()

    if (!resend) {
      return NextResponse.json(
        { error: "E-mail service is niet geconfigureerd." },
        { status: 500 }
      )
    }

    const restaurantEmail = process.env.RESTAURANT_EMAIL
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "Merhaba Habesha <reserveringen@habesha-merhaba.nl>"

    if (!restaurantEmail) {
      return NextResponse.json(
        { error: "E-mail instellingen ontbreken." },
        { status: 500 }
      )
    }

    const body = await request.json()

    if (!validateBody(body)) {
      return NextResponse.json(
        { error: "Ongeldige reserveringsgegevens." },
        { status: 400 }
      )
    }

    const restaurantMail = buildRestaurantEmail(body)
    const customerMail = buildCustomerEmail(body)

    const restaurantResult = await resend.emails.send({
      from: fromEmail,
      to: restaurantEmail,
      replyTo: body.email,
      subject: restaurantMail.subject,
      html: restaurantMail.html,
    })

    if (restaurantResult.error) {
      console.error("Restaurant email error:", restaurantResult.error)
      const message = userFacingError(restaurantResult.error.message)
      return NextResponse.json(
        {
          error: message,
          ...(process.env.NODE_ENV === "development" && {
            detail: restaurantResult.error.message,
          }),
        },
        { status: 502 }
      )
    }

    const customerResult = await resend.emails.send({
      from: fromEmail,
      to: body.email,
      replyTo: restaurantEmail,
      subject: customerMail.subject,
      html: customerMail.html,
    })

    if (customerResult.error) {
      console.error("Customer email error:", customerResult.error)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Reservation API error:", error)
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het opnieuw." },
      { status: 500 }
    )
  }
}
