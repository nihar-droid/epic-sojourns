import Image from "next/image";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] font-medium mb-4">
            Explore The World
          </p>

          <h2 className="text-5xl lg:text-6xl font-serif text-[#0F2343] mb-6">
            Moments Worth Living
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-9">
            Every destination tells a story. Here are a few unforgettable
            experiences we&apos;ve helped create.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl group cursor-pointer shadow-xl"
            >
              <Image
                src={img}
                alt=""
                width={600}
                height={700}
                className="h-105 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-white/80 mb-2">
                    Epic Sojourns
                  </p>

                  <h3 className="text-white text-3xl font-serif">
                    Luxury Experiences
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
