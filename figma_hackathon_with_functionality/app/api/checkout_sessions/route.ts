import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { totalAmount, carName, customerEmail, pickupDate, dropoffDate, pickupTime, dropoffTime, pickupLocation, dropOffLocation } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
      
      // Add customer email (used in webhook)
      customer_email: customerEmail, 

      // Add booking details as metadata
      metadata: {
        carName,
        pickupDate,
        dropoffDate,
        pickupTime,
        dropoffTime,
        pickupLocation,
        dropOffLocation,
      },

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: carName,
            },
            unit_amount: Math.round(totalAmount * 100),
          },
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
