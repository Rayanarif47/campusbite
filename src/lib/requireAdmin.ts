import { getAdminAuth } from "@/lib/firebaseAdmin";
import type { DecodedIdToken } from "firebase-admin/auth";

type AdminResult =
  | { ok: true; decoded: DecodedIdToken }
  | { ok: false; status: 401 | 403 };

export async function requireAdmin(request: Request): Promise<AdminResult> {
  const header = request.headers.get("authorization");
  const idToken = header?.startsWith("Bearer ") ? header.slice("Bearer ".length) : null;
  if (!idToken) return { ok: false, status: 401 };

  let decoded: DecodedIdToken;
  try {
    decoded = await getAdminAuth().verifyIdToken(idToken);
  } catch {
    return { ok: false, status: 401 };
  }

  const adminEmails = (process.env.ADMIN_EMAIL ?? "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);

  if (!decoded.email || !adminEmails.includes(decoded.email)) {
    return { ok: false, status: 403 };
  }

  return { ok: true, decoded };
}
