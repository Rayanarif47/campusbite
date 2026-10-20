import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "FAQ — CampusBite",
  description: "Frequently asked questions about CampusBite's lunch service at SZABIST Islamabad.",
};

export default function FaqPage() {
  return (
    <div>
      <section className="bg-cobalt py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">Support</p>
            <h1 className="mt-3 font-display text-4xl font-bold">Frequently Asked Questions</h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <Reveal>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </section>
    </div>
  );
}
