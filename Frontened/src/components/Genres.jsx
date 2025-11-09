import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Genres = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const genres = [
    { name: 'Fantasy', img: './Pictures/Fantasy.png' },
    { name: 'Sitcom', img: './Pictures/Sitcom.png' },
    { name: 'Drama', img: './Pictures/Drama.png' },
    { name: 'Romance', img: './Pictures/Romance.png' },
  ];

  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    minHeight: '100vh',
    padding: windowWidth < 480 ? '20px 10px' : '40px 0',
  };

  const headingStyle = {
    color: 'red',
    marginBottom: windowWidth < 480 ? '15px' : '25px',
    fontSize: windowWidth < 480 ? '24px' : '32px',
    fontWeight: 'bold',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: windowWidth < 480 ? '15px' : '25px',
  };

  const cardStyle = {
    position: 'relative',
    width: windowWidth < 480 ? '140px' : windowWidth < 768 ? '160px' : '200px',
    height: windowWidth < 480 ? '180px' : windowWidth < 768 ? '210px' : '250px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(255,255,255,0.2)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    textAlign: 'center',
    padding: windowWidth < 480 ? '6px 0' : '10px 0',
    fontSize: windowWidth < 480 ? '14px' : '18px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  };

  const handleNavigate = (genreName) => {
    switch (genreName) {
      case 'Fantasy':
        navigate('/fantasy-details');
        break;
      case 'Sitcom':
        navigate('/sitcom-details');
        break;
      case 'Drama':
        navigate('/drama-details');
        break;
      case 'Romance':
        navigate('/romance-details');
        break;
      default:
        break;
    }
  };

  return (
    <div style={mainContainerStyle}>
      <h2 style={headingStyle}>Genres</h2>
      <div style={containerStyle}>
        {genres.map((genre, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => handleNavigate(genre.name)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={genre.img} alt={genre.name} style={imageStyle} />
            <div style={overlayStyle}>{genre.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
