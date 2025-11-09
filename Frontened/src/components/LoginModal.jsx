import React from "react";

const LoginModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#0b0b0b",
          color: "#fff",
          width: "90%",
          maxWidth: "800px",
          height: "500px",
          display: "flex",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 25px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side - Login form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "350px" }}>
            <h2 style={{ color: "#fff", marginBottom: "25px" }}>
              <span style={{ color: "red" }}>Welcome</span> back
            </h2>

            <div style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "10px",
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
                  padding: "10px",
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
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              <label>
                <input type="checkbox" style={{ marginRight: "5px" }} /> Remember me
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
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Login
            </button>

            <div
              style={{
                textAlign: "center",
                color: "#aaa",
                marginBottom: "20px",
              }}
            >
              OR
            </div>

            <div style={{ textAlign: "center", fontSize: "14px" }}>
              Don’t have an account yet?{" "}
              <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>
                Sign up
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div
          style={{
            flex: 1,
            backgroundImage: "url('./Pictures/Conjuring.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "25px",
            background: "transparent",
            color: "#fff",
            fontSize: "24px",
            border: "none",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
