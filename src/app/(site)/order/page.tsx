import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "Order — CampusBite",
  description: "Choose your meals, pick your plan and place your CampusBite order online.",
};

export default function OrderPage() {
  return (
    <div>
      <section className="bg-cobalt py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">
              Order CampusBite
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold">
              Choose your meals. Pick your plan. Fuel your day.
            </h1>
            <p className="mt-4 text-base text-white/80">
              Submit your order and it&apos;s confirmed instantly — we&apos;ll follow up with
              collection details.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <Reveal>
          <Suspense fallback={null}>
            <OrderForm />
          </Suspense>
        </Reveal>
      </section>
    </div>
  );
}
