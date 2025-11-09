import React, { useState } from "react";
import Footer from "../components/Footer";

const Genres = () => {
  const genres = ["Action", "Comedy", "Drama", "Horror"];

  const moviesByGenre = {
    Action: [
      { title: "Night Always", img: "./Pictures/NightAlways.png" },
      { title: "Play Diary", img: "./Pictures/PlayDiary.png" },
      { title: "Deep Cover", img: "./Pictures/Deepcover.png" },
      { title: "Ice Road", img: "./Pictures/IceRoad.png" },
      { title: "Kingdom", img: "./Pictures/Kingdom.png" },
      { title: "Back In Action", img: "./Pictures/BackinAction.png" },
      { title: "Pick Up", img: "./Pictures/Pickup.png" },
      { title: "Dirty Angels", img: "./Pictures/DirtyAngels.png" },
    ],
    Comedy: [
      { title: "IF", img: "./Pictures/If.png" },
      { title: "Wrong", img: "./Pictures/Wrong.png" },
      { title: "Love", img: "./Pictures/Love.png" },
      { title: "Twist", img: "./Pictures/Twist.png" },
      { title: "Friday", img: "./Pictures/Friday.png" },
      { title: "Hard", img: "./Pictures/Hard.png" },
      { title: "Vacation", img: "./Pictures/Vacation.png" },
      { title: "Head of State", img: "./Pictures/State.png" },
    ],
    Drama: [
      { title: "Steve", img: "./Pictures/Steve.png" },
      { title: "The Widow", img: "./Pictures/Widow.png" },
      { title: "Influence", img: "./Pictures/Influence.png" },
      { title: "Ruth & Boaz", img: "./Pictures/Ruth.png" },
      { title: "Order", img: "./Pictures/Order.png" },
      { title: "Culpa", img: "./Pictures/Culpa.png" },
      { title: "Spiderhead", img: "./Pictures/Spider.png" },
      { title: "Ballad", img: "./Pictures/Ballad.png" },
      { title: "Baaghi", img: "./Pictures/Bachii.png" },
      { title: "House", img: "./Pictures/House.png" },
    ],
    Horror: [
      { title: "The Conjuring", img: "./Pictures/Conjuring.png" },
      { title: "The woman in cabin 10", img: "./Pictures/The.png" },
      { title: "Ash", img: "./Pictures/Ash.png" },
      { title: "Megan", img: "./Pictures/Megan.png" },
      { title: "Evil Dead Rise", img: "./Pictures/Death.png" },
      { title: "Until Dawn", img: "./Pictures/Until.png" },
      { title: "Move", img: "./Pictures/Move.png" },
      { title: "Two", img: "./Pictures/Two.png" },
    ],
  };

  const [selectedGenre, setSelectedGenre] = useState("Action");

  const pageStyle = {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "60px 20px 40px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "32px",
    marginTop: "30px",
    marginBottom: "30px",
  };

  const genreContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "40px",
  };

  const genreButton = (active) => ({
    backgroundColor: active ? "red" : "#222",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
    hover: {
      backgroundColor: active ? "darkred" : "#333",
    },
  });

  const moviesContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    justifyItems: "center",
  };

  const movieCard = {
    width: "100%",
    maxWidth: "220px",
    backgroundColor: "#111",
    borderRadius: "10px",
    overflow: "hidden",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
    transition: "transform 0.3s",
    cursor: "pointer",
  };

  const movieImage = {
    width: "100%",
    height: "270px",
    objectFit: "cover",
    transition: "transform 0.3s",
  };

  const movieTitle = {
    fontSize: "16px",
    padding: "10px",
    color: "#fff",
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>
        Browse by <span style={{ color: "red", textDecoration: "underline" }}>Genre</span>
      </h2>

      <div style={genreContainer}>
        {genres.map((genre) => (
          <button
            key={genre}
            style={genreButton(selectedGenre === genre)}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={moviesContainer}>
        {(moviesByGenre[selectedGenre] || []).map((movie) => (
          <div
            key={movie.title}
            style={movieCard}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={movie.img} alt={movie.title} style={movieImage} />
            <p style={movieTitle}>{movie.title}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Genres;
