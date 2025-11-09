import React, { useState, useEffect } from "react";

const Membership = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding:
      windowWidth < 480 ? "30px 10px" : windowWidth < 768 ? "40px 20px" : "50px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: windowWidth < 480 ? "22px" : "28px",
    marginBottom: windowWidth < 480 ? "8px" : "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const paragraphStyle = {
    color: "#ccc",
    fontSize: windowWidth < 480 ? "14px" : "16px",
    maxWidth: "700px",
    margin: "0 auto 30px",
  };

  const plansContainer = {
    display: "flex",
    justifyContent: "center",
    gap: windowWidth < 480 ? "10px" : "20px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    backgroundColor: "#1f1e1eff",
    borderRadius: "10px",
    padding: windowWidth < 480 ? "15px" : "25px",
    width: windowWidth < 480 ? "90%" : windowWidth < 768 ? "45%" : "300px",
    textAlign: "left",
    boxShadow: "0 0 10px rgba(255,255,255,0.1)",
  };

  const planTitle = {
    fontSize: windowWidth < 480 ? "18px" : "22px",
    marginBottom: windowWidth < 480 ? "8px" : "10px",
  };

  const featureList = {
    listStyle: "none",
    padding: 0,
    marginBottom: windowWidth < 480 ? "15px" : "20px",
  };

  const featureItem = {
    color: "#ccc",
    marginBottom: windowWidth < 480 ? "6px" : "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: windowWidth < 480 ? "12px" : "14px",
  };

  const dot = {
    color: "red",
    fontSize: windowWidth < 480 ? "16px" : "20px",
  };

  const price = {
    fontSize: windowWidth < 480 ? "22px" : "26px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const month = {
    fontSize: windowWidth < 480 ? "12px" : "14px",
    color: "#aaa",
  };

  const button = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: windowWidth < 480 ? "8px 0" : "10px 0",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: windowWidth < 480 ? "13px" : "15px",
  };

  const plans = [
    {
      title: "Basic Plan",
      features: [
        "Regular content updates.",
        "Unlimited streaming on one device at a time.",
        "Standard definition (SD) video quality.",
        "Access to a vast library of movies from various genres.",
        "Option to create a personalized watchlist.",
      ],
      price: "KES 1,286.54",
    },
    {
      title: "Standard Plan",
      features: [
        "All features of the Basic Plan.",
        "HD (High Definition) video quality.",
        "Simultaneous streaming on up to two devices.",
        "Ad-free viewing experience.",
        "Offline downloads on mobile devices for selected titles.",
      ],
      price: "KES 1,938.21",
    },
    {
      title: "Premium Plan",
      features: [
        "All features of the Standard Plan.",
        "Ultra HD (4K) video quality for supported titles.",
        "Simultaneous streaming on up to four devices.",
        "Exclusive access to behind-the-scenes content, director's cuts, and special features.",
        "Priority customer support.",
      ],
      price: "KES 2,584.71",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Explore Our Membership Options</h2>
      <p style={paragraphStyle}>
        From essential access to our vast movie library to premium 4K viewing,
        find the perfect subscription for your cinematic journey.
      </p>

      <div style={plansContainer}>
        {plans.map((plan, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={planTitle}>{plan.title}</h3>
            <ul style={featureList}>
              {plan.features.map((feature, i) => (
                <li key={i} style={featureItem}>
                  <span style={dot}>•</span> {feature}
                </li>
              ))}
            </ul>
            <div style={price}>{plan.price}</div>
            <div style={month}>/month</div>
            <button style={button}>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
