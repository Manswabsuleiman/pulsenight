import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SpidermanDetails = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 🎬 Watchlist functionality
  const handleAddToWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    const movie = {
      id: "spiderman2021",
      title: "Spider-Man: No Way Home"
    }

    if (!watchlist.some(m => m.id === movie.id)) {
      watchlist.push(movie)
      localStorage.setItem('watchlist', JSON.stringify(watchlist))
      alert(`${movie.title} added to watchlist!`)
    } else {
      alert(`${movie.title} is already in your watchlist.`)
    }
  }

  // 🎨 Inline Styles
  const mainContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    marginTop: '60px',
    padding: '20px',
    backgroundImage: 'url("./Pictures/FantasyBackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
  }

  const contentBox = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1000px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '12px',
    padding: isMobile ? '20px' : '30px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(6px)',
    gap: isMobile ? '20px' : '40px',
  }

  const imageStyle = {
    width: isMobile ? '100%' : '350px',
    height: isMobile ? 'auto' : '500px',
    borderRadius: '10px',
    objectFit: 'cover',
    cursor: 'pointer',
    boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
  }

  const detailsStyle = {
    flex: 1,
    marginLeft: isMobile ? '0' : '40px',
    textAlign: isMobile ? 'center' : 'left',
  }

  const titleStyle = {
    fontSize: isMobile ? '28px' : '40px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#E50914',
  }

  const descriptionStyle = {
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: '1.6',
    marginBottom: '25px',
    color: '#f1f1f1',
  }

  const buttonContainer = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '15px',
    marginBottom: '25px',
    width: isMobile ? '100%' : 'auto',
    justifyContent: isMobile ? 'center' : 'flex-start',
  }

  const watchButtonStyle = {
    backgroundColor: '#E50914',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
    width: isMobile ? '100%' : 'auto',
  }

  const watchlistButtonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '12px 25px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
    width: isMobile ? '100%' : 'auto',
  }

  const statsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: 'center',
    gap: '10px',
    fontSize: isMobile ? '14px' : '16px',
  }

  const starStyle = {
    color: '#FFD700',
    fontSize: isMobile ? '18px' : '20px',
  }

  return (
    <div style={mainContainer}>
      <div style={contentBox}>
        {/* 🎬 Movie Poster */}
        <img
          onClick={() => navigate('/')}
          src="./Pictures/Spiderman.png"
          alt="Spiderman"
          style={imageStyle}
        />

        {/* 📜 Movie Details */}
        <div style={detailsStyle}>
          <h1 style={titleStyle}>Spider-Man: No Way Home</h1>
          <p style={descriptionStyle}>
            Peter Parker's identity as Spider-Man is exposed to the world, causing chaos in his life.
            Seeking help from Doctor Strange, a spell goes horribly wrong, breaking open the multiverse
            and bringing villains from other dimensions. Peter must face his greatest challenges yet —
            while learning what it truly means to be Spider-Man.
          </p>

          <div style={buttonContainer}>
            <a
              href="https://www.youtube.com/watch?v=JfVOs4VSpmA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button style={watchButtonStyle}>▶ Watch Trailer</button>
            </a>
            <button style={watchlistButtonStyle} onClick={handleAddToWatchlist}>
              + Add to Watchlist
            </button>
          </div>

          <div style={statsStyle}>
            <span style={starStyle}>⭐</span>
            <span style={starStyle}>⭐</span>
            <span style={starStyle}>⭐</span>
            <span style={starStyle}>⭐</span>
            <span style={starStyle}>⭐</span>
            <span>IMDb 8.7 | 2.3M Reviews</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpidermanDetails
