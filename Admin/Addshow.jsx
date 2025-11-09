import React, { useState } from "react";

const AddShow = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newMovie = {
      id: Date.now(),
      title,
      poster,
    };

    onAddMovie(newMovie);
    setTitle("");
    setPoster("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "90%",
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "16px",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        color: "#fff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        backdropFilter: "blur(6px)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px", fontSize: "1.4rem" }}>
        🎬 Add New Show
      </h3>

      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          outline: "none",
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "#fff",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#ff9800")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <input
        type="text"
        placeholder="Poster URL"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          outline: "none",
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "#fff",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#ff9800")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <button
        type="submit"
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          background: "linear-gradient(135deg, #ff9800, #ff5722)",
          color: "#fff",
          transition: "transform 0.2s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.03)";
          e.target.style.boxShadow = "0 4px 10px rgba(255, 87, 34, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "none";
        }}
      >
        ➕ Add Show
      </button>
    </form>
  );
};

export default AddShow;
