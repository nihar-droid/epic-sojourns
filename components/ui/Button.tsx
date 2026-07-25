import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline";
}

export default function Button({
  href,
  children,
  variant = "gold",
}: Props) {
  return (
    <Link
      href={href}
      className={`rounded-full px-8 py-4 font-medium transition-all duration-300 ${
        variant === "gold"
          ? "bg-[#D4AF37] text-black hover:scale-105 hover:bg-[#c79e30]"
          : "border border-white text-white hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
}