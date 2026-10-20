import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { WHATSAPP_NUMBER, buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us — CampusBite",
  description: "Get in touch with CampusBite via WhatsApp or Instagram.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <Reveal>
        <h1 className="font-display text-4xl font-bold text-ink">Contact Us</h1>
        <p className="mt-4 text-base text-charcoal/70">
          For orders, plan questions or anything else, reach out through WhatsApp and our team
          will get back to you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={buildWhatsAppLink("Hi CampusBite! I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-cobalt-dark"
          >
            Message us on WhatsApp
          </Link>
          <Link
            href="https://www.instagram.com/_aks.80_/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cobalt/20 px-6 py-3 text-sm font-semibold text-cobalt transition-all hover:-translate-y-0.5 hover:bg-cobalt/5"
          >
            Follow on Instagram
          </Link>
        </div>
        <p className="mt-6 text-sm text-charcoal/50">WhatsApp: +{WHATSAPP_NUMBER}</p>
      </Reveal>
    </div>
  );
}
