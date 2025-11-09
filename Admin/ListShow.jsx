import React from "react";

const ListShows = ({ movies }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>All Movies</h3>

      {movies.length === 0 ? (
        <p style={styles.empty}>No movies yet.</p>
      ) : (
        <div style={styles.gridContainer}>
          {movies.map((movie) => (
            <div key={movie.id} style={styles.card}>
              {movie.poster && (
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={styles.image}
                />
              )}
              <h4 style={styles.title}>{movie.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 🎨 Inline responsive styles
const styles = {
  container: {
    color: "white",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#ff0044",
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
    color: "#aaa",
    marginTop: "40px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#1b1b1b",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    transition: "transform 0.3s ease, background 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
  },
};

// Add hover effect with JS
styles.card[":hover"] = {
  transform: "scale(1.05)",
  backgroundColor: "#222",
};

export default ListShows;
