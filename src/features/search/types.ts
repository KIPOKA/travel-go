export interface Destination {
  id: string
  city: string
  country: string
  imageUrl: string
}

export interface SearchParams {
  destinationId: string
  checkIn: string // ISO date, e.g. "2026-09-14"
  checkOut: string // ISO date
  guests: number
  rooms: number
}
