import Link from "next/link";
import type { Plan } from "@/data/menu";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex flex-col rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        plan.highlight
          ? "border-2 border-amber bg-cobalt text-white"
          : "border border-cobalt/10 bg-white text-charcoal"
      }`}
    >
      {plan.highlight && (
        <span className="mb-4 w-fit rounded-full bg-amber px-3 py-1 text-xs font-semibold text-ink">
          Best Value
        </span>
      )}
      <h3 className={`font-display text-xl font-bold ${plan.highlight ? "text-white" : "text-ink"}`}>
        {plan.name}
      </h3>
      <p className={`mt-3 font-display text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-cobalt"}`}>
        {plan.priceLabel}
      </p>
      <p className={`mt-2 text-sm ${plan.highlight ? "text-white/80" : "text-charcoal/70"}`}>{plan.tagline}</p>
      {plan.savings && (
        <p className={`mt-3 text-sm font-semibold ${plan.highlight ? "text-amber" : "text-amber-dark"}`}>
          {plan.savings}
        </p>
      )}
      <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className={plan.highlight ? "text-amber" : "text-cobalt"}>&#10003;</span>
            <span className={plan.highlight ? "text-white/90" : "text-charcoal/80"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/order?plan=${plan.id}`}
        className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-all hover:-translate-y-0.5 ${
          plan.highlight
            ? "bg-amber text-ink hover:bg-amber-dark"
            : "bg-cobalt text-white hover:bg-cobalt-dark"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
