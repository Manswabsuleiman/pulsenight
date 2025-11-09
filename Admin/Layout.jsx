import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Load shows from localStorage
  const [shows, setShows] = useState(() => {
    const saved = localStorage.getItem("shows");
    return saved
      ? JSON.parse(saved)
      : [
          { title: "Pace River", price: "KES 1,300", img: "Drama1.png" },
          { title: "Dahmer", price: "KES 1,800", img: "Dahmer.png" },
          { title: "Conjuring", price: "KES 2,100", img: "Conjuring.png" },
          { title: "A S H", price: "KES 1,500", img: "Ash.png" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("shows", JSON.stringify(shows));
  }, [shows]);

  // New show input
  const [newShow, setNewShow] = useState({ title: "", price: "", img: "" });

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const base64Image = await convertToBase64(files[0]);
      setNewShow({ ...newShow, img: base64Image });
    } else {
      setNewShow({ ...newShow, [name]: value });
    }
  };

  const handleAddShow = () => {
    if (!newShow.title || !newShow.price || !newShow.img) {
      alert("Please fill all fields before adding!");
      return;
    }
    setShows([...shows, newShow]);
    setNewShow({ title: "", price: "", img: "" });
    setActiveSection("list");
  };

  const handleDeleteShow = (indexToDelete) => {
    if (window.confirm(`Delete show: ${shows[indexToDelete].title}?`)) {
      const updatedShows = shows.filter((_, index) => index !== indexToDelete);
      setShows(updatedShows);
    }
  };

  // -------------------
  // LOGIN LOGIC
  // -------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const attemptLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!email.trim() || !password) {
      setLoginError("Please provide both email and password.");
      return;
    }

    setLoginLoading(true);
    try {
      const HARD_CODED_EMAIL = "manswabjuma58@gmail.com";
      const HARD_CODED_PASSWORD = "Manswab@2003";
      if (email.trim() === HARD_CODED_EMAIL && password === HARD_CODED_PASSWORD) {
        setisLoggedIn(true);
        setEmail("");
        setPassword("");
        setLoginError("");
        setActiveSection("dashboard");
      } else {
        setLoginError("Invalid credentials ❌");
      }
    } catch (err) {
      setLoginError("Network error. Try again later.");
    } finally {
      setLoginLoading(false);
    }
  };

  const renderContent = () => {
    // --------------- LOGIN VIEW ---------------
    if (!isLoggedIn) {
      return (
        <div
          style={{
            maxWidth: "420px",
            margin: "60px auto",
            padding: "28px",
            backgroundColor: "#151515",
            borderRadius: "14px",
            border: "1px solid #2c2c2c",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              color: "#ff0044",
              marginBottom: "10px",
              textAlign: "center",
              fontSize: "1.6rem",
            }}
          >
            Admin Login
          </h2>
          <p style={{ color: "#bbb", marginBottom: "20px", textAlign: "center" }}>
            Sign in with your admin credentials.
          </p>

          <form onSubmit={attemptLogin}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              placeholder="you@example.com"
            />

            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="••••••••"
            />

            {loginError && (
              <div
                style={{
                  color: "#ffb3b3",
                  backgroundColor: "#330000",
                  padding: "10px",
                  borderRadius: "6px",
                  marginBottom: "12px",
                }}
              >
                {loginError}
              </div>
            )}

            <button
              type="submit"
              style={{
                ...buttonStyle,
                opacity: loginLoading ? 0.7 : 1,
                cursor: loginLoading ? "not-allowed" : "pointer",
              }}
              disabled={loginLoading}
            >
              {loginLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      );
    }

    // --------------- DASHBOARD SECTIONS ---------------
    switch (activeSection) {
      case "dashboard":
        return (
          <>
            {/* Top Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "20px",
              }}
            >
              <button
                onClick={() => setisLoggedIn(false)}
                style={logoutButtonStyle}
              >
                Logout
              </button>
            </div>

            <h1 style={{ color: "#ff0044", fontSize: "28px" }}>
              Admin <span style={{ color: "#fff" }}>Dashboard</span>
            </h1>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "30px",
              }}
            >
              {[
                { title: "Total Bookings", value: "10" },
                { title: "Total Revenue", value: "KES 67,965" },
                { title: "Active Shows", value: shows.length.toString() },
                { title: "Total Users", value: "1" },
              ].map((card, i) => (
                <div key={i} style={statCardStyle}>
                  <h4 style={statTitleStyle}>{card.title}</h4>
                  <p style={statValueStyle}>{card.value}</p>
                </div>
              ))}
            </div>

            {/* Active Shows */}
            <div style={{ marginTop: "50px" }}>
              <h2 style={{ color: "#ff0044", marginBottom: "20px" }}>
                Active Shows
              </h2>
              <div style={gridStyle}>
                {shows.map((show, i) => (
                  <div key={i} style={showCardStyle}>
                    <img
                      src={
                        show.img?.startsWith("data:")
                          ? show.img
                          : `./Pictures/${show.img}`
                      }
                      alt={show.title}
                      style={showImageStyle}
                    />
                    <div style={{ padding: "10px" }}>
                      <h4 style={{ margin: "5px 0", color: "#fff" }}>
                        {show.title}
                      </h4>
                      <p style={{ margin: "0", color: "#ff4c4c" }}>
                        {show.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "add":
        return (
          <div>
            <h1 style={{ color: "#ff0044" }}>Add New Show</h1>
            <div style={{ marginTop: "20px", maxWidth: "400px" }}>
              <input
                type="text"
                name="title"
                placeholder="Show Title"
                value={newShow.title}
                onChange={handleInputChange}
                style={inputStyle}
              />
              <input
                type="text"
                name="price"
                placeholder="Price (KES)"
                value={newShow.price}
                onChange={handleInputChange}
                style={inputStyle}
              />
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleInputChange}
                style={inputStyle}
              />
              <button onClick={handleAddShow} style={buttonStyle}>
                Add Show
              </button>
            </div>
          </div>
        );

      case "list":
        return (
          <div>
            <h1 style={{ color: "#ff0044" }}>All Shows</h1>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Title</th>
                  <th style={thStyle}>Price</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {shows.map((show, i) => (
                  <tr key={i}>
                    <td style={tdStyle}>{show.title}</td>
                    <td style={tdStyle}>{show.price}</td>
                    <td style={tdStyle}>Active</td>
                    <td style={tdStyle}>
                      <button
                        onClick={() => handleDeleteShow(i)}
                        style={deleteButtonStyle}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: window.innerWidth < 768 ? "column" : "row",
        minHeight: "100vh",
        backgroundColor: "#0e0e0e",
        fontFamily: "Poppins, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      {/* Sidebar Toggle for Mobile */}
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        style={{
          display: window.innerWidth < 768 ? "block" : "none",
          backgroundColor: "#ff0044",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "10px",
          width: "90%",
          margin: "15px auto",
          fontWeight: "bold",
        }}
      >
        {sidebarOpen ? "Hide Menu" : "Show Menu"}
      </button>

      {/* Sidebar */}
      <div
        style={{
          display:
            window.innerWidth < 768
              ? sidebarOpen
                ? "block"
                : "none"
              : "block",
          width: window.innerWidth < 768 ? "100%" : "260px",
          backgroundColor: "#1a1a1a",
          borderRight: "1px solid #2c2c2c",
          padding: "20px",
          transition: "all 0.3s ease",
        }}
      >
        <h2
          style={{
            color: "#ff0044",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Movie<span style={{ color: "#ff0000ff" }}>|Pulse</span>
        </h2>

        {[ 
          { name: "Dashboard", key: "dashboard" },
          { name: "Add Shows", key: "add" },
          { name: "List Shows", key: "list" },
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (isLoggedIn) setActiveSection(item.key);
              else alert("Please login first!");
            }}
            style={{
              backgroundColor:
                activeSection === item.key ? "#2c0c0c" : "transparent",
              color: activeSection === item.key ? "#ff0044" : "#ccc",
              padding: "10px 15px",
              borderRadius: "8px",
              marginBottom: "10px",
              cursor: isLoggedIn ? "pointer" : "not-allowed",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px" }}>{renderContent()}</div>
    </div>
  );
};

// ------------------ Reusable Styles ------------------
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #333",
  backgroundColor: "#0e0e0e",
  color: "#fff",
};
const labelStyle = { color: "#ccc", fontSize: "13px", marginBottom: "5px" };
const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#ff0044",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};
const logoutButtonStyle = {
  padding: "8px 16px",
  backgroundColor: "#ff0044",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};
const statCardStyle = {
  backgroundColor: "#1b1b1b",
  borderRadius: "12px",
  padding: "20px",
  width: "220px",
  border: "1px solid #2c2c2c",
};
const statTitleStyle = { color: "#ff4c4c", fontSize: "16px" };
const statValueStyle = { fontSize: "22px", fontWeight: "bold", color: "#fff" };
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
};
const showCardStyle = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid #2c2c2c",
};
const showImageStyle = { width: "100%", height: "250px", objectFit: "cover" };
const deleteButtonStyle = {
  padding: "6px 10px",
  backgroundColor: "#8b0000",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "12px",
};
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  color: "#fff",
  border: "1px solid #2c2c2c",
  marginTop: "20px",
};
const thStyle = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "1px solid #333",
  color: "#ff0044",
};
const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #2c2c2c",
  color: "#ccc",
};

export default Layout;
