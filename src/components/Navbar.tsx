"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/plans", label: "Plans" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur border-b border-cobalt/10 shadow-sm"
          : "bg-cream/80 backdrop-blur border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-cobalt">
          Campus<span className="text-amber">Bite</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-cobalt ${
                    active ? "text-cobalt" : "text-charcoal/70"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-amber"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/order"
          className="hidden rounded-full bg-cobalt px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-cobalt-dark hover:shadow-md md:inline-block"
        >
          Order Now
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cobalt/20 text-cobalt md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.span animate={open ? "open" : "closed"} className="relative block h-4 w-5">
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
              className="absolute left-0 top-0 h-0.5 w-5 bg-current"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="absolute left-0 top-[7px] h-0.5 w-5 bg-current"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 14 }, open: { rotate: -45, y: 7 } }}
              className="absolute left-0 top-0 h-0.5 w-5 bg-current"
            />
          </motion.span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-cobalt/10 bg-cream md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      pathname === link.href ? "bg-cobalt/10 text-cobalt" : "text-charcoal/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/order"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-cobalt px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
