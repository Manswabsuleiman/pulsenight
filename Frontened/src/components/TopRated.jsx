import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TopRated = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: windowWidth < 480 ? '30px 10px' : '50px 20px',
    backgroundImage: 'url("./Pictures/FantasyBackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
  };

  const titleStyle = {
    color: '#E50914',
    fontSize: windowWidth < 480 ? '28px' : windowWidth < 768 ? '36px' : '42px',
    fontWeight: 'bold',
    marginBottom: windowWidth < 480 ? '25px' : '40px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textAlign: 'center',
  };

  const movieGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: windowWidth < 480 ? '15px' : '30px',
    maxWidth: '1000px',
  };

  const movieCardStyle = {
    width: windowWidth < 480 ? '140px' : windowWidth < 768 ? '180px' : '220px',
    height: windowWidth < 480 ? '210px' : windowWidth < 768 ? '280px' : '330px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 25px rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const movies = [
    { src: './Pictures/Spiderman.png', title: 'Spiderman: No Way Home', path: '/spiderman-details' },
    { src: './Pictures/GuardianoftheGalaxy.png', title: 'Guardians of the Galaxy', path: '/guardian-details' },
    { src: './Pictures/Avatar.png', title: 'Avatar: The Way of Water', path: '/avatar-details' },
    { src: './Pictures/Venom.png', title: 'Venom: Let There Be Carnage', path: '/venom-details' },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Top Rated Movies</h2>

      <div style={movieGridStyle}>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={movieCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(229,9,20,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.1)';
            }}
            onClick={() => navigate(movie.path)}
            title={movie.title}
          >
            <img src={movie.src} alt={movie.title} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
