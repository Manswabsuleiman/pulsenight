import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const descriptionStyle = {
    position: 'absolute',
    top: windowWidth < 768 ? '10%' : windowWidth < 1024 ? '20%' : '50%',
    left: windowWidth < 768 ? '5%' : '10%',
    transform: windowWidth < 768 ? 'none' : 'translateY(-50%)',
    color: 'white',
    fontSize: windowWidth < 480 ? '16px' : windowWidth < 768 ? '18px' : windowWidth < 1024 ? '20px' : '23px',
    textAlign: 'left',
    maxWidth: windowWidth < 768 ? '90%' : windowWidth < 1024 ? '300px' : '400px',
    padding: windowWidth < 768 ? '1rem' : '2rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(0,0,0,0.3)', // make background more transparent
    overflow: 'hidden',
    marginTop: "240px",
    marginRight: "70px",
  };

  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: windowWidth < 480 ? '0.5rem 1rem' : windowWidth < 768 ? '0.6rem 1.2rem' : '0.7rem 1.5rem',
    fontWeight: 'bold',
    marginRight: windowWidth < 768 ? '0' : '1rem',
    marginBottom: windowWidth < 768 ? '1rem' : '0',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    width: windowWidth < 768 ? '100%' : 'auto',
    textAlign: 'center',
  };

  const buttonsContainerStyle = {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: windowWidth < 768 ? 'column' : 'row',
    gap: windowWidth < 768 ? '1rem' : '0',
  };

  return (
    <div style={containerStyle}>
      <img src="./Pictures/backgroundImage.png" alt="Background" style={imageStyle} />
      <div style={descriptionStyle}>
        <h3>Welcome to Movie | Pulse</h3>
        <p>Explore the latest movies, anime, and exclusive subscriptions in one place!</p>
        <div style={buttonsContainerStyle}>
          <button
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'darkred'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'red'}
          >
            Watch Now
          </button>
          <button
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'darkred'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'red'}
          >
            Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
