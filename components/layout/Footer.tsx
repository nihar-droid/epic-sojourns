import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081A2F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          <div>
            <h2 className="font-serif text-4xl mb-4">
              Epic Sojourns
            </h2>

            <p className="text-slate-300 leading-8">
              Curating unforgettable luxury journeys, destination weddings,
              corporate events and premium travel experiences across the globe.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Corporate MICE</li>
              <li>Destination Weddings</li>
              <li>International Tours</li>
              <li>Visa Assistance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>📞 +91 84273 72222</li>
              <li>✉️ info@epicsojourns.com</li>
              <li>📍 India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-slate-400">
          © {new Date().getFullYear()} Epic Sojourns. All rights reserved.
        </div>

      </div>
    </footer>
  );
}