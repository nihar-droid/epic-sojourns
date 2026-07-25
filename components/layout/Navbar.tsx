"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {
  const { openQuote } = useQuote();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Gallery", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.jpeg"
            alt="Epic Sojourns"
            width={70}
            height={70}
          />

          <div>
            <h2
              className={`font-bold text-2xl transition-colors ${
                scrolled ? "text-[#0B2545]" : "text-white"
              }`}
            >
              Epic Sojourns
            </h2>

            <p
              className={`text-sm transition-colors ${
                scrolled ? "text-gray-500" : "text-white/80"
              }`}
            >
              Luxury Travel
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-10 text-lg">
          {links.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-[#D4AF37] duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button
          onClick={openQuote}
          className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#0F2747] transition hover:bg-[#caa22e]"
        >
          Get a Quote
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white px-6 py-6 shadow-xl">
          {links.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block py-3 text-lg"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
