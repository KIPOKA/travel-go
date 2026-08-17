export interface GuestInfo {
  fullName: string
  email: string
  phone: string
}

export interface BookingDraft {
  hotelId: string
  roomId: string
  checkIn: string
  checkOut: string
  guests: number
  guestInfo: GuestInfo | null
}

export interface Booking extends BookingDraft {
  id: string
  status: 'pending' | 'confirmed' | 'cancelled'
  totalPrice: number
  createdAt: string
}
