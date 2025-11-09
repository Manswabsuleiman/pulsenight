// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const ADMIN_EMAIL = "manswabjuma58@gmail.com";
const ADMIN_PASSWORD = "Manswab@123";

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Check against hardcoded credentials
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // You could generate a JWT here, but for simplicity we’ll just confirm success
    return res.status(200).json({
      success: true,
      message: "Login successful",
      admin: { email },
      token: "mock-token-123",
    });
  } else {
    return res.status(401).json({ message: "Invalid email or password." });
  }
});

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
