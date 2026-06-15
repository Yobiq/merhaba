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
    const fromEmail = process.env.RESEND_FROM_EMAIL

    if (!restaurantEmail || !fromEmail) {
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

    const [restaurantResult, customerResult] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: restaurantEmail,
        replyTo: body.email,
        subject: restaurantMail.subject,
        html: restaurantMail.html,
      }),
      resend.emails.send({
        from: fromEmail,
        to: body.email,
        replyTo: restaurantEmail,
        subject: customerMail.subject,
        html: customerMail.html,
      }),
    ])

    if (restaurantResult.error) {
      console.error("Restaurant email error:", restaurantResult.error)
      return NextResponse.json(
        { error: "Kon de reservering niet versturen. Probeer het opnieuw of bel ons." },
        { status: 502 }
      )
    }

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
