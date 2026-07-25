"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun",
    title: "Destination Wedding, Udaipur",
    review:
      "Epic Sojourns turned our dream wedding into reality. Every detail was flawlessly managed, allowing us to truly enjoy our special day.",
  },
  {
    name: "Rahul Mehta",
    title: "Corporate Retreat",
    review:
      "From flights to conference arrangements, everything was executed professionally. The team exceeded our expectations.",
  },
  {
    name: "Neha Kapoor",
    title: "Luxury Europe Tour",
    review:
      "Every hotel, every transfer, and every experience felt premium. We never had to worry about a thing throughout the journey.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-medium mb-4">
            CLIENT STORIES
          </p>

          <h2 className="font-serif text-5xl text-[#0F2747] mb-6">
            Trusted by Travelers
          </h2>

          <p className="text-slate-600 text-lg leading-8">
            Every journey leaves behind memories. Here&apos;s what our clients have
            to say about their experience with Epic Sojourns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-8 italic mb-8">
                &#34;{item.review}&#34;
              </p>

              <div>
                <h4 className="font-serif text-2xl text-[#0F2747]">
                  {item.name}
                </h4>

                <p className="text-[#D4AF37] mt-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}