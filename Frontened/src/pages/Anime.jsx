import React, { useState } from "react";
import Footer from "../components/Footer";

const Anime = () => {
  const [search, setSearch] = useState("");

  // Example anime list — you can replace with your data or API
  const animeList = [
    {
      id: 1,
      title: "Attack on Titan",
      genre: "Action",
      image:
        "./Pictures/Anime.png",
    },
    {
      id: 2,
      title: "Demon Slayer",
      genre: "Adventure",
      image:
        "./Pictures/Anime2.png",
    },
    {
      id: 3,
      title: "Jujutsu Kaisen",
      genre: "Fantasy",
      image:
        "./Pictures/Anime3.png",
    },
    {
      id: 4,
      title: "Naruto",
      genre: "Action",
      image:
        "./Pictures/Anime4.png",
    },
  ];

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        color: "white",
        marginTop: "50px",
      }}
    >
      {/* Page Header */}
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px" }}>
        Popular Anime
      </h1>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
            border: "none",
            width: "60%",
            outline: "none",
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Anime Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
        }}
      >
        {filteredAnime.map((anime) => (
          <div
            key={anime.id}
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
          >
            <img
              src={anime.image}
              alt={anime.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "8px" }}>{anime.title}</h3>
              <p style={{ color: "#aaa", fontSize: "0.9rem" }}>{anime.genre}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredAnime.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "30px", color: "#aaa" }}>
          No anime found for "{search}".
        </p>
      )}
      <Footer/>
    </div>
  );
};

export default Anime;
