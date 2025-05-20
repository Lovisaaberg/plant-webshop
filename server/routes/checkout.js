const express = require("express");
require("dotenv").config();
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  const line_items = products.map((product) => ({
    price_data: {
      currency: "sek",
      product_data: {
        name: product.name,
        images: [product.image],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: `http://localhost:5173/success`,
    cancel_url: `http://localhost:5173/cancel`,
  });

  res.json({ id: session.id });
});

module.exports = router;
