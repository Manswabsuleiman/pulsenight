const express = require("express");
const cors = require("cors");
const axios = require("axios");
const crypto = require("crypto");

const app = express();

// ----------------------
// CORS Configuration
// ----------------------
// Allow local dev and deployed frontend
const allowedOrigins = [
  "http://localhost:5173",            // local frontend
  "https://pulsenight-agg2.onrender.com" // deployed frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests like Postman
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// ----------------------
// PesaPal LIVE Credentials
// ----------------------
const PESAPAL_CONSUMER_KEY = "q+VgbmFWV80GUHw72+a5kPbhIYxoOV0X";
const PESAPAL_CONSUMER_SECRET = "ckA8EE4abmKNsCgzhMY5QlOhoOI=";
const BASE_URL = "https://pay.pesapal.com/v3/api";
const IPN_ID = "3db0823c-0eb7-4a4e-b477-db1e72aa1bb1";

// Use your live backend URL for callback
const LIVE_CALLBACK_URL = "https://pulsenight.onrender.com/api/pesapal/ipn";

let accessToken = null;

// ----------------------
// Get Access Token
// ----------------------
async function getAccessToken() {
  try {
    const response = await axios.post(
      `${BASE_URL}/Auth/RequestToken`,
      {
        consumer_key: PESAPAL_CONSUMER_KEY,
        consumer_secret: PESAPAL_CONSUMER_SECRET,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.data?.token) {
      accessToken = response.data.token;
      console.log("✅ PesaPal Access Token:", accessToken);
      return accessToken;
    } else {
      console.error("❌ Token not returned:", response.data);
    }
  } catch (err) {
    console.error("❌ Error getting access token:", err.response?.data || err.message);
  }
}

// ----------------------
// Refresh Token Every 55 Minutes
// ----------------------
setInterval(async () => {
  console.log("🔄 Refreshing PesaPal access token...");
  await getAccessToken();
}, 55 * 60 * 1000);

// ----------------------
// Route: Submit Order Request
// ----------------------
app.post("/api/pesapal/order", async (req, res) => {
  try {
    const { amount, email, phone, firstName, lastName } = req.body || {};

    // Validate input
    if (!amount || isNaN(amount) || Number(amount) < 0.01) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment amount. Must be 0.01 or higher.",
      });
    }

    if (!email || !phone || !firstName || !lastName) {
      return res.status(400).json({
        success: false,
        message: "Missing customer details",
      });
    }

    if (!accessToken) await getAccessToken();

    const orderId = crypto.randomUUID();

    const orderData = {
      id: orderId,
      currency: "KES",
      amount: Number(parseFloat(amount).toFixed(2)),
      description: "Movie Ticket Payment",
      callback_url: LIVE_CALLBACK_URL,
      notification_id: IPN_ID,
      billing_address: {
        email_address: email,
        phone_number: phone,
        country_code: "KE",
        first_name: firstName,
        last_name: lastName,
      },
    };

    console.log("📤 Sending order data:", orderData);

    const response = await axios.post(
      `${BASE_URL}/Transactions/SubmitOrderRequest`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Pesapal Order Created:", response.data);

    res.status(200).json({
      success: true,
      redirect_url: response.data.redirect_url,
      order_tracking_id: response.data.order_tracking_id,
    });
  } catch (err) {
    console.error("❌ Payment Error:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      message: err.response?.data?.message || "Payment initiation failed",
      details: err.response?.data || err.message,
    });
  }
});

// ----------------------
// Route: IPN Handler
// ----------------------
app.post("/api/pesapal/ipn", (req, res) => {
  console.log("📩 IPN received:", req.body);
  res.status(200).json({ message: "IPN received successfully" });
});

// ----------------------
// Route: Token Viewer (for testing)
// ----------------------
app.get("/api/pesapal/token", async (req, res) => {
  await getAccessToken();
  res.json({ token: accessToken });
});

// ----------------------
// Root Route
// ----------------------
app.get("/", (req, res) => {
  res.send("✅ PesaPal Live Backend is running on Render...");
});

// ----------------------
// Start Server
// ----------------------
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await getAccessToken();
});
