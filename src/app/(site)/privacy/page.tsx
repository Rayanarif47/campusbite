import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — CampusBite",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <Reveal>
        <h1 className="font-display text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-4 rounded-lg bg-amber/10 p-4 text-sm text-amber-dark">
          Placeholder draft — replace with CampusBite&apos;s finalized privacy policy before
          launch.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <section>
            <h2 className="font-display text-lg font-semibold text-ink">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you place an order through our website, we collect your name, email address,
              WhatsApp number, selected plan, meal selections and any note you provide, so we can
              confirm and fulfil your order.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-ink">How We Use It</h2>
            <p className="mt-2">
              Order details are used only to confirm, prepare and coordinate collection of your
              CampusBite order, and are not sold or shared with third parties for marketing
              purposes.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-ink">Contact</h2>
            <p className="mt-2">
              Questions about your data can be sent to us through WhatsApp or Instagram, listed in
              the footer of this site.
            </p>
          </section>
        </div>
      </Reveal>
    </div>
  );
}
