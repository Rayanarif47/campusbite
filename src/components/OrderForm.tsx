"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { baseCombos, signatureMenu, plans } from "@/data/menu";

const ALL_MEALS = [...baseCombos, ...signatureMenu].map((m) => ({ id: m.id, name: m.name }));

type Status = "idle" | "submitting" | "success" | "error";

export default function OrderForm() {
  const searchParams = useSearchParams();
  const presetMeal = searchParams.get("meal");
  const presetPlan = searchParams.get("plan");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(
    presetPlan && plans.some((p) => p.id === presetPlan) ? presetPlan : "single"
  );
  const [selectedMeals, setSelectedMeals] = useState<string[]>(
    presetMeal && ALL_MEALS.some((m) => m.id === presetMeal) ? [presetMeal] : []
  );
  const [note, setNote] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function toggleMeal(id: string) {
    setSelectedMeals((current) =>
      current.includes(id) ? current.filter((m) => m !== id) : [...current, id]
    );
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrorMessage("");

    if (selectedMeals.length === 0) {
      setErrorMessage("Please choose at least one meal.");
      return;
    }

    setStatus("submitting");

    const mealNames = ALL_MEALS.filter((m) => selectedMeals.includes(m.id)).map((m) => m.name);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          plan,
          meals: mealNames,
          note,
          website,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Could not submit order.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cobalt/10 bg-white p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-ink">Order confirmed!</h2>
        <p className="mt-3 text-sm text-charcoal/70">
          We&apos;ve sent a confirmation to your email. We&apos;ll be in touch with your
          collection details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-cobalt/10 bg-white p-6 sm:p-8">
      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">1. Choose your plan</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {plans.map((p) => (
            <label
              key={p.id}
              className={`cursor-pointer rounded-xl border p-4 text-sm transition-colors ${
                plan === p.id ? "border-cobalt bg-cobalt/5" : "border-cobalt/15 hover:border-cobalt/40"
              }`}
            >
              <input
                type="radio"
                name="plan"
                value={p.id}
                checked={plan === p.id}
                onChange={() => setPlan(p.id)}
                className="sr-only"
              />
              <span className="block font-display font-semibold text-ink">{p.name}</span>
              <span className="mt-1 block text-cobalt">{p.priceLabel}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">2. Choose your meals</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {ALL_MEALS.map((meal) => (
            <label
              key={meal.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition-colors ${
                selectedMeals.includes(meal.id)
                  ? "border-cobalt bg-cobalt/5"
                  : "border-cobalt/15 hover:border-cobalt/40"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedMeals.includes(meal.id)}
                onChange={() => toggleMeal(meal.id)}
                className="h-4 w-4 accent-cobalt"
              />
              <span className="text-charcoal/80">{meal.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">3. Your details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-charcoal/80">
              Full name
            </label>
            <input
              id="name"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-cobalt/20 px-3.5 py-2.5 text-sm outline-none focus:border-cobalt"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-charcoal/80">
              WhatsApp number
            </label>
            <input
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-cobalt/20 px-3.5 py-2.5 text-sm outline-none focus:border-cobalt"
              placeholder="03xx xxxxxxx"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-charcoal/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-cobalt/20 px-3.5 py-2.5 text-sm outline-none focus:border-cobalt"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="note" className="text-sm font-medium text-charcoal/80">
            Note (optional)
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            maxLength={500}
            className="mt-1.5 w-full rounded-lg border border-cobalt/20 px-3.5 py-2.5 text-sm outline-none focus:border-cobalt"
            placeholder="Allergies, collection preferences, etc."
          />
        </div>
      </div>

      {errorMessage && <p className="text-sm font-medium text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Place order"}
      </button>
    </form>
  );
}
