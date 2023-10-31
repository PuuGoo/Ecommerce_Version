import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import dotenv from "dotenv";

// Config

dotenv.config({
  path: "backend/config/config.env",
});

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

const sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

export { processPayment, sendStripeApiKey };
