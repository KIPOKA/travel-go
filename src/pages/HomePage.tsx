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
  Plane,
} from "lucide-react";
import DestinationCard from "@/features/hotels/components/DestinationCard";

/* =========================================================
   ANIMATED FLYING PLANE
========================================================= */

function FloatingPlane({ delay = 0, duration = 20 }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <style>{`
        @keyframes flightPath {
          0% {
            left: -100px;
            top: 15%;
            transform: translateY(0) rotateZ(0deg) scale(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          50% {
            transform: translateY(-60px) rotateZ(15deg) scale(1.1);
          }
          95% {
            opacity: 1;
          }
          100% {
            left: 110%;
            top: 25%;
            transform: translateY(0) rotateZ(0deg) scale(1);
            opacity: 0;
          }
        }
        
        .plane-flight {
          animation: flightPath ${duration}s ease-in-out infinite;
          animation-delay: ${delay}s;
        }
      `}</style>
      <div className="plane-flight absolute">
        <Plane className="h-8 w-8 text-accent drop-shadow-lg" />
      </div>
    </div>
  );
}

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
    title: "Handpicked stays",
    description:
      "Every hotel is carefully selected to make your trip feel special, comfortable, and memorable.",
    color: "from-blue-400/20 to-cyan-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Best price guarantee",
    description:
      "Find it cheaper elsewhere within 24 hours and we will help make sure you get the best value.",
    color: "from-green-400/20 to-emerald-400/20",
  },
  {
    icon: MapPinned,
    title: "Local expertise",
    description:
      "Discover recommendations from people who actually know the places you are travelling to.",
    color: "from-orange-400/20 to-amber-400/20",
  },
  {
    icon: Headphones,
    title: "Support on the move",
    description:
      "A real person is here when you need help, whether you are planning or already travelling.",
    color: "from-purple-400/20 to-pink-400/20",
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
      "Booked a last-minute trip to Santorini and every detail Roam suggested — the hotel and ferry timing — actually held up.",
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
   DESTINATION CARD
========================================================= */

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
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 pt-20 pb-32 lg:pt-32 lg:pb-48"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient orbs */}
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

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/40">
                <Compass className="h-3.5 w-3.5 text-cyan-200" />
              </span>
              <span className="text-sm font-semibold text-cyan-100">
                Adventures await you
              </span>
            </div>

            {/* Main heading with dynamic gradient */}
            <h1 className="max-w-2xl text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
              Go find your
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                next great
              </span>
              <br />
              <span className="relative inline-block text-transparent bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text">
                adventure.
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

            {/* Description */}
            <p className="mt-8 max-w-lg text-base leading-7 text-blue-100/75 md:text-lg">
              Mountains, coastlines, cities that never sit still — find the
              stay, book the trip, and let the adventure write itself.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm text-white/40">Follow the journey</span>
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

            {/* Partners */}
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

          {/* RIGHT SIDE - IMAGE COLLAGE */}
          <div className="relative mx-auto h-[560px] w-full max-w-[600px] md:h-[650px]">
            <div className="absolute right-0 top-10 h-[450px] w-[450px] rounded-full bg-gradient-to-b from-cyan-500/20 to-blue-500/10 blur-2xl" />

            {/* Main image */}
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

            {/* Secondary image */}
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
                      Next stop
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Positano, Italy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating trip card */}
            <div className="absolute right-[-10px] top-[43%] w-56 rounded-2xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur md:right-[-35px] hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Your next escape
                </span>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white transition hover:scale-125 hover:shadow-lg"
                >
                  <Heart className="h-4 w-4 fill-current" />
                </button>
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-slate-900">Santorini</p>
                <p className="mt-1 text-xs text-slate-500">5 days · 4 nights</p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">
                  From{" "}
                  <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">
                    $990
                  </span>
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Play button */}
            <button
              type="button"
              className="absolute bottom-14 right-12 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-2xl transition-all duration-300 hover:scale-125 hover:shadow-3xl"
            >
              <Play className="ml-1 h-6 w-6 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50/50">
      {/* Flying planes - multiple animated planes */}
      <FloatingPlane delay={0} duration={25} />
      <FloatingPlane delay={8} duration={28} />
      <FloatingPlane delay={16} duration={30} />

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

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Why travelers choose Roam
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            We're obsessed with making travel effortless, safe, and
            unforgettable.
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
            HOWEVER YOU LIKE TO MOVE
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Browse by experience
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
              PLACES WORTH THE DETOUR
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
            FROM PEOPLE WHO ACTUALLY WENT
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Traveler stories
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
                Your next chapter starts here
              </p>

              <h3 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Don't just dream about the trip.
                <br />
                <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
                  Go live it.
                </span>
              </h3>

              <p className="text-base text-white/70">
                Find a place that makes you want to pack your bags right now.
                Your adventure is waiting.
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
            © {new Date().getFullYear()} Roam. Travel beautifully.
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
