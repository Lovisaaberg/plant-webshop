const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
const checkoutRoutes = require("./routes/checkout");
app.use("/api/stripe", checkoutRoutes);

module.exports = app;
