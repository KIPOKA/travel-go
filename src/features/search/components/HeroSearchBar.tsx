import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useDestinationSearch } from "../hooks/useDestinationSearch";
import { ROUTES } from "@/lib/constants";

type PriceRange = "any" | "under-500" | "500-1000" | "1000-plus";

const PRICE_OPTIONS: { value: PriceRange; label: string }[] = [
  { value: "any", label: "Any price" },
  { value: "under-500", label: "Under $500" },
  { value: "500-1000", label: "$500 – $1000" },
  { value: "1000-plus", label: "$1000+" },
];

/**
 * The pill-shaped hero search bar: destination autocomplete (reuses the same
 * debounced search hook as the SearchBar component), a date range, and a
 * price filter, all rolled into one query on submit.
 */
export function HeroSearchBar() {
  const navigate = useNavigate();
  const [destinationQuery, setDestinationQuery] = useState("");
  const [destinationId, setDestinationId] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [price, setPrice] = useState<PriceRange>("any");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { data: destinations, isLoading } =
    useDestinationSearch(destinationQuery);

  function handleSubmit() {
    const params = new URLSearchParams();
    if (destinationId) params.set("destination", destinationId);
    else if (destinationQuery) params.set("q", destinationQuery);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (price !== "any") params.set("price", price);
    navigate(`${ROUTES.search}?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/60 md:rounded-full">
      <div className="flex flex-col divide-y divide-slate-100 md:flex-row md:items-center md:divide-x md:divide-y-0">
        {/* Location */}
        <div className="relative flex-1 px-4 py-2.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Location
          </label>
          <input
            type="text"
            value={destinationQuery}
            onChange={(e) => {
              setDestinationQuery(e.target.value);
              setDestinationId(null);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            placeholder="Where to?"
            className="w-full text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
          />

          {showSuggestions && destinationQuery.length > 1 && (
            <ul className="absolute left-0 right-0 top-full z-10 mt-2 max-h-64 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg">
              {isLoading && (
                <li className="px-4 py-2 text-sm text-slate-400">Searching…</li>
              )}
              {!isLoading && destinations?.length === 0 && (
                <li className="px-4 py-2 text-sm text-slate-400">
                  No destinations found
                </li>
              )}
              {destinations?.map((d) => (
                <li key={d.id}>
                  <button
                    type="button"
                    onMouseDown={() => {
                      setDestinationId(d.id);
                      setDestinationQuery(`${d.city}, ${d.country}`);
                      setShowSuggestions(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-50"
                  >
                    {d.city}, {d.country}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dates */}
        <div className="flex-1 px-4 py-2.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Date
          </label>
          <div className="flex items-center gap-1.5">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm font-medium text-slate-900 outline-none [color-scheme:light]"
            />
            <span className="text-slate-300">–</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm font-medium text-slate-900 outline-none [color-scheme:light]"
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex-1 px-4 py-2.5">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Price
          </label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value as PriceRange)}
            className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
          >
            {PRICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="mx-2 my-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
