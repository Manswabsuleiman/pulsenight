import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const staticMovies = [
  { title: "Conjuring", image: "Conjuring.png" },
  { title: "Dahmer", image: "Dahmer.png" },
  { title: "Angels", image: "Angels.png" },
  { title: "Avatar", image: "Avatar.png" },
  { title: "12 Angry Men", image: "AngryMan.png" },
  { title: "Ash", image: "Ash.png" },
  { title: "Bachii", image: "Bachii.png" },
  { title: "Back In Action", image: "BackinAction.png" },
  { title: "Ballad Smile Player", image: "Ballad.png" },
  { title: "Casablanca", image: "Casablanca.png" },
  { title: "Country Queen", image: "CountryQueen.png" },
  { title: "Culpa", image: "Culpa.png" },
  { title: "Dark Night", image: "DarkNight.png" },
  { title: "Evil and Rise", image: "Death.png" },
  { title: "Deepcover", image: "Deepcover.png" },
  { title: "Dirty Angels", image: "DirtyAngels.png" },
  { title: "Peace River", image: "Drama1.png" },
  { title: "Strive", image: "Drama2.png" },
  { title: "Inception", image: "Inception.png" },
  { title: "Incoming", image: "Incoming.png" },
  { title: "Influence", image: "Influence.png" },
  { title: "Inside Man", image: "InsideMan.png" },
  { title: "Cash Money", image: "KashMoney.png" },
  { title: "Kingdom", image: "Kingdom.png" },
  { title: "Loki", image: "Loki.png" },
];

const Movies = () => {
  const navigate = useNavigate();

  const getDynamicShows = () => {
    try {
      const savedShows = localStorage.getItem("shows");
      return savedShows ? JSON.parse(savedShows) : [];
    } catch {
      return [];
    }
  };

  const dynamicMovies = getDynamicShows().map(show => ({
    title: show.title,
    image: show.img,
  }));

  const staticTitles = new Set(staticMovies.map(movie => movie.title));
  const newDynamicMovies = dynamicMovies.filter(
    movie => !staticTitles.has(movie.title)
  );

  const allMovies = [...staticMovies, ...newDynamicMovies];

  const styles = {
    container: {
      backgroundColor: "#000",
      minHeight: "100vh",
      padding: "100px 20px 40px 20px",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontWeight: "600",
      marginBottom: "50px",
    },
    grid: {
      display: "grid",
      gap: "20px",
      justifyItems: "center",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    },
    card: {
      backgroundColor: "#111",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.4)",
      transition: "all 0.3s ease",
      width: "100%",
      maxWidth: "260px",
      textAlign: "center",
      cursor: "pointer",
    },
    image: {
      width: "100%",
      height: "320px",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.3s",
    },
    info: {
      padding: "15px 10px 25px",
    },
    titleText: {
      fontSize: "1.1rem",
      marginBottom: "10px",
    },
    button: {
      backgroundColor: "#e50914",
      color: "white",
      border: "none",
      padding: "10px 25px",
      borderRadius: "8px",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        🎬 Browse <span style={{ color: "red", textDecoration: "underline" }}>Shows & Movies</span>
      </h2>

      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}
      >
        {allMovies.map((movie, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 0, 0, 0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.4)";
            }}
          >
            <img
              src={movie.image.startsWith("data:") ? movie.image : `/Pictures/${movie.image}`}
              alt={movie.title}
              style={styles.image}
            />
            <div style={styles.info}>
              <h3 style={styles.titleText}>{movie.title}</h3>
              <button
                onClick={() =>
                  navigate(`/buy-tickets/${encodeURIComponent(movie.title)}`)
                }
                style={styles.button}
                onMouseEnter={e =>
                  (e.currentTarget.style.backgroundColor = "#ff1f27")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.backgroundColor = "#e50914")
                }
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
