"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Loader2,
  Mail,
  Minus,
  Phone,
  Plus,
  Sparkles,
  User,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  initialReservationData,
  occasions,
  reservationSteps,
  timeSlots,
  type ReservationFormData,
} from "@/lib/reservation-data"

function formatDateNL(dateStr: string) {
  if (!dateStr) return ""
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function StepProgress({ step }: { step: number }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between gap-2">
        {reservationSteps.map((s, idx) => {
          const done = step > s.id
          const active = step === s.id
          return (
            <div key={s.id} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "relative flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-500 sm:h-12 sm:w-12",
                    done && "border-primary bg-primary text-primary-foreground scale-100",
                    active && "border-primary bg-white text-primary scale-110 shadow-lg shadow-primary/20",
                    !done && !active && "border-border bg-white text-muted-foreground"
                  )}
                >
                  {done ? (
                    <Check className="h-5 w-5 animate-check-pop" />
                  ) : (
                    s.id
                  )}
                  {active && (
                    <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
                  )}
                </div>
                <span
                  className={cn(
                    "hidden text-center text-[0.65rem] font-medium uppercase tracking-wide sm:block sm:text-xs",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {s.label}
                </span>
                <span
                  className={cn(
                    "text-center text-[0.65rem] font-medium uppercase tracking-wide sm:hidden",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {s.short}
                </span>
              </div>
              {idx < reservationSteps.length - 1 && (
                <div className="mx-1 h-0.5 flex-1 overflow-hidden rounded-full bg-border sm:mx-2">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                    style={{ width: step > s.id ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StepPanel({
  step,
  current,
  children,
}: {
  step: number
  current: number
  children: React.ReactNode
}) {
  if (step !== current) return null
  return (
    <div key={step} className="animate-step-in">
      {children}
    </div>
  )
}

function SuccessScreen({ data }: { data: ReservationFormData }) {
  return (
    <div className="animate-step-in py-4 text-center sm:py-8">
      <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
        <span className="absolute inset-0 rounded-full bg-primary/10 animate-success-ring" />
        <span className="absolute inset-2 rounded-full bg-primary/20 animate-success-ring [animation-delay:150ms]" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 sm:h-24 sm:w-24">
          <Check className="h-10 w-10 animate-check-pop sm:h-12 sm:w-12" strokeWidth={2.5} />
        </div>
      </div>

      <div className="mb-2 flex items-center justify-center gap-2 text-primary">
        <Sparkles className="h-4 w-4 animate-pulse" />
        <p className="text-sm font-semibold uppercase tracking-widest">Gelukt!</p>
        <Sparkles className="h-4 w-4 animate-pulse" />
      </div>

      <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
        Bedankt, {data.name.split(" ")[0]}!
      </h2>
      <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground sm:text-base">
        Je reservering is verstuurd. We bevestigen zo snel mogelijk via{" "}
        <span className="font-medium text-foreground">{data.email}</span>.
      </p>

      <div className="mx-auto mb-8 max-w-md rounded-2xl border border-border bg-secondary/60 p-5 text-left sm:p-6">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          Reserveringsoverzicht
        </h3>
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-muted-foreground">Datum</dt>
            <dd className="mt-1 font-medium">{formatDateNL(data.date)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Tijd</dt>
            <dd className="mt-1 font-medium">{data.time}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Personen</dt>
            <dd className="mt-1 font-medium">{data.guests}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Gelegenheid</dt>
            <dd className="mt-1 font-medium">{data.occasion}</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary w-full sm:w-auto">
          Terug naar home
        </Link>
        <a href={`tel:+31687180111`} className="btn-primary w-full bg-foreground hover:bg-foreground/90 sm:w-auto">
          Bel ons direct
        </a>
      </div>
    </div>
  )
}

export function ReservationWizard() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState<"forward" | "back">("forward")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<ReservationFormData>(initialReservationData)

  const today = new Date().toISOString().split("T")[0]

  const update = <K extends keyof ReservationFormData>(field: K, value: ReservationFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const goTo = (next: number) => {
    setDirection(next > step ? "forward" : "back")
    setStep(next)
  }

  const canStep1 = Boolean(formData.date && formData.time && formData.guests >= 1)
  const canStep2 = Boolean(formData.name.trim() && formData.email.trim() && formData.phone.trim())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error ?? "Reservering mislukt.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reservering mislukt.")
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (submitted) window.scrollTo({ top: 0, behavior: "smooth" })
  }, [submitted])

  if (submitted) {
    return <SuccessScreen data={formData} />
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <StepProgress step={step} />

      <div
        className={cn(
          "min-h-[320px] transition-opacity duration-300",
          submitting && "pointer-events-none opacity-60"
        )}
      >
        <StepPanel step={1} current={step}>
          <div className="space-y-8">
            <div>
              <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                Kies een datum
              </label>
              <input
                type="date"
                min={today}
                value={formData.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full rounded-xl border border-border bg-white px-4 py-4 text-base shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                required
              />
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Kies een tijd
              </label>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => update("time", time)}
                    className={cn(
                      "rounded-xl border px-2 py-3 text-sm font-medium transition-all duration-300 active:scale-95",
                      formData.time === time
                        ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-[1.03]"
                        : "border-border bg-white text-foreground hover:border-primary/40 hover:bg-primary/5"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                Aantal personen
              </label>
              <div className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-sm">
                <button
                  type="button"
                  onClick={() => update("guests", Math.max(1, formData.guests - 1))}
                  disabled={formData.guests <= 1}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/5 disabled:opacity-30 active:scale-90"
                  aria-label="Minder personen"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="text-center">
                  <p
                    key={formData.guests}
                    className="text-4xl font-semibold text-primary animate-guest-bump"
                  >
                    {formData.guests}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formData.guests === 1 ? "persoon" : "personen"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => update("guests", Math.min(12, formData.guests + 1))}
                  disabled={formData.guests >= 12}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/5 disabled:opacity-30 active:scale-90"
                  aria-label="Meer personen"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Voor groepen van meer dan 8 personen, bel ons op{" "}
                <a href="tel:+31687180111" className="font-medium text-primary hover:underline">
                  +31 6 87180111
                </a>
              </p>
            </div>
          </div>
        </StepPanel>

        <StepPanel step={2} current={step}>
          <div className="space-y-6">
            <div>
              <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <User className="h-4 w-4 text-primary" />
                Volledige naam
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Je naam"
                className="w-full rounded-xl border border-border bg-white px-4 py-4 text-base shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                required
              />
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                E-mailadres
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="naam@voorbeeld.nl"
                className="w-full rounded-xl border border-border bg-white px-4 py-4 text-base shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                required
              />
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                Telefoonnummer
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+31 6 12345678"
                className="w-full rounded-xl border border-border bg-white px-4 py-4 text-base shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                required
              />
            </div>
          </div>
        </StepPanel>

        <StepPanel step={3} current={step}>
          <div className="space-y-6">
            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Gelegenheid (optioneel)
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {occasions.map((occasion) => (
                  <button
                    key={occasion}
                    type="button"
                    onClick={() => update("occasion", occasion)}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-300 active:scale-95",
                      formData.occasion === occasion
                        ? "border-primary bg-primary text-primary-foreground shadow-md"
                        : "border-border bg-white hover:border-primary/40 hover:bg-primary/5"
                    )}
                  >
                    {occasion}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Bijzondere verzoeken (optioneel)
              </label>
              <textarea
                value={formData.requests}
                onChange={(e) => update("requests", e.target.value)}
                placeholder="Allergieën, dieetwensen, zitplaatsvoorkeur..."
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-white px-4 py-4 text-base shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
              />
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Samenvatting
              </h3>
              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="flex justify-between gap-4 sm:flex-col sm:justify-start">
                  <dt className="text-muted-foreground">Datum</dt>
                  <dd className="font-medium">{formatDateNL(formData.date)}</dd>
                </div>
                <div className="flex justify-between gap-4 sm:flex-col sm:justify-start">
                  <dt className="text-muted-foreground">Tijd</dt>
                  <dd className="font-medium">{formData.time}</dd>
                </div>
                <div className="flex justify-between gap-4 sm:flex-col sm:justify-start">
                  <dt className="text-muted-foreground">Personen</dt>
                  <dd className="font-medium">{formData.guests}</dd>
                </div>
                <div className="flex justify-between gap-4 sm:flex-col sm:justify-start">
                  <dt className="text-muted-foreground">Naam</dt>
                  <dd className="font-medium">{formData.name}</dd>
                </div>
              </dl>
            </div>
          </div>
        </StepPanel>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:mt-10 sm:flex-row sm:justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-all hover:border-primary hover:bg-primary/5 active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug
          </button>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-all hover:border-primary hover:bg-primary/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Annuleren
          </Link>
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={() => goTo(step + 1)}
            disabled={(step === 1 && !canStep1) || (step === 2 && !canStep2)}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all active:scale-[0.98]",
              (step === 1 && canStep1) || (step === 2 && canStep2)
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-[#117964]"
                : "cursor-not-allowed bg-muted text-muted-foreground"
            )}
          >
            Volgende
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-[#117964] active:scale-[0.98] disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Bezig...
              </>
            ) : (
              <>
                Reservering bevestigen
                <Check className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>

      <p
        className={cn(
          "mt-4 text-center text-xs text-muted-foreground transition-opacity",
          direction === "forward" ? "opacity-100" : "opacity-80"
        )}
      >
        Stap {step} van {reservationSteps.length}
      </p>
    </form>
  )
}
