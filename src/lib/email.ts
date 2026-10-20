import nodemailer from "nodemailer";

const PLAN_LABELS: Record<string, string> = {
  single: "Single Bite",
  weekly: "Weekly Fuel",
  monthly: "Monthly Fuel",
};

type OrderDetails = {
  name: string;
  email: string;
  plan: string;
  meals: string[];
  note?: string;
};

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) return transporter;
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
  return transporter;
}

export async function sendOrderConfirmationEmail(order: OrderDetails) {
  const user = process.env.GMAIL_USER;
  const client = getTransporter();
  if (!client || !user) return;

  const planLabel = PLAN_LABELS[order.plan] ?? order.plan;

  await client.sendMail({
    from: `CampusBite <${user}>`,
    to: order.email,
    subject: "Your CampusBite order is confirmed",
    html: `
      <p>Hi ${order.name},</p>
      <p>Your order is confirmed. Here's a summary:</p>
      <ul>
        <li><strong>Plan:</strong> ${planLabel}</li>
        <li><strong>Meals:</strong> ${order.meals.join(", ")}</li>
        ${order.note ? `<li><strong>Note:</strong> ${order.note}</li>` : ""}
      </ul>
      <p>We'll be in touch with your collection details.</p>
      <p>Good Food. Better Days.<br/>CampusBite</p>
    `,
  });
}
