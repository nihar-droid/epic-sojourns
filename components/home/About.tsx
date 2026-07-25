import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#faf8f4]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <div className="relative">

            <Image
              src="/images/about/about2.jpg"
              alt="Epic Sojourns"
              width={700}
              height={800}
              className="rounded-3xl object-cover shadow-2xl"
            />

          </div>

          {/* Right Content */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[#D4AF37] font-medium mb-4">
              About Epic Sojourns
            </p>

            <h2 className="text-5xl lg:text-6xl font-serif text-[#0F2343] leading-tight mb-8">
              Curating Extraordinary
              <br />
              Travel Experiences.
            </h2>

            <p className="text-lg leading-9 text-slate-600 mb-6">
              At Epic Sojourns, we believe luxury is not simply about destinations—
              it is about the stories you return home with.
            </p>

            <p className="text-lg leading-9 text-slate-600 mb-10">
              Whether it is a destination wedding, an executive corporate retreat,
              a dream honeymoon, or an international holiday, our team designs
              every journey with meticulous planning, exceptional hospitality,
              and personalized attention.
            </p>

            <div className="grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-4xl font-serif text-[#D4AF37]">
                  100%
                </h3>

                <p className="text-slate-600 mt-2">
                  Personalized Planning
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-serif text-[#D4AF37]">
                  End-to-End
                </h3>

                <p className="text-slate-600 mt-2">
                  Travel Management
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}