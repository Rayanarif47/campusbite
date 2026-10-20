import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ComboCard from "@/components/ComboCard";
import SignatureCard from "@/components/SignatureCard";
import { baseCombos, signatureMenu, howItWorks, whyCampusBite } from "@/data/menu";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cobalt text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.25),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-amber">
                Good Food. Better Days.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Protein-focused, balanced lunches for busy university days.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base text-white/80">
                At SZABIST Islamabad, your day can be packed with lectures, assignments, society
                work and deadlines. Lunch shouldn&apos;t be another thing to figure out.
                CampusBite brings you convenient, protein-focused lunch options with flexible
                plans to make your university routine easier.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 font-display text-2xl font-bold text-amber">
                Starting at PKR 1,000 per meal.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-dark"
                >
                  Explore Our Menu
                </Link>
                <Link
                  href="/plans"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View Subscription Plans
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/10 backdrop-blur" />
            <Image
              src="/images/meals/tikka-temptation.jpg"
              alt="CampusBite protein-focused lunch box"
              fill
              priority
              sizes="(min-width: 640px) 384px, 288px"
              className="rounded-[2.5rem] object-cover p-3"
            />
          </Reveal>
        </div>
      </section>

      {/* The CampusBite Idea */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-dark">
            The CampusBite Idea
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Your day is packed. Your lunch shouldn&apos;t be an afterthought.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">
            Between back-to-back classes, assignments and everything else university life brings,
            eating a balanced lunch can become difficult. Students often end up relying on fast
            food, expensive cafeteria options or skipping meals altogether. CampusBite was built
            around one simple thought: students deserve convenient, balanced meals that fit into
            their everyday lives. We make planning lunch simpler, one bite at a time.
          </p>
        </Reveal>
      </section>

      {/* Meet CampusBite */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Meet CampusBite
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              CampusBite is a student-focused lunch subscription service offering
              protein-focused, balanced meals designed around university life. Our goal is to
              make nutritious eating more convenient through thoughtfully combined ingredients, a
              variety of lunch options and subscription plans that reward consistency.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 font-display text-xl font-semibold text-cobalt">
              Less lunch stress. More time for what matters.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Find Your Kind of Fuel */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Find Your Kind of Fuel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal/70">
            Explore six lunch combinations designed to bring together protein sources,
            carbohydrates and vegetables.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {baseCombos.map((combo, index) => (
            <Reveal key={combo.id} delay={index * 0.05}>
              <ComboCard combo={combo} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center text-xs text-charcoal/50">
          <p>
            Menu availability may vary. Final portions, ingredients, nutrition information and
            allergen details will be confirmed before launch.
          </p>
        </Reveal>
        <Reveal className="mt-8 flex justify-center">
          <Link
            href="/menu"
            className="rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-cobalt-dark"
          >
            Choose Your Meals
          </Link>
        </Reveal>
      </section>

      {/* Signature Menu teaser */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              CampusBite&apos;s Signature Menu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal/70">
              Desi favourites and continental staples, each built around a balanced lunch
              combination.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatureMenu.map((meal, index) => (
              <Reveal key={meal.id} delay={index * 0.05}>
                <SignatureCard meal={meal} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">How It Works</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cobalt font-display text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{step.description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center font-display text-lg font-semibold text-cobalt">
          Simple ordering. Convenient collection. Lunch sorted.
        </Reveal>
      </section>

      {/* Why CampusBite */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Why CampusBite?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {whyCampusBite.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <h3 className="font-display text-base font-semibold text-cobalt">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">
              Our Vision
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A better lunch routine starts with a simple idea.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              We believe a busy university schedule shouldn&apos;t mean putting your well-being
              last. CampusBite aims to make balanced, convenient meals a practical part of student
              life, helping students spend less time worrying about lunch and more time focusing
              on their education, ambitions and experiences.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-display text-xl font-semibold text-amber">
              Because better days start with better everyday choices.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cobalt py-20 text-white">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to Make Lunch Easier?
            </h2>
            <p className="mt-4 text-base text-white/80">
              Your university day has enough going on. Let CampusBite take one decision off your
              plate.
            </p>
            <p className="mt-4 font-display text-xl font-semibold text-amber">
              Choose your meals. Pick your plan. Fuel your day.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link
              href="/order"
              className="inline-block rounded-full bg-amber px-8 py-3.5 text-sm font-semibold text-ink shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-dark"
            >
              Order Now
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
