import { apiClient } from '@/services/apiClient'
import type { Hotel, HotelFilters, Room } from './types'

export async function fetchHotels(
  destinationId: string,
  filters: HotelFilters = {}
): Promise<Hotel[]> {
  const { data } = await apiClient.get<Hotel[]>('/hotels', {
    params: { destinationId, ...filters },
  })
  return data
}

export async function fetchHotelById(hotelId: string): Promise<Hotel> {
  const { data } = await apiClient.get<Hotel>(`/hotels/${hotelId}`)
  return data
}

export async function fetchRoomsForHotel(hotelId: string): Promise<Room[]> {
  const { data } = await apiClient.get<Room[]>(`/hotels/${hotelId}/rooms`)
  return data
}
