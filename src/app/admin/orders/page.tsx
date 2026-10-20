"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebaseClient";

type Status = "confirmed" | "delivered" | "cancelled";

type Order = {
  id: string;
  name: string;
  phone: string;
  email: string;
  plan: string;
  meals: string[];
  note: string;
  status: Status;
  createdAt: string | null;
};

const STATUS_OPTIONS: Status[] = ["confirmed", "delivered", "cancelled"];

const STATUS_STYLES: Record<Status, string> = {
  confirmed: "bg-cobalt/15 text-blue-300 border-cobalt/40",
  delivered: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  cancelled: "bg-red-500/10 text-red-400 border-red-500/30",
};

export default function AdminOrdersPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = useCallback(async (currentUser: User) => {
    setLoading(true);
    setError(null);
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/admin/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to load orders");
      const data = await res.json();
      setOrders(data.orders);
    } catch {
      setError("Could not load orders.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        router.push("/admin/login");
        return;
      }
      fetchOrders(currentUser);
    });
    return () => unsubscribe();
  }, [router, fetchOrders]);

  async function handleStatusChange(orderId: string, status: Status) {
    if (!user) return;
    setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status } : o)));
    const token = await user.getIdToken();
    const res = await fetch(`/api/admin/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) {
      fetchOrders(user);
    }
  }

  const counts = useMemo(() => {
    const base: Record<Status, number> = { confirmed: 0, delivered: 0, cancelled: 0 };
    for (const o of orders) base[o.status] = (base[o.status] ?? 0) + 1;
    return base;
  }, [orders]);

  if (user === undefined || loading) {
    return (
      <div className="flex items-center justify-center px-5 py-24 text-slate-400">
        Loading…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Orders</h1>
          <p className="mt-1 text-sm text-slate-400">
            {orders.length} total · signed in as {user?.email}
          </p>
        </div>
        <button
          onClick={() => signOut(getFirebaseAuth())}
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
        >
          Sign out
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {STATUS_OPTIONS.map((status) => (
          <div
            key={status}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {status}
            </p>
            <p className="mt-1 text-2xl font-semibold text-white">{counts[status]}</p>
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-6 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-xs font-medium uppercase tracking-wider text-slate-500">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Meals</th>
              <th className="px-4 py-3">Note</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3.5 font-medium text-white">{order.name}</td>
                <td className="px-4 py-3.5 text-slate-300">{order.phone}</td>
                <td className="px-4 py-3.5 text-slate-300">{order.email}</td>
                <td className="px-4 py-3.5 capitalize text-slate-300">{order.plan}</td>
                <td className="px-4 py-3.5 text-slate-300">{order.meals?.join(", ")}</td>
                <td className="px-4 py-3.5 text-slate-500">{order.note || "—"}</td>
                <td className="px-4 py-3.5 whitespace-nowrap text-slate-500">
                  {order.createdAt ? new Date(order.createdAt).toLocaleString() : "—"}
                </td>
                <td className="px-4 py-3.5">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value as Status)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize outline-none ${STATUS_STYLES[order.status]}`}
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-slate-500">
                  No orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
