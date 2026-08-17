export interface Hotel {
  id: string
  name: string
  city: string
  starRating: number
  pricePerNight: number
  thumbnailUrl: string
  amenities: string[]
}

export interface HotelFilters {
  minPrice?: number
  maxPrice?: number
  minStarRating?: number
  amenities?: string[]
  sortBy?: 'price_asc' | 'price_desc' | 'rating'
}

export interface Room {
  id: string
  hotelId: string
  name: string
  pricePerNight: number
  maxGuests: number
  available: boolean
}
