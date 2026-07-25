"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useQuote } from "@/context/QuoteContext";

export default function Hero() {
  const { openQuote } = useQuote();
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl font-semibold leading-[0.95] text-white"
          >
            Luxury Journeys.
            <br />
            Perfectly Curated.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-8 text-gray-200"
          >
            Corporate MICE • Destination Weddings • Domestic & International
            Tours • Visa Assistance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <button
              onClick={openQuote}
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F2747] transition hover:bg-[#caa22e]"
            >
              Get a Quote
            </button>

            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
        ↓
      </div>
    </section>
  );
}
