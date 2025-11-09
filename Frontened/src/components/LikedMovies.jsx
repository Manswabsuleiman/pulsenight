import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LikedMovies = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const movies = [
    {
      src: "./Pictures/Dahmer.png",
      title: "Dahmer",
      genres: ["Crime", "Drama", "Thriller"],
      description:
        "The chilling story of Jeffrey Dahmer, one of the most notorious serial killers, exploring his psychology and the failures that enabled his crimes.",
      rating: "8.0",
      trailer:
        "https://www.youtube.com/watch?v=1PgKjIosF50&t=10s&pp=ygUTZGFobWVyIHRyYWlsZXIgMjAyNA%3D%3D",
    },
    {
      src: "./Pictures/Casablanca.png",
      title: "Casablanca",
      genres: ["Romance", "Drama", "Classic"],
      description:
        "In war-torn Morocco, a nightclub owner must choose between his love for a woman and helping her husband escape Nazi forces.",
      rating: "8.5",
      trailer:
        "https://www.youtube.com/watch?v=MF7JH_54d8c&pp=ygUSY2FzYWJsYW5jYSB0cmFpbGVy",
    },
    {
      src: "./Pictures/DarkNight.png",
      title: "The Dark Knight",
      genres: ["Action", "Crime", "Superhero"],
      description:
        "Batman faces his greatest psychological and moral challenge as he battles the Joker, a criminal mastermind intent on chaos.",
      rating: "9.0",
      trailer: "https://www.youtube.com/watch?v=TQfATDZY5Y4&pp=ygUXdGhlIGRhcmsga25pZ2h0IHRyYWlsZXI%3D",
    },
    {
      src: "./Pictures/AngryMan.png",
      title: "12 Angry Men",
      genres: ["Drama", "Courtroom", "Classic"],
      description:
        "A tense courtroom drama where one juror fights to convince others of a defendant's innocence against overwhelming odds.",
      rating: "9.2",
      trailer: "https://www.youtube.com/watch?v=rTmvY11m_0E&pp=ygURYW5ncnkgbWFuIHRyYWlsZXI%3D",
    },
  ];

  const containerStyle = {
    backgroundColor: "#0b0b0b",
    color: "white",
    minHeight: "100vh",
    padding: windowWidth < 480 ? "30px 15px" : windowWidth < 768 ? "50px 40px" : "60px 80px",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: windowWidth < 480 ? "column" : "row",
    justifyContent: "space-between",
    alignItems: windowWidth < 480 ? "flex-start" : "center",
    marginBottom: windowWidth < 480 ? "25px" : "40px",
    gap: windowWidth < 480 ? "10px" : "0",
  };

  const titleStyle = {
    fontSize: windowWidth < 480 ? "22px" : "30px",
    fontWeight: "bold",
    color: "#E50914",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const viewAllStyle = {
    fontSize: windowWidth < 480 ? "13px" : "15px",
    color: "red",
    cursor: "pointer",
    backgroundColor: "#000",
    border: "none",
  };

  const movieGridStyle = {
    display: "grid",
    gridTemplateColumns:
      windowWidth < 480
        ? "1fr"
        : windowWidth < 768
        ? "repeat(2, 1fr)"
        : "repeat(auto-fit, minmax(220px, 1fr))",
    gap: windowWidth < 480 ? "15px" : "25px",
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: windowWidth < 480 ? "220px" : "320px",
    objectFit: "cover",
  };

  const cardContentStyle = {
    padding: windowWidth < 480 ? "10px" : "15px",
  };

  const genreStyle = {
    fontSize: windowWidth < 480 ? "11px" : "13px",
    color: "#999",
    marginBottom: "8px",
  };

  const movieTitleStyle = {
    fontSize: windowWidth < 480 ? "16px" : "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const descriptionStyle = {
    fontSize: windowWidth < 480 ? "12px" : "14px",
    color: "#ccc",
    lineHeight: "1.4",
    marginBottom: "10px",
  };

  const ratingStyle = {
    backgroundColor: "#222",
    color: "#FFD700",
    padding: windowWidth < 480 ? "3px 6px" : "4px 8px",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: windowWidth < 480 ? "11px" : "13px",
    display: "inline-block",
  };

  const linkStyle = {
    marginLeft: windowWidth < 480 ? "0" : "80px",
    textDecoration: "none",
    color: "red",
    display: "inline-block",
    marginTop: "8px",
    fontSize: windowWidth < 480 ? "12px" : "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Maybe You Like This</h2>
        <button onClick={() => navigate("/movies")} style={viewAllStyle}>
          View All
        </button>
      </div>

      <div style={movieGridStyle}>
        {movies.map((movie, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={movie.src}
              alt={movie.title}
              style={imageStyle}
              onClick={() => window.open(movie.trailer, "_blank")}
            />
            <div style={cardContentStyle}>
              <div style={genreStyle}>{movie.genres.join(" • ")}</div>
              <h3 style={movieTitleStyle}>{movie.title}</h3>
              <p style={descriptionStyle}>{movie.description}</p>
              <span style={ratingStyle}>⭐ {movie.rating}</span>
              <a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Watch trailer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedMovies;
