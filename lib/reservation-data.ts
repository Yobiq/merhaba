export const reservationSteps = [
  { id: 1, label: "Datum & tijd", short: "Wanneer" },
  { id: 2, label: "Jouw gegevens", short: "Contact" },
  { id: 3, label: "Bevestigen", short: "Klaar" },
] as const

export const timeSlots = [
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
  "23:00", "23:30",
]

export const occasions = [
  "Geen",
  "Verjaardag",
  "Jubileum",
  "Zakendiner",
  "Romantisch diner",
  "Familiebijeenkomst",
  "Anders",
] as const

export type Occasion = (typeof occasions)[number]

export interface ReservationFormData {
  date: string
  time: string
  guests: number
  name: string
  email: string
  phone: string
  occasion: Occasion
  requests: string
}

export const initialReservationData: ReservationFormData = {
  date: "",
  time: "",
  guests: 2,
  name: "",
  email: "",
  phone: "",
  occasion: "Geen",
  requests: "",
}
