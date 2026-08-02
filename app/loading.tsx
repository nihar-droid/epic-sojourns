export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5EF]">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#D4AF37] border-t-transparent" />

        <p className="mt-6 text-[#0F2747] font-medium tracking-wide">
          Loading Epic Sojourns...
        </p>
      </div>
    </main>
  );
}