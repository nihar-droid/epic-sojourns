import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Bali",
    image: "/images/destinations/bali.jpg",
  },
  {
    title: "Dubai",
    image: "/images/destinations/dubai.jpg",
  },
  {
    title: "Switzerland",
    image: "/images/destinations/switzerland.jpg",
  },
  {
    title: "Thailand",
    image: "/images/destinations/thailand.jpg",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="POPULAR DESTINATIONS"
          title="Explore The World"
          description="From tropical beaches to iconic cities, discover destinations curated for unforgettable experiences."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {destinations.map((place) => (
            <div
              key={place.title}
              className="group overflow-hidden rounded-[30px] shadow-lg cursor-pointer"
            >
              <div className="relative h-105">

                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">

                  <h3 className="text-3xl font-semibold">
                    {place.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition">

                    <span>Explore</span>

                    <ArrowRight size={18} />

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}