import Container from "@/components/ui/Container";

const companies = [
  "Corporate Events",
  "Destination Weddings",
  "Luxury Holidays",
  "Hotel Consultancy",
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-14 border-y border-gray-200">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <p className="uppercase tracking-[5px] text-gray-500 font-medium">
            Trusted Expertise In
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            {companies.map((item) => (
              <div
                key={item}
                className="text-lg font-semibold text-[#0B2545]"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}