import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { BookingDraft, GuestInfo } from './types'

interface BookingState {
  draft: Partial<BookingDraft>
  setSelection: (hotelId: string, roomId: string, checkIn: string, checkOut: string, guests: number) => void
  setGuestInfo: (info: GuestInfo) => void
  reset: () => void
}

/**
 * Holds in-progress booking state across the multi-step checkout flow
 * (room select -> guest info -> review -> confirm). Persisted so a page
 * refresh mid-checkout doesn't lose the draft.
 */
export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      draft: {},
      setSelection: (hotelId, roomId, checkIn, checkOut, guests) =>
        set((state) => ({ draft: { ...state.draft, hotelId, roomId, checkIn, checkOut, guests } })),
      setGuestInfo: (guestInfo) => set((state) => ({ draft: { ...state.draft, guestInfo } })),
      reset: () => set({ draft: {} }),
    }),
    { name: 'roam-booking-draft' }
  )
)
