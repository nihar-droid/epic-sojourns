"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function CTA() {
    const { openQuote } = useQuote();
  return (
    <section className="py-24 bg-[#0F2747]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[36px] bg-[#D4AF37] px-10 py-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.35em] text-[#0F2747] text-sm font-semibold mb-4">
              LET&apos;S PLAN YOUR NEXT JOURNEY
            </p>

            <h2 className="font-serif text-5xl lg:text-6xl text-[#0F2747] leading-tight mb-6">
              Your Next
              <br />
              Extraordinary Journey
              <br />
              Starts Here.
            </h2>

            <p className="text-[#0F2747]/80 text-lg leading-8">
              Whether it&apos;s a luxury holiday, destination wedding, corporate
              event or international getaway, Epic Sojourns is ready to create
              an unforgettable experience tailored just for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">

            <button
  onClick={openQuote}
              className="bg-[#0F2747] hover:bg-[#09192d] text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight size={18} />
            </button>

            <Link
              href="/services"
              className="border-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Explore Services
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}