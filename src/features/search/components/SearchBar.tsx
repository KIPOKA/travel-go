import { useState } from 'react'
import { useDestinationSearch } from '../hooks/useDestinationSearch'

interface SearchBarProps {
  onSelect: (destinationId: string) => void
}

/**
 * Destination typeahead. Kept intentionally simple here — this is the
 * component to expand with keyboard navigation, recent searches, etc.
 * as described in the project plan.
 */
export function SearchBar({ onSelect }: SearchBarProps) {
  const [input, setInput] = useState('')
  const { data: destinations, isLoading } = useDestinationSearch(input)

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Where are you going?"
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />

      {input.length > 1 && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-lg">
          {isLoading && <li className="px-4 py-2 text-sm text-slate-400">Searching…</li>}
          {!isLoading && destinations?.length === 0 && (
            <li className="px-4 py-2 text-sm text-slate-400">No destinations found</li>
          )}
          {destinations?.map((d) => (
            <li key={d.id}>
              <button
                onClick={() => onSelect(d.id)}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-50"
              >
                {d.city}, {d.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
