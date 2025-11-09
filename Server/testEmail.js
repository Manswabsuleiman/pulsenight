require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.sendMail({
  from: `"Test" <${process.env.EMAIL_USER}>`,
  to: "manswabjuma58@gmail.com", // your email
  subject: "Test Email from Node.js",
  text: "This is a test email from your Node.js server.",
}, (err, info) => {
  if (err) console.error("Error:", err);
  else console.log("Email sent:", info.response);
});
