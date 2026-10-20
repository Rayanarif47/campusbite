import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const LINKS = [
  { href: "https://www.instagram.com/_aks.80_/", label: "Instagram" },
  { href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cobalt/10 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-display text-2xl font-bold">
            Campus<span className="text-amber">Bite</span>
          </p>
          <p className="text-sm text-cream/70">Good Food. Better Days.</p>
          <p className="mt-2 text-sm text-cream/60">
            SZABIST Islamabad &middot; Six-day lunch service &middot; Campus collection
          </p>
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-cream/70 transition-colors hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 text-center text-xs text-cream/40">
          &copy; 2026 CampusBite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
