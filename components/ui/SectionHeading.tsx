interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-20`}>
      <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
        {eyebrow}
      </p>

      <h2 className="text-5xl lg:text-6xl mt-4 text-[#0B2545]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}