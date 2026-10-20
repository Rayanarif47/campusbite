import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ComboCard from "@/components/ComboCard";
import SignatureCard from "@/components/SignatureCard";
import { baseCombos, signatureMenu } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu — CampusBite",
  description:
    "Six protein-focused lunch combinations and CampusBite's signature desi and continental menu.",
};

export default function MenuPage() {
  return (
    <div>
      <section className="bg-cobalt py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">Our Menu</p>
            <h1 className="mt-3 font-display text-4xl font-bold">Find Your Kind of Fuel</h1>
            <p className="mt-4 text-base text-white/80">
              Explore six lunch combinations designed to bring together protein sources,
              carbohydrates and vegetables, plus our signature desi and continental meals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-ink">Base Combinations</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {baseCombos.map((combo, index) => (
            <Reveal key={combo.id} delay={index * 0.05}>
              <ComboCard combo={combo} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-xs text-charcoal/50">
          <p>
            Menu availability may vary. Final portions, ingredients, nutrition information and
            allergen details will be confirmed before launch.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink">
              CampusBite&apos;s Signature Menu
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatureMenu.map((meal, index) => (
              <Reveal key={meal.id} delay={index * 0.05}>
                <SignatureCard meal={meal} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <Reveal>
          <Link
            href="/order"
            className="inline-block rounded-full bg-amber px-8 py-3.5 text-sm font-semibold text-ink shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-dark"
          >
            Ready to order? Head to checkout
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
