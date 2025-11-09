import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyTickets = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  // Movie posters
  const movieImages = {
    "Conjuring": "Conjuring.png",
    "Dahmer": "Dahmer.png",
    "Angels": "Angels.png",
    "Avatar": "Avatar.png",
    "12 Angry Men": "AngryMan.png",
    "Ash": "Ash.png",
    "Bachii": "Bachii.png",
    "Back In Action": "BackinAction.png",
    "Ballad Smile Player": "Ballad.png",
    "Casablanca": "Casablanca.png",
    "Country Queen": "CountryQueen.png",
    "Culpa": "Culpa.png",
    "Dark Night": "DarkNight.png",
    "Evil and Rise": "Death.png",
    "Deepcover": "Deepcover.png",
    "Dirty Angels": "DirtyAngels.png",
    "Peace River": "Drama1.png",
    "Strive": "Drama2.png",
    "Inception": "Inception.png",
    "Incoming": "Incoming.png",
    "Influence": "Influence.png",
    "Inside Man": "InsideMan.png",
    "Cash Money": "KashMoney.png",
    "Kingdom": "Kingdom.png",
    "Loki": "Loki.png",
    "Its lonely at the Top": "Drama3.png",
    "Philly Uncut": "Drama4.png",
    "Fantasy": "Fantasy1.png",
    "Harry Potter": "Fantasy2.png",
    "Death": "Fantasy3.png",
    "Evil": "Fantasy4.png",
    "Fast and Furious": "Fastandfurious.png",
    "Fiction": "Fiction.png",
    "Friday": "Friday.png",
    "Furioza": "Furioza.png",
    "Gen V": "GenV.png",
    "God Father": "Godfather.png",
    "Guardian of the Galaxy": "GuardianoftheGalaxy.png",
    "Hard": "Hard.png",
    "Havoc": "Havoc.png",
    "House": "House.png",
    "Ice Road": "IceRoad.png",
    "If": "If.png",
    "Love": "Love.png",
    "Megan": "Megan.png",
    "Night Always": "NightAlways.png",
    "Nonna": "Nonna.png",
    "Our Fault": "OurFault.png",
    "Order": "Order.png",
    "Parasite": "Parasite.png",
    "The Wrong Paris": "Wrong.png",
    "Play Diary": "PlayDiary.png",
    "Rick Morty": "RickMorty.png",
    "My Oxford Year": "Romance1.png",
    "Netflix": "Romance2.png",
    "The Kingdom Land": "Romance3.png",
    "Forbidden Obsession": "Romance4.png",
    "Purple Hearts": "Romance5.png",
    "We're The Millers": "Sitcom1.png",
    "Madeas": "Sitcom2.png",
    "Day Shift": "Sitcom3.png",
    "Sextuplets": "Sitcom5.png",
    "A Widow's Game": "Widow.png",
  };

  // Prices
  const moviePrices = {
    "Conjuring": 1800, "Dahmer": 1500, "Angels": 2500, "Avatar": 1100,
    "12 Angry Men": 1500, "Ash": 3550, "Bachii": 2600, "Back In Action": 1750,
    "Ballad Smile Player": 1550, "Casablanca": 1200, "Country Queen": 1250,
    "Culpa": 13600, "Dark Night": 1300, "Evil and Rise": 1150, "Deepcover": 1650,
    "Dirty Angels": 1750, "Peace River": 1550, "Strive": 1600, "Inception": 1800,
    "Incoming": 1650, "Influence": 1700, "Inside Man": 1750, "Cash Money": 1650,
    "Kingdom": 1400, "Loki": 1150, "Its lonely at the Top": 1550, "Philly Uncut": 1100,
    "Fantasy": 1650, "Harry Potter": 1800, "Death": 1700, "Evil": 1750, "Fast and Furious": 1850,
    "Fiction": 1650, "Friday": 1550, "Furioza": 1700, "Gen V": 1650, "God Father": 1850,
    "Guardian of the Galaxy": 1900, "Hard": 1650, "Havoc": 1700, "House": 1550,
    "Ice Road": 1600, "If": 1500, "Love": 1550, "Megan": 1700, "Night Always": 1650,
    "Nonna": 1600, "Our Fault": 1150, "Order": 1650, "Parasite": 1800, "The Wrong Paris": 1100,
    "Play Diary": 1250, "Rick Morty": 1550, "My Oxford Year": 1550, "Netflix": 1500,
    "The Kingdom Land": 1600, "Forbidden Obsession": 2250, "Purple Hearts": 1550,
    "We're The Millers": 1600, "Madeas": 1450, "Day Shift": 1340, "Sextuplets": 1150,
    "A Widow's Game": 1900,
  };

  // Cast
  const movieCasts = {
    "Evil and Rise": [
      "/Pictures/EvilCast1.png",
      "/Pictures/EvilCast2.png",
      "/Pictures/EvilCast3.png",
      "/Pictures/EvilCast4.png",
      "/Pictures/EvilCast5.png",
    ],
    "Evil": [
      "/Pictures/EvilCast1.png",
      "/Pictures/EvilCast2.png",
      "/Pictures/EvilCast3.png",
      "/Pictures/EvilCast4.png",
      "/Pictures/EvilCast5.png",
    ],
  };

  const imagePath = `/Pictures/${movieImages[title] || "default.png"}`;
  const castImages = movieCasts[title] || [];
  const price = moviePrices[title] || 600;
  const [selectedDate, setSelectedDate] = useState("");

  const handleBooking = () => {
    if (!selectedDate) {
      toast.error("⚠ Please select a date before proceeding.", { position: "top-right" });
      return;
    }
    toast.success(`✅ Booking confirmed for ${title} on ${selectedDate}!`, { position: "top-right" });
  };

  const styles = {
    container: {
      backgroundColor: "#111",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      fontFamily: "Poppins, sans-serif",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      gap: "40px",
      backgroundColor: "#1a1a1a",
      borderRadius: "16px",
      padding: "40px",
      width: "100%",
      maxWidth: "1100px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      maxWidth: "350px",
      height: "auto",
      borderRadius: "12px",
      objectFit: "cover",
      boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    },
    details: {
      flex: "1",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      fontSize: "2rem",
      color: "#ff4444",
      marginBottom: "10px",
    },
    price: {
      fontSize: "1.2rem",
      color: "#ffcc00",
      marginBottom: "20px",
    },
    text: {
      fontSize: "1rem",
      color: "#ccc",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    label: { marginBottom: "10px", fontSize: "1rem", color: "#fff" },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #444",
      backgroundColor: "#222",
      color: "#fff",
      fontSize: "1rem",
      marginBottom: "25px",
    },
    buttonContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "10px",
    },
    button: {
      backgroundColor: "#e50914",
      border: "none",
      padding: "12px 30px",
      borderRadius: "8px",
      color: "#fff",
      cursor: "pointer",
      transition: "0.3s",
    },
    castSection: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "30px",
      alignItems: "center",
    },
    castImage: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #ff4444",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img src={imagePath} alt={title} style={styles.image} />
        <div style={styles.details}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.price}>🎟️ Price: <strong>{price.toLocaleString()} KSH</strong></p>
          <p style={styles.text}>
            You’re booking tickets for <strong>{title}</strong>. Choose your preferred date, seats,
            and time — then proceed to payment to enjoy your movie experience.
          </p>

          <label htmlFor="date" style={styles.label}>Select Viewing Date:</label>
          <input
            id="date"
            type="date"
            style={styles.input}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />

          <p style={styles.text}>
            Showtime: <strong>7:30 PM</strong> <br /> Cinema: <strong>Downtown Screen 2</strong>
          </p>

          <div style={styles.buttonContainer}>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff1f27")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e50914")}
              onClick={handleBooking}
            >
              Book Now
            </button>

            <button
              onClick={() => navigate("/payment")}
              style={{ ...styles.button, backgroundColor: "#ff1f27" }}
            >
              Pay Ticket
            </button>
          </div>

          {/* 🎭 Cast Section */}
          <div style={styles.castSection}>
            {castImages.length > 0 ? (
              castImages.map((img, i) => (
                <img key={i} src={img} alt={`Cast ${i + 1}`} style={styles.castImage} />
              ))
            ) : (
              <p style={{ color: "#aaa" }}>No cast information available.</p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BuyTickets;
