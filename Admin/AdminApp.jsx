import React, { useState } from "react";
import Layout from "./components/Layout";
import AddShow from "./components/AddShow";
import ListShows from "./components/ListShows";

const AdminApp = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Add new movie to state
  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setActivePage("list");
  };

  // Render different content based on page
  const renderContent = () => {
    switch (activePage) {
      case "add":
        return <AddShow onAddMovie={handleAddMovie} />;
      case "list":
        return <ListShows movies={movies} />;
      default:
        return (
          <div
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <h2 style={{ fontSize: "1.8rem" }}>🎬 Welcome to Admin Dashboard</h2>
            <p style={{ color: "#ccc", marginTop: "8px" }}>
              Select a section from the sidebar to manage your shows.
            </p>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#0e0e0e",
        flexDirection: window.innerWidth < 768 ? "column" : "row",
        transition: "all 0.3s ease",
      }}
    >
      {/* Sidebar Toggle (Visible on Mobile) */}
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        style={{
          display: window.innerWidth < 768 ? "block" : "none",
          backgroundColor: "#ff9800",
          color: "#fff",
          border: "none",
          padding: "12px 16px",
          borderRadius: "6px",
          margin: "10px auto",
          cursor: "pointer",
          fontWeight: "bold",
          width: "90%",
        }}
      >
        {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
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
          backgroundColor: "#1b1b1b",
          borderRight: "1px solid #333",
          transition: "all 0.3s ease",
        }}
      >
        <Layout onNavigate={setActivePage} />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          background:
            "linear-gradient(to bottom right, #0e0e0e, #1c1c1c, #121212)",
          overflowY: "auto",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminApp;
