import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions — CampusBite",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <Reveal>
        <h1 className="font-display text-4xl font-bold text-ink">Terms &amp; Conditions</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <section>
            <h2 className="font-display text-lg font-semibold text-ink">Orders &amp; Plans</h2>
            <p className="mt-2">
              A single meal costs PKR 500 with no subscription required. The Weekly Fuel plan
              (PKR 2,850) includes six lunches across one six-day service week. The Monthly Fuel
              plan (PKR 10,800) includes 24 lunches across four six-day service weeks. Meal
              selections are subject to availability and the ordering deadline.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-ink">Collection</h2>
            <p className="mt-2">
              Orders are collected, not delivered, from the designated CampusBite collection
              point at SZABIST Islamabad during the confirmed collection window.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-ink">
              Changes, Cancellations &amp; Refunds
            </h2>
            <p className="mt-2">
              Changes, cancellations, refunds and rescheduling are subject to CampusBite&apos;s
              published subscription policy. Please review the terms before payment, and contact
              us on WhatsApp with any questions.
            </p>
          </section>
        </div>
      </Reveal>
    </div>
  );
}
