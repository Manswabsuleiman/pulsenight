require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Create and verify transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // <-- Use App Password
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("Email transporter error:", err);
  } else {
    console.log("✅ Email transporter is ready");
  }
});

// 🎬 Booking endpoint
app.post("/book", async (req, res) => {
  const { name, email, movie, date, price } = req.body;

  if (!name || !email || !movie || !date || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const mailOptions = {
      from: `"Movie Ticketing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎟️ Booking Confirmation - ${movie}`,
      html: `
        <div style="font-family: Poppins, sans-serif; line-height: 1.6; font-weight: bolder;">
          <h2 style="color:#ff4444;">Movie Booking Confirmed!</h2>
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for booking with <strong>Movie Ticketing</strong>.</p>
          <p><strong>Movie:</strong> ${movie}<br/>
             <strong>Date:</strong> ${date}<br/>
             <strong>Price:</strong> Ksh ${price}</p>
          <p>Your ticket has been successfully booked. See you soon! 🍿</p>
          <hr/>
          <p style="font-size: 0.9rem; color: gray;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ 
      message: "Failed to send email.", 
      details: error.message || "Unknown SMTP error" 
    });
  }
});

// 🔹 Optional test endpoint
app.get("/test", (req, res) => res.json({ message: "Backend is reachable" }));

const PORT = 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
