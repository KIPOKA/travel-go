import { apiClient } from '@/services/apiClient'
import type { Destination } from './types'

export async function fetchDestinations(query: string): Promise<Destination[]> {
  if (!query.trim()) return []
  const { data } = await apiClient.get<Destination[]>('/destinations', {
    params: { q: query },
  })
  return data
}
