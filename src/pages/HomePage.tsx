"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Globe2,
  Headphones,
  MapPin,
  MapPinned,
  Mountain,
  Palmtree,
  PawPrint,
  Quote,
  Plane,
  ShieldCheck,
  Star,
  Waves,
  Check,
} from "lucide-react";
import DestinationCard from "@/features/hotels/components/DestinationCard";

/* =========================================================
   SCROLL-BASED PLANE ANIMATION
========================================================= */

/* =========================================================
   CONSTANTS
========================================================= */

const SOCIAL_LINKS = [
  { label: "F", href: "#" },
  { label: "I", href: "#" },
  { label: "X", href: "#" },
];

const PARTNERS = ["AeroWays", "Skypass", "Voyagex", "Nomad Stay"];

const FEATURES = [
  {
    icon: Compass,
    title: "Discover",
    description: "Explore curated destinations handpicked just for you.",
    color: "from-blue-400/20 to-cyan-400/20",
    step: 1,
  },
  {
    icon: ShieldCheck,
    title: "Compare",
    description: "Best price guarantee backed by our 24-hour promise.",
    color: "from-green-400/20 to-emerald-400/20",
    step: 2,
  },
  {
    icon: MapPinned,
    title: "Connect",
    description: "Get local insights from experts who know these places.",
    color: "from-orange-400/20 to-amber-400/20",
    step: 3,
  },
  {
    icon: Headphones,
    title: "Support",
    description: "24/7 support from real people, not bots.",
    color: "from-purple-400/20 to-pink-400/20",
    step: 4,
  },
];

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

const STATS = [
  { value: "48K+", label: "Travelers booked" },
  { value: "96", label: "Countries covered" },
  { value: "4.9/5", label: "Average rating" },
  { value: "1,200+", label: "Handpicked stays" },
];

