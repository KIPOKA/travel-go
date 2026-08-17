import {
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Globe2,
  Headphones,
  Heart,
  MapPin,
  MapPinned,
  Mountain,
  Palmtree,
  PawPrint,
  Play,
  Quote,
  ShieldCheck,
  Star,
  Waves,
} from "lucide-react";

import { HeroSearchBar } from "@/features/search/components/HeroSearchBar";
import { RotatingBadge } from "@/components/ui/RotatingBadge";
import { DestinationCard } from "@/features/hotels/components/DestinationCard";
/* =========================================================
   SOCIAL LINKS
========================================================= */

const SOCIAL_LINKS = [
  { label: "F", href: "#" },
  { label: "I", href: "#" },
  { label: "X", href: "#" },
];

/* =========================================================
   PARTNERS
========================================================= */

const PARTNERS = ["AeroWays", "Skypass", "Voyagex", "Nomad Stay"];

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    icon: Compass,
    title: "Handpicked stays",
    description:
      "Every hotel is carefully selected to make your trip feel special, comfortable, and memorable.",
  },
  {
    icon: ShieldCheck,
    title: "Best price guarantee",
    description:
      "Find it cheaper elsewhere within 24 hours and we will help make sure you get the best value.",
  },
  {
    icon: MapPinned,
    title: "Local expertise",
    description:
      "Discover recommendations from people who actually know the places you are travelling to.",
  },
  {
    icon: Headphones,
    title: "Support on the move",
    description:
      "A real person is here when you need help, whether you are planning or already travelling.",
  },
];

/* =========================================================
   EXPERIENCES
========================================================= */

const EXPERIENCES = [
  {
    icon: Mountain,
    label: "Mountain escapes",
    imageUrl: "https://picsum.photos/seed/roam-exp-mountain/500/500",
  },
  {
    icon: Waves,
    label: "Beach & coast",
    imageUrl: "https://picsum.photos/seed/roam-exp-beach/500/500",
  },
  {
    icon: PawPrint,
    label: "Safari & wildlife",
    imageUrl: "https://picsum.photos/seed/roam-exp-safari/500/500",
  },
  {
    icon: Building2,
    label: "City breaks",
    imageUrl: "https://picsum.photos/seed/roam-exp-city/500/500",
  },
  {
    icon: Palmtree,
    label: "Island hopping",
    imageUrl: "https://picsum.photos/seed/roam-exp-island/500/500",
  },
  {
    icon: Globe2,
    label: "Road trips",
    imageUrl: "https://picsum.photos/seed/roam-exp-roadtrip/500/500",
  },
];

/* =========================================================
   POPULAR DESTINATIONS
========================================================= */

const POPULAR_DESTINATIONS = [
  {
    name: "Swiss Alps",
    priceFrom: 460,
    rating: 4.8,
    imageUrl: "https://picsum.photos/seed/roam-swiss-alps/600/800",
  },
  {
    name: "Great Barrier",
    priceFrom: 640,
    rating: 4.9,
    imageUrl: "https://picsum.photos/seed/roam-great-barrier/600/800",
  },
  {
    name: "Venice Italy",
    priceFrom: 780,
    rating: 5.0,
    imageUrl: "https://picsum.photos/seed/roam-venice-italy/600/800",
  },
  {
    name: "Santorini",
    priceFrom: 990,
    rating: 4.9,
    imageUrl: "https://picsum.photos/seed/roam-santorini/600/800",
  },
];

/* =========================================================
   STATS
========================================================= */

