import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PlanCard from "@/components/PlanCard";
import { plans } from "@/data/menu";

export const metadata: Metadata = {
  title: "Plans — CampusBite",
  description: "Single meals, weekly fuel and monthly fuel subscription plans from CampusBite.",
};

export default function PlansPage() {
  return (
    <div>
      <section className="bg-cobalt py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">
              Subscription Plans
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold">Choose Your Plan</h1>
            <p className="mt-4 text-base text-white/80">
              Try a single meal or save with a weekly or monthly subscription built around your
              university schedule.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.1}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center text-xs text-charcoal/50">
          <p>
            Subscription prices cover the stated number of meals. Delivery is not included;
            CampusBite orders are collected from the designated campus collection point.
            Subscription terms apply.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
