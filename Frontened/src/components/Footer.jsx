import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ===== STYLES =====
  const footerContainer = {
    backgroundColor: "#000",
    color: "#fff",
    padding:
      windowWidth < 480
        ? "30px 10px"
        : windowWidth < 768
        ? "35px 20px"
        : "40px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const topSection = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderBottom: "1px solid #222",
    paddingBottom: windowWidth < 480 ? "20px" : "30px",
  };

  const column = {
    display: "flex",
    flexDirection: "column",
    marginBottom: windowWidth < 480 ? "15px" : "20px",
    minWidth: "150px",
    flex: windowWidth < 480 ? "1 1 100%" : "auto",
  };

  const heading = {
    fontSize: windowWidth < 480 ? "16px" : "18px",
    marginBottom: windowWidth < 480 ? "8px" : "10px",
    color: "#fff",
  };

  const button = {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: windowWidth < 480 ? "13px" : "15px",
    textAlign: "left",
    padding: "4px 0",
    cursor: "pointer",
  };

  const bottomSection = {
    display: "flex",
    flexDirection: windowWidth < 480 ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: windowWidth < 480 ? "20px" : "30px",
    borderTop: "1px solid #222",
    paddingTop: windowWidth < 480 ? "15px" : "20px",
    fontSize: windowWidth < 480 ? "12px" : "14px",
    color: "#aaa",
    gap: windowWidth < 480 ? "10px" : "0",
  };

  const policyLinks = {
    display: "flex",
    flexWrap: "wrap",
    gap: windowWidth < 480 ? "10px" : "20px",
  };

  const socialButton = {
    ...button,
    fontSize: windowWidth < 480 ? "18px" : "20px",
  };

  return (
    <div style={footerContainer}>
      <div style={topSection}>
        <div style={column}>
          <h3 style={heading}>Home</h3>
          <button style={button}>Categories</button>
          <button style={button}>Devices</button>
          <button style={button}>Pricing</button>
          <button style={button}>FAQ</button>
        </div>

        <div style={column}>
          <h3 style={heading}>Movies</h3>
          <button onClick={() => navigate("/genres")} style={button}>
            Genres
          </button>
          <button style={button}>Trending</button>
          <button style={button}>New Release</button>
          <button style={button}>Popular</button>
        </div>

        <div style={column}>
          <h3 style={heading}>Shows</h3>
          <button onClick={() => navigate("/genres")} style={button}>
            Genres
          </button>
          <button style={button}>Trending</button>
          <button style={button}>New Release</button>
          <button style={button}>Popular</button>
        </div>

        <div style={column}>
          <h3 style={heading}>Support</h3>
          <button style={button}>Contact Us</button>
        </div>

        <div style={column}>
          <h3 style={heading}>Subscription</h3>
          <button style={button}>Plans</button>
          <button style={button}>Features</button>
        </div>

        <div style={column}>
          <h3 style={heading}>Connect With Us</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <button style={socialButton}></button>
            <button style={socialButton}></button>
          </div>
        </div>
      </div>

      <div style={bottomSection}>
        <p>©2024, All Rights Reserved</p>
        <div style={policyLinks}>
          <button style={button}>Terms of Use</button>
          <button style={button}>Privacy Policy</button>
          <button style={button}>Cookie Policy</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
