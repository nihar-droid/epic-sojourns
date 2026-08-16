import {
  BriefcaseBusiness,
  Heart,
  Plane,
  Globe,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Corporate MICE",
    desc: "...",
    image: "/images/Services/MICE.jpg",
  },
  {
    title: "Destination Weddings",
    desc: "...",
    image: "/images/Services/wedding.jpg",
  },
  {
    title: "Domestic & International Tours",
    desc: "...",
    image: "/images/Services/Tours.jpg",
  },
  {
    title: "Hotel Consultancy",
    desc: "...",
    image: "/images/Services/hotel.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
            WHAT WE OFFER
          </p>

          <h2 className="text-5xl md:text-6xl mt-4">Crafted Experiences</h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every journey is carefully designed to deliver memorable
            experiences, exceptional hospitality and complete peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group rounded-[30px] overflow-hidden bg-white shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-10">
                  <h3 className="text-2xl font-semibold text-[#0B2545]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-8">{service.desc}</p>

                  <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B2545] transition-all group-hover:gap-4 group-hover:text-[#D4AF37]">
                    Discover More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
