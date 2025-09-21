import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, { apiVersion: "2024-06-20" });

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();
    if (!priceId) return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    if (!key)  return NextResponse.json({ error: "STRIPE_SECRET_KEY missing" }, { status: 500 });

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.APP_URL}/suppliers?success=1`,
      cancel_url: `${process.env.APP_URL}/suppliers?canceled=1`,
    });
    return NextResponse.json({ url: session.url });
  } catch (e:any) {
    return NextResponse.json({ error: e.message || "Stripe error" }, { status: 500 });
  }
}