const STATS = [
  {
    value: "48K+",
    label: "Travelers booked",
  },
  {
    value: "96",
    label: "Countries covered",
  },
  {
    value: "4.9/5",
    label: "Average traveler rating",
  },
  {
    value: "1,200+",
    label: "Handpicked stays",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const TESTIMONIALS = [
  {
    quote:
      "Booked a last-minute trip to Santorini and every detail Roam suggested — the hotel and ferry timing — actually held up.",
    name: "Priya Nair",
    trip: "Santorini, Greece",
  },
  {
    quote:
      "The local tips completely changed our Swiss Alps trip. We would have missed the best trailhead without them.",
    name: "Daniel Osei",
    trip: "Interlaken, Switzerland",
  },
  {
    quote:
      "Support picked up at 2am local time when our Venice hotel lost our booking. They rebooked us in ten minutes.",
    name: "Mei Lin Tan",
    trip: "Venice, Italy",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative mx-auto  max-w-7xl px-6 pt-20 pb-32 lg:pt-32 lg:pb-48">
        {/* Background decorations */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative z-10 ">
            {/* Eyebrow */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-primary">
                <Compass className="h-3.5 w-3.5" />
              </span>

              <span className="text-sm font-medium text-primary">
                Adventures, curated for you
              </span>
            </div>

            {/* Main heading */}

            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-primary sm:text-6xl md:text-7xl">
              Go find your
              <br />
              <span className="italic text-foreground">next great</span>
              <br />
              <span className="relative inline-block text-accent">
                adventure.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 320 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11C64 3 200 3 317 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-primary"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-lg text-base leading-7 text-secondary/75 md:text-lg">
              Mountains, coastlines, cities that never sit still — find the
              stay, book the trip, and let the adventure write itself.
            </p>

            {/* Search */}

            <div className="relative z-30 mt-9">
              <div className="rounded-[2rem] border border-white bg-white p-2 shadow-[0_25px_70px_rgba(18,55,42,0.12)]">
                <HeroSearchBar />
              </div>
            </div>

            {/* Social */}

            <div className="mt-8 flex items-center gap-3">
              <span className="mr-1 text-sm text-foreground/40">
                Follow the journey
              </span>

              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-primary/10
                    bg-white
                    text-xs font-semibold
                    text-primary
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-accent
                    hover:bg-accent
                    hover:text-foreground
                  "
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* Partners */}

            <div className="mt-12 border-t border-primary/10 pt-7">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/35">
                Travel with confidence
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {PARTNERS.map((partner) => (
                  <span
                    key={partner}
                    className="
                      text-sm font-semibold tracking-tight
                      text-primary/25
                      transition-colors
                      hover:text-primary/60
                    "
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE IMAGE COLLAGE
          ================================================== */}

          <div className="relative mx-auto h-[560px] w-full max-w-[600px] md:h-[650px]">
            {/* Background circle */}

            <div className="absolute right-0 top-10 h-[450px] w-[450px] rounded-full bg-secondary/15" />

            {/* Main image */}

            <div className="absolute right-0 top-0 h-[390px] w-[74%] overflow-hidden rounded-[2.75rem] shadow-[0_35px_90px_rgba(17,17,17,0.20)] md:h-[455px]">
              <img
                src="https://picsum.photos/seed/roam-hero-1/1000/1200"
                alt="Travelers exploring a dramatic coastal destination"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              {/* Image information */}

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65">
                    Trending escape
                  </p>

                  <p className="mt-1 text-xl font-semibold">Amalfi Coast</p>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-2 text-sm backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  4.9
                </div>
              </div>
            </div>

            {/* Secondary image */}

            <div className="absolute bottom-2 left-0 h-[300px] w-[57%] overflow-hidden rounded-[2.75rem] border-[7px] border-background shadow-[0_30px_70px_rgba(17,17,17,0.18)] md:h-[355px]">
              <img
                src="https://picsum.photos/seed/roam-hero-2/700/900"
                alt="Traveler overlooking the ocean"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-foreground/40">
                      Next stop
                    </p>

                    <p className="text-sm font-semibold text-primary">
                      From New York to Positano, Italy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating trip card */}

            <div
              className="
                absolute right-[-10px] top-[43%]
                w-56 rounded-[1.75rem]
                border border-white
                bg-white/95
                p-5
                shadow-[0_25px_60px_rgba(17,17,17,0.16)]
                backdrop-blur
                md:right-[-35px]
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-wider text-foreground/40">
                  Your next escape
                </span>

                <button
                  type="button"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    bg-accent-soft
                    text-primary
                    transition
                    hover:scale-110
                    hover:bg-accent
                  "
                  aria-label="Save trip"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5">
                <p className="text-lg font-semibold text-primary">Santorini</p>

                <p className="mt-1 text-xs text-foreground/40">
                  5 days · 4 nights
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">
                  From <span className="text-accent">$990</span>
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Rotating badge */}

            <div className="absolute left-[48%] top-[53%] z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full bg-background p-2 shadow-xl">
                <RotatingBadge text="DISCOVER · DREAM · GO ·" />
              </div>
            </div>

            {/* Play button */}

            <button
              type="button"
              className="
                absolute bottom-14 right-12
                flex h-16 w-16 items-center justify-center
                rounded-full
                bg-foreground
                text-white
                shadow-[0_15px_40px_rgba(17,17,17,0.30)]
                transition-all duration-300
                hover:scale-110
                hover:bg-primary
              "
              aria-label="See how it works"
            >
              <Play className="ml-1 h-5 w-5 fill-current" />
            </button>

            {/* Explore */}

            <a
              href="#experiences"
              className="
                absolute bottom-0 right-0
                flex items-center gap-2
                text-sm font-semibold
                text-primary
                transition-all
                hover:gap-3
                hover:text-accent
              "
            >
              Explore packages
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-white shadow-sm">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="border-y border-primary/10 bg-white/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="group">
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    bg-accent-soft
                    text-primary
                    transition
                    group-hover:bg-accent
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-4 font-semibold text-primary">
                  {feature.title}
                </p>

                <p className="mt-1.5 text-sm leading-6 text-foreground/55">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          EXPERIENCES
      ====================================================== */}

      <section id="experiences" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 max-w-lg">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent" />
            However you like to move
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary md:text-4xl">
            Browse by experience
          </h2>

          <p className="mt-3 text-sm leading-6 text-foreground/50">
            From quiet mountain mornings to unforgettable nights in the city,
            find the kind of trip that feels like you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {EXPERIENCES.map((experience) => {
            const Icon = experience.icon;

            return (
              <button
                key={experience.label}
                type="button"
                className="group text-left"
              >
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-primary">
                  <img
                    src={experience.imageUrl}
                    alt={experience.label}
                    className="
                      h-full w-full object-cover
                      transition duration-500
                      group-hover:scale-110
                    "
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">
                    {experience.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          POPULAR DESTINATIONS
      ====================================================== */}

      <section id="destinations" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Places worth the detour
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary md:text-4xl">
              Popular destinations
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-foreground/55">
              Handpicked for the trip you have been putting off booking.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-primary/10
                bg-white
                text-primary/50
                shadow-sm
                transition
                hover:border-primary/30
                hover:text-primary
              "
              aria-label="Previous destinations"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                bg-primary
                text-white
                shadow-lg
                shadow-primary/20
                transition
                hover:-translate-y-0.5
                hover:bg-foreground
              "
              aria-label="Next destinations"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_DESTINATIONS.map((destination) => (
            <div
              key={destination.name}
              className="
                transition-transform
                duration-300
                hover:-translate-y-2
              "
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 text-white md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 max-w-lg">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            From people who actually went
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary md:text-4xl">
            Traveler stories
          </h2>

          <p className="mt-3 text-sm leading-6 text-foreground/50">
            Real experiences from travelers who found their next adventure with
            Roam.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                rounded-[1.75rem]
                border border-primary/5
                bg-white
                p-7
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <Quote className="h-6 w-6 text-accent" />

              <p className="mt-5 text-sm leading-7 text-foreground/65">
                {testimonial.quote}
              </p>

              <div className="mt-6 border-t border-primary/10 pt-4">
                <p className="text-sm font-semibold text-primary">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-foreground/40">
                  {testimonial.trip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-primary px-8 py-12 text-white md:px-14 md:py-16">
          {/* Decorations */}

          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-secondary blur-3xl" />

          <div className="relative flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Your next chapter starts here
              </div>

              <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                Don&apos;t just dream about the trip.
                <br />
                <span className="text-accent">Go live it.</span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                Find a place that makes you want to pack your bags right now.
              </p>
            </div>

            <a
              href="#destinations"
              className="
                inline-flex w-fit items-center gap-3
                rounded-full
                bg-accent
                px-6 py-3.5
                text-sm font-semibold
                text-foreground
                shadow-lg
                transition
                hover:scale-105
                hover:bg-accent/90
              "
            >
              Start exploring
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-white">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-col gap-4 border-t border-primary/10 pt-6 text-xs text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Roam. Travel beautifully.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-primary">
              Privacy
            </a>

            <a href="#" className="transition hover:text-primary">
              Terms
            </a>

            <a href="#" className="transition hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
