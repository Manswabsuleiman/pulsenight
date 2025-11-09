import React from "react";
import Footer from "../components/Footer";

const Subscription = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "KES 1,286.54 / month",
      features: [
        "Access to limited movies and anime",
        "Standard video quality",
        "Watch on 1 device",
      ],
      color: "#1c1c1c",
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "KES 1,938.21 / month",
      features: [
        "Unlimited movies and anime",
        "HD video quality",
        "Watch on 2 devices",
        "Ad-free experience",
      ],
      color: "#242424",
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "KES 2,584.71 / month",
      features: [
        "Unlimited movies and anime",
        "4K Ultra HD + HDR",
        "Watch on 4 devices",
        "Offline downloads",
        "Exclusive early access releases",
      ],
      color: "#2a2a2a",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        padding: "80px 20px 40px",
        color: "#fff",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "15px",
          color: "#fff",
        }}
      >
        Choose Your <span style={{ color: "red" }}>Plan</span>
      </h1>
      <p
        style={{
          color: "#b3b3b3",
          marginBottom: "50px",
          fontSize: "1.1rem",
        }}
      >
        Enjoy unlimited streaming of your favorite movies and anime.
      </p>

      {/* Plans Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          justifyContent: "center",
          alignItems: "stretch",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 10px",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            style={{
              backgroundColor: plan.color,
              borderRadius: "15px",
              padding: "35px 25px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(255, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.4)";
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: "15px",
                color: "#fff",
              }}
            >
              {plan.name}
            </h2>
            <h3
              style={{
                color: "red",
                fontSize: "1.3rem",
                marginBottom: "20px",
              }}
            >
              {plan.price}
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: "30px",
                color: "#ccc",
                textAlign: "left",
                lineHeight: "1.8",
                fontSize: "1rem",
              }}
            >
              {plan.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>

            <button
              style={{
                backgroundColor: "red",
                border: "none",
                color: "#fff",
                padding: "12px 35px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s, transform 0.2s",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ff3333";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "red";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "60px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Subscription;
