# Roam — Hotel & Travel Discovery (Frontend)

React + Vite + TypeScript + Tailwind v4. Talks to a separate Node/Express + MySQL API (not included in this package yet).

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

Copy `.env.example` to `.env` if you need to point at a deployed API instead of the local dev proxy.

## Project structure

```
src/
├── components/
│   ├── ui/            # Design-system primitives: Button, Input, Card, Modal…
│   └── layout/         # Header, Footer — persistent chrome around every page
├── features/            # One folder per domain. Each is self-contained:
│   │                      types.ts, api.ts, hooks/, components/
│   ├── search/          # Destination typeahead
│   ├── hotels/          # Listing, filtering, hotel details, rooms
│   └── booking/         # Multi-step checkout, zustand draft store
├── hooks/               # Cross-feature hooks (useDebounce, etc.)
├── lib/                 # utils.ts, constants.ts — no React, no side effects
├── pages/                # One component per route, composed from feature pieces
├── routes/               # react-router config
├── services/             # apiClient.ts (axios), queryClient.ts (React Query)
└── types/                # Types shared across more than one feature
```

**Why feature-based:** search, hotels, and booking are distinct domains with
their own data shapes and API calls. Keeping each feature's types/api/hooks/
components together means you can open one folder and see everything about
that slice of the app, instead of hunting across global `hooks/`, `api/`,
`types/` folders. `pages/` stays thin — it just composes feature components
per the route.

**Where to build next**, in order:
1. `features/hotels` — listing + filters (`SearchResultsPage`)
2. `features/hotels` — details, gallery, room selection (`HotelDetailsPage`)
3. `features/booking` — multi-step checkout (`CheckoutPage`)
4. `components/ui` — extract a real design system as patterns repeat

## Stack

- **Routing:** react-router-dom (data router)
- **Server state:** @tanstack/react-query — caching, loading/error states, dedupe
- **Client state:** zustand — currently just the booking draft, persisted to
  localStorage so a mid-checkout refresh doesn't lose progress
- **Styling:** Tailwind v4 (CSS-first config in `src/index.css` via `@theme`)
- **HTTP:** axios, single instance in `services/apiClient.ts`
