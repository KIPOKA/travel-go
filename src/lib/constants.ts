export const APP_NAME = 'Roam'

export const ROUTES = {
  home: '/',
  search: '/search',
  hotel: (id: string = ':hotelId') => `/hotels/${id}`,
  checkout: (id: string = ':hotelId') => `/hotels/${id}/checkout`,
  confirmation: (bookingId: string = ':bookingId') => `/bookings/${bookingId}/confirmation`,
} as const
