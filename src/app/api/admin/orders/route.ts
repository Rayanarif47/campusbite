import { NextResponse } from "next/server";
import { getAdminFirestore } from "@/lib/firebaseAdmin";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET(request: Request) {
  const auth = await requireAdmin(request);
  if (!auth.ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: auth.status });
  }

  const db = getAdminFirestore();
  const snapshot = await db.collection("orders").orderBy("createdAt", "desc").get();
  const orders = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      phone: data.phone,
      plan: data.plan,
      meals: data.meals,
      note: data.note,
      status: data.status,
      createdAt: data.createdAt?.toDate?.().toISOString() ?? null,
    };
  });

  return NextResponse.json({ orders });
}
