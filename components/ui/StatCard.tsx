interface Props {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: Props) {
  return (
    <div className="text-center">
      <h3 className="text-5xl font-bold text-[#D4AF37]">{value}</h3>
      <p className="mt-3 text-gray-600">{label}</p>
    </div>
  );
}