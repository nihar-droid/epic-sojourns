import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  "Tailor-Made Luxury Itineraries",
  "Destination Wedding Specialists",
  "Corporate MICE Experts",
  "Hotel Consultancy",
  "24/7 Travel Support",
  "End-to-End Journey Management",
];

export default function WhyChoose() {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/about/about.jpg"
              alt="Luxury Travel"
              width={700}
              height={850}
              className="rounded-3xl object-cover shadow-2xl w-full h-162.5"
            />
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-medium mb-4">
              WHY CHOOSE EPIC SOJOURNS
            </p>

            <h2 className="font-serif text-5xl lg:text-6xl leading-tight text-[#0F2747] mb-8">
              Luxury Travel,
              <br />
              Personally Crafted.
            </h2>

            <p className="text-lg leading-9 text-slate-600 mb-10">
              Every journey we create is designed around your vision—not
              pre-made packages. Whether it&apos;s an unforgettable destination
              wedding, a premium corporate retreat, or a luxury vacation, our
              experienced team handles every detail with precision, allowing you
              to travel with complete peace of mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-[#D4AF37] mt-1 shrink-0"
                    size={22}
                  />
                  <span className="text-slate-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#D4AF37] hover:bg-[#C79D24] transition-all duration-300 text-[#0F2747] font-semibold px-8 py-4 rounded-full">
              Start Planning →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}