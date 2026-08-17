import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '@/hooks/useDebounce'
import { fetchDestinations } from '../api'

/** Debounced destination typeahead, backed by React Query for caching + loading state. */
export function useDestinationSearch(rawQuery: string) {
  const query = useDebounce(rawQuery, 300)

  return useQuery({
    queryKey: ['destinations', query],
    queryFn: () => fetchDestinations(query),
    enabled: query.trim().length > 1,
  })
}
