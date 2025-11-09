import React, { useState, useEffect } from "react";

const LoginModal = ({ onClose }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        animation: "fadeIn 0.3s ease",
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "90%" : "850px",
          height: isMobile ? "auto" : "520px",
          backgroundColor: "#0b0b0b",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
          animation: "fadeIn 0.3s ease",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            fontSize: "18px",
            zIndex: 1,
          }}
        >
          ×
        </button>

        {/* Left Side - Login Form */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#0b0b0b",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: isMobile ? "20px 15px" : "40px",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <h2
              style={{
                color: "#fff",
                marginBottom: isMobile ? "20px" : "30px",
                fontSize: isMobile ? "22px" : "28px",
              }}
            >
              <span style={{ color: "red" }}>Welcome</span> back
            </h2>

            <div style={{ marginBottom: "10px" }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: isMobile ? "8px" : "10px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: isMobile ? "8px" : "10px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  marginTop: "5px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                fontSize: "14px",
                marginBottom: "15px",
                gap: isMobile ? "8px" : "0",
              }}
            >
              <label>
                <input type="checkbox" style={{ marginRight: "5px" }} /> Remember
                me
              </label>
              <a href="#" style={{ color: "#b3b3b3", textDecoration: "none" }}>
                Forget Password?
              </a>
            </div>

            <button
              style={{
                width: "100%",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                padding: isMobile ? "10px" : "12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Login
            </button>

            <div
              style={{
                textAlign: "center",
                color: "#aaa",
                marginBottom: "15px",
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              OR
            </div>

            <button
              style={{
                width: "100%",
                backgroundColor: "#1c1c1c",
                color: "#fff",
                border: "1px solid #333",
                padding: isMobile ? "10px" : "12px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "15px",
                fontSize: isMobile ? "13px" : "14px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                style={{ width: "18px", height: "18px" }}
              />
              Sign up with Google
            </button>

            <div
              style={{
                textAlign: "center",
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              Don’t have an account yet?{" "}
              <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>
                Sign up
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Movie Collage */}
        <div
          style={{
            flex: 1,
            height: isMobile ? "200px" : "auto",
            backgroundImage: "url('/your-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginModal;
