import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-medium">
          ERROR 404
        </p>

        <h1 className="mt-4 text-6xl md:text-7xl font-serif text-[#0F2747]">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          The page you&aposre looking for doesn&apost exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-flex mt-10 rounded-full bg-[#0F2747] px-8 py-4 text-white font-semibold transition hover:bg-[#08192F]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}