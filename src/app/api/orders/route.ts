import { NextResponse } from "next/server";
import { z } from "zod";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebaseAdmin";

const orderSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{7,20}$/, "Enter a valid phone number"),
  plan: z.enum(["single", "weekly", "monthly"]),
  meals: z.array(z.string().trim().min(1)).min(1).max(10),
  note: z.string().trim().max(500).optional().default(""),
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = orderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid order details", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { website, ...data } = parsed.data;
  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    const db = getAdminFirestore();
    const ref = await db.collection("orders").add({
      ...data,
      status: "pending",
      createdAt: FieldValue.serverTimestamp(),
    });
    return NextResponse.json({ ok: true, orderId: ref.id }, { status: 201 });
  } catch (error) {
    console.error("Failed to save order", error);
    return NextResponse.json(
      { error: "Could not save order. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }
}
