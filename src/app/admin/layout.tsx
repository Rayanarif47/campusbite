import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — CampusBite",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-4">
          <span className="font-display text-lg font-bold tracking-tight">
            Campus<span className="text-amber">Bite</span>
          </span>
          <span className="rounded-full border border-amber/40 bg-amber/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber">
            Admin
          </span>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