const TESTIMONIALS = [
  {
    quote:
      "Booked a last-minute trip to Santorini and every detail Travel Go suggested — the hotel and ferry timing — actually held up.",
    name: "Priya Nair",
    trip: "Santorini, Greece",
    initials: "PN",
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
  },
  {
    quote:
      "The local tips completely changed our Swiss Alps trip. We would have missed the best trailhead without them.",
    name: "Daniel Osei",
    trip: "Interlaken, Switzerland",
    initials: "DO",
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
  },
  {
    quote:
      "Support picked up at 2am local time when our Venice hotel lost our booking. They rebooked us in ten minutes.",
    name: "Mei Lin Tan",
    trip: "Venice, Italy",
    initials: "MT",
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
];

/* =========================================================
   HERO SECTION COMPONENT
========================================================= */

function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 pt-20 pb-32 lg:pt-32 lg:pb-48 min-h-screen flex items-center"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl transition-transform duration-300"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/40">
                <Compass className="h-3.5 w-3.5 text-cyan-200" />
              </span>
              <span className="text-sm font-semibold text-cyan-100">
                Start your journey
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
              Your next adventure
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                is waiting
              </span>
              <br />
              <span className="relative inline-block text-transparent bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text">
                to take off.
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 320 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11C64 3 200 3 317 10"
                    stroke="url(#grad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%">
                      <stop offset="0%" stopColor="#fed7aa" />
                      <stop offset="100%" stopColor="#fda4af" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-blue-100/75 md:text-lg">
              Scroll down to explore how Travel Go makes travel planning
              effortless. Watch as we guide you through every step of your
              journey.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm text-white/40">Connect with us</span>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-cyan-500/50 border border-white/20"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                Trusted by leading travel brands
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {PARTNERS.map((partner) => (
                  <span
                    key={partner}
                    className="text-sm font-bold text-white/30 transition-colors hover:text-white/60"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-[560px] w-full max-w-[600px] md:h-[650px]">
            <div className="absolute right-0 top-10 h-[450px] w-[450px] rounded-full bg-gradient-to-b from-cyan-500/20 to-blue-500/10 blur-2xl" />

            <div className="absolute right-0 top-0 h-[390px] w-[74%] overflow-hidden rounded-3xl shadow-2xl md:h-[455px] ring-1 ring-white/10">
              <img
                src="https://picsum.photos/seed/roam-hero-1/1000/1200"
                alt="Travelers exploring a dramatic coastal destination"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/65">
                    Trending escape
                  </p>
                  <p className="mt-1 text-2xl font-bold">Amalfi Coast</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-2 backdrop-blur-md">
                  <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  <span className="text-sm font-bold">4.9</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 left-0 h-[300px] w-[57%] overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl md:h-[355px]">
              <img
                src="https://picsum.photos/seed/roam-hero-2/700/900"
                alt="Traveler overlooking the ocean"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      Ready to explore
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Scroll to begin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   JOURNEY STEP CARD
========================================================= */

function JourneyStep({
  step,
  icon: Icon,
  title,
  description,
  details,
  image,
}: {
  step: number;
  icon: any;
  title: string;
  description: string;
  details: string[];
  image?: string;
}) {
  return (
    <div className="group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        {step % 2 === 0 && image && (
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <div className={step % 2 === 0 ? "order-1 lg:order-2" : ""}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="absolute h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-xl" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Icon className="h-8 w-8" />
            </div>
          </div>

          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30">
            <span className="text-sm font-bold text-cyan-600">Step {step}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {title}
          </h2>

          <p className="text-lg text-slate-600 mb-8">{description}</p>

          <div className="space-y-3">
            {details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-slate-700 font-medium">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {step % 2 === 1 && image && (
          <div className="order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/50">
      {/* Scroll-based plane animation */}

      {/* Hero */}
      <HeroSection />

      {/* Search Bar Section */}
      <section className="relative mx-auto max-w-7xl px-6 -mt-16 mb-24 z-10">
        <div className="rounded-2xl border border-white/20 bg-white shadow-2xl p-1 backdrop-blur-xl">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8 flex items-center gap-4">
            <MapPin className="h-5 w-5 text-cyan-600 flex-shrink-0" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="flex-1 bg-transparent text-lg font-semibold text-slate-900 placeholder:text-slate-400 outline-none"
            />
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Journey Section - Explaining the app */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-20">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 mb-3">
            <Plane className="h-4 w-4" />
            HOW IT WORKS
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Your journey in four simple steps
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            From inspiration to booking to arriving at your destination, we're
            with you every step of the way.
          </p>
        </div>

        <div className="space-y-8">
          <JourneyStep
            step={1}
            icon={Compass}
            title="Discover & Dream"
            description="Explore destinations handpicked by travel experts who know them inside and out."
            details={[
              "Browse 1,200+ curated properties across 96 countries",
              "Filter by experience type, budget, and travel dates",
              "Read authentic reviews from real travelers",
            ]}
            image="https://picsum.photos/seed/roam-discover/800/600"
          />

          <JourneyStep
            step={2}
            icon={ShieldCheck}
            title="Compare & Secure"
            description="We guarantee you the best price, backed by our industry-leading price match."
            details={[
              "See all prices transparently with no hidden fees",
              "24-hour price match guarantee on all bookings",
              "Flexible cancellation up to 7 days before arrival",
            ]}
            image="https://picsum.photos/seed/roam-compare/800/600"
          />

          <JourneyStep
            step={3}
            icon={MapPinned}
            title="Plan & Connect"
            description="Get insider tips from local experts and plan your perfect itinerary."
            details={[
              "Access personalized local recommendations",
              "Connect with travel guides in your destination",
              "Get real-time updates and local event information",
            ]}
            image="https://picsum.photos/seed/roam-plan/800/600"
          />

          <JourneyStep
            step={4}
            icon={Headphones}
            title="Travel & Support"
            description="Enjoy your trip with 24/7 support from real people who care."
            details={[
              "Instant support via chat, phone, or email",
              "Emergency assistance in 50+ languages",
              "Real-time booking modifications and updates",
            ]}
            image="https://picsum.photos/seed/roam-travel/800/600"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Why travelers choose Travel Go
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            We've obsessed over every detail to make travel planning effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 group-hover:from-cyan-400/40 group-hover:to-blue-600/40 transition-all">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <p className="mt-5 font-bold text-lg text-slate-900">
                    {feature.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 mb-3">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            EXPERIENCES
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Browse by your travel style
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {EXPERIENCES.map((experience) => {
            const Icon = experience.icon;
            return (
              <button
                key={experience.label}
                type="button"
                className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={experience.imageUrl}
                  alt={experience.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-start justify-between p-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg group-hover:bg-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-white">
                    {experience.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 mb-3">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              DESTINATIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Popular destinations
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white hover:border-cyan-400 hover:text-cyan-600 transition-all">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all hover:-translate-y-1">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((destination) => (
            <div key={destination.name}>
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 md:p-20 overflow-hidden relative">
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-semibold text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 mb-3">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            REAL STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Travelers' experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-2xl bg-white border-2 border-slate-100 p-8 hover:border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-5">
                <Quote className="h-6 w-6 text-cyan-500 opacity-60" />
              </div>

              <p className="text-sm leading-7 text-slate-700 font-medium mb-6">
                "{testimonial.quote}"
              </p>

              <div className="border-t-2 border-slate-100 pt-5 flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${testimonial.color}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 md:p-16 text-white">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4 bg-white/10 rounded-full px-3 py-1.5 backdrop-blur w-fit">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Ready for takeoff?
              </p>

              <h3 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Your adventure
                <br />
                <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
                  starts now.
                </span>
              </h3>

              <p className="text-base text-white/70">
                Book your next trip and experience travel like never before.
              </p>
            </div>

            <a
              href="#destinations"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-bold text-slate-900 shadow-2xl transition-all hover:scale-110 hover:shadow-3xl w-fit"
            >
              Start exploring
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-cyan-400">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-8 border-t border-slate-200">
        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">
            © {new Date().getFullYear()} Travel Go, travel beautifully.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-slate-900 transition font-semibold"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-slate-900 transition font-semibold"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-slate-900 transition font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;
