import React, { useState } from "react";
import axios from "axios";

// Replace this with your current ngrok URL
const BACKEND_URL = "https://pulsenight.onrender.com";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    if (!email || !phone || !firstName || !lastName || !amount) {
      setMessage("Please fill all fields.");
      return;
    }

    if (Number(amount) < 0.01) {
      setMessage("Amount must be 0.01 KES or higher.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post(`${BACKEND_URL}/api/pesapal/order`, {
        email,
        phone,
        firstName,
        lastName,
        amount: Number(amount),
      });

      if (response.data.success) {
        window.location.href = response.data.redirect_url;
      } else {
        setMessage(response.data.message || "Payment initiation failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: "#111",
      marginTop: "55px",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 20px",
      fontFamily: "Poppins, sans-serif"
    }}>
      <div style={{
        backgroundColor: "#1c1c1c",
        padding: "40px",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 0 10px rgba(255,0,0,0.2)",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "25px", color: "#ff4444" }}>Pay with PesaPal</h2>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
        <input type="number" placeholder="Amount (KES)" value={amount} onChange={(e) => setAmount(e.target.value)} style={inputStyle} />

        <button onClick={handlePayment} disabled={loading} style={buttonStyle}>
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {message && <p style={{ marginTop: "20px", color: "#ffaaaa" }}>{message}</p>}
      </div>
    </div>
  );
};

// Reusable styles
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #444",
  backgroundColor: "#222",
  color: "#fff",
};

const buttonStyle = {
  backgroundColor: "#ae0914",
  color: "#fff",
  border: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
};

export default Payment;
