import Image from "next/image";
import Link from "next/link";
import type { SignatureMeal } from "@/data/menu";

const TAG_STYLES: Record<SignatureMeal["tag"], string> = {
  "DESI FAVOURITE": "bg-amber/15 text-amber-dark",
  CONTINENTAL: "bg-cobalt/10 text-cobalt",
  "CONTINENTAL FUSION": "bg-ink/10 text-ink",
};

export default function SignatureCard({ meal }: { meal: SignatureMeal }) {
  return (
    <Link
      href={`/order?meal=${meal.id}`}
      className="group block overflow-hidden rounded-2xl border border-cobalt/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${TAG_STYLES[meal.tag]}`}
        >
          {meal.tag}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold text-amber-dark">{meal.number.padStart(2, "0")}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">{meal.name}</h3>
        <p className="mt-2 text-sm text-charcoal/70">{meal.description}</p>
        <p className="mt-3 text-sm font-medium italic text-cobalt/80">{meal.tagline}</p>
      </div>
    </Link>
  );
}
