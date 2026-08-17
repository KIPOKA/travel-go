import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, Search, Wallet } from "lucide-react";
import { useDestinationSearch } from "../hooks/useDestinationSearch";
import { ROUTES } from "@/lib/constants";

type PriceRange = "any" | "under-500" | "500-1000" | "1000-plus";

const PRICE_OPTIONS: { value: PriceRange; label: string }[] = [
  { value: "any", label: "Any price" },
  { value: "under-500", label: "Under $500" },
  { value: "500-1000", label: "$500 – $1000" },
  { value: "1000-plus", label: "$1000+" },
];

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

    if (destinationId) {
      params.set("destination", destinationId);
    } else if (destinationQuery) {
      params.set("q", destinationQuery);
    }

    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (price !== "any") params.set("price", price);

    navigate(`${ROUTES.search}?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-5xl px-4">
      <div className="rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {/* Location */}
          <div className="relative min-w-0 flex-[1.5]">
            <div className="rounded-2xl px-5 py-4 transition hover:bg-slate-50 focus-within:bg-slate-50">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-600" />

                <div className="min-w-0 flex-1">
                  <label className="mb-1 block text-xs font-semibold text-slate-500">
                    Where
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
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 150)
                    }
                    placeholder="Search destinations"
                    className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:font-normal placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Suggestions */}
            {showSuggestions && destinationQuery.length > 1 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {isLoading && (
                  <div className="px-4 py-3 text-sm text-slate-400">
                    Searching destinations...
                  </div>
                )}

                {!isLoading && destinations?.length === 0 && (
                  <div className="px-4 py-3 text-sm text-slate-400">
                    No destinations found
                  </div>
                )}

                {destinations?.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onMouseDown={() => {
                      setDestinationId(d.id);
                      setDestinationQuery(`${d.city}, ${d.country}`);
                      setShowSuggestions(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {d.city}
                      </p>
                      <p className="text-xs text-slate-500">{d.country}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dates */}
          <div className="flex flex-[1.3] items-center border-t border-slate-100 lg:border-l lg:border-t-0">
            <div className="flex w-full items-center rounded-2xl px-5 py-4 transition hover:bg-slate-50 focus-within:bg-slate-50">
              <CalendarDays className="mr-3 h-5 w-5 shrink-0 text-blue-600" />

              <div className="grid min-w-0 flex-1 grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-500">
                    Check in
                  </label>

                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none [color-scheme:light]"
                  />
                </div>

                <div className="border-l border-slate-200 pl-4">
                  <label className="mb-1 block text-xs font-semibold text-slate-500">
                    Check out
                  </label>

                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || undefined}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none [color-scheme:light]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-1 items-center border-t border-slate-100 lg:border-l lg:border-t-0">
            <div className="flex w-full items-center rounded-2xl px-5 py-4 transition hover:bg-slate-50 focus-within:bg-slate-50">
              <Wallet className="mr-3 h-5 w-5 shrink-0 text-blue-600" />

              <div className="min-w-0 flex-1">
                <label className="mb-1 block text-xs font-semibold text-slate-500">
                  Budget
                </label>

                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value as PriceRange)}
                  className="w-full cursor-pointer bg-transparent text-sm font-semibold text-slate-900 outline-none"
                >
                  {PRICE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center p-1">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98] lg:h-full lg:w-auto lg:rounded-[20px]"
            >
              <Search className="h-5 w-5" />
              <span className="lg:hidden">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
