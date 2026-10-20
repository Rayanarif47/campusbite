import Link from "next/link";
import type { BaseCombo } from "@/data/menu";

export default function ComboCard({ combo }: { combo: BaseCombo }) {
  return (
    <Link
      href={`/order?meal=${combo.id}`}
      className="group flex flex-col rounded-2xl border border-cobalt/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cobalt/30 hover:shadow-xl"
    >
      <span className="font-display text-3xl font-bold text-cobalt/20 transition-colors group-hover:text-amber">
        {combo.number}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-ink">{combo.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{combo.description}</p>
    </Link>
  );
}
