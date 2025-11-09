import React, { useState, useEffect } from 'react'
import Comments from './Comments'

const RomanceDetails = () => {
  const [watchlist, setWatchlist] = useState([])
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleWatchlist = (title) => {
    if (watchlist.includes(title)) {
      setWatchlist(watchlist.filter((item) => item !== title))
    } else {
      setWatchlist([...watchlist, title])
    }
  }

  const movies = [
    {
      title: 'My Oxford Year',
      year: 'Upcoming (2026)',
      image: './Pictures/Romance1.png',
      genre: 'Romance, Drama',
      time: '2h 05m',
      stars: 'Ella Hunt, Sam Claflin, Olivia Cooke',
      director: 'Melissa Miller Costanzo',
      network: 'Netflix',
      rating: 'N/A',
      trailer: 'https://www.youtube.com/watch?v=EKQPCiUSRAo',
      description:
        'An ambitious American student wins a scholarship to Oxford, only to fall for a charming local man. As she struggles to balance her future ambitions with unexpected love, she learns that some lessons are written by the heart.',
    },
    {
      title: 'The King’s Land',
      year: '2023',
      image: './Pictures/Romance2.png',
      genre: 'Historical, Romance, Drama',
      time: '2h 10m',
      stars: 'Mads Mikkelsen, Amanda Collin, Gustav Lindh',
      director: 'Nikolaj Arcel',
      network: 'Nordisk Film / Netflix',
      rating: '7.6',
      trailer: 'https://www.youtube.com/watch?v=AGF16szMOmo',
      description:
        'In 18th-century Denmark, a soldier-turned-settler struggles to tame wild lands under the rule of a merciless king. When love blossoms in the harsh wilderness, passion and politics collide in this sweeping romantic drama.',
    },
    {
      title: 'Forbidden Obsessions',
      year: '2024',
      image: './Pictures/Romance3.png',
      genre: 'Romance, Thriller',
      time: '1h 45m',
      stars: 'Ana de Armas, Theo James, Elizabeth Lail',
      director: 'David Frankel',
      network: 'Lionsgate',
      rating: '6.9',
      trailer: 'https://www.youtube.com/watch?v=WMfby82wwXk',
      description:
        'When an art curator begins an affair with a mysterious client, passion turns to peril as dark secrets and obsession threaten to destroy both their lives. Love, lust, and betrayal intertwine in this seductive romantic thriller.',
    },
    {
      title: 'LANDS',
      year: '2022',
      image: './Pictures/Romance4.png',
      genre: 'Romance, Drama, Music',
      time: '2h 2m',
      stars: 'Sofia Carson, Nicholas Galitzine, Linden Ashby',
      director: 'Elizabeth Allen Rosenbaum',
      network: 'Netflix',
      rating: '6.7',
      trailer: 'https://www.youtube.com/watch?v=EoedfX4MmzA',
      description:
        'A struggling musician marries a Marine for military benefits — but when tragedy strikes, their fake relationship blossoms into something real. A story about love, sacrifice, and the power of second chances.',
    },
    {
      title: 'Purple Hearts',
      year: 'Collection',
      image: './Pictures/Romance5.png',
      genre: 'Romance, Anthology',
      time: 'Various',
      stars: 'Multiple Casts',
      director: 'Various',
      network: 'Netflix',
      rating: '7.2',
      trailer: 'https://www.youtube.com/watch?v=WTLgg8oRSBE',
      description:
        'A heartfelt anthology of interconnected love stories across cities and decades — celebrating the beauty, chaos, and magic of romance in all its forms.',
    },
  ]

  // 🌹 Styles
  const pageWrapper = {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'url("./Pictures/FantasyBackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 0,
  }

  const contentContainer = {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    color: 'white',
  }

  const cardStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: isMobile ? '20px' : '30px',
    gap: '30px',
  }

  const imgStyle = {
    width: isMobile ? '100%' : '250px',
    height: isMobile ? 'auto' : '375px',
    borderRadius: '6px',
    objectFit: 'cover',
    marginBottom: isMobile ? '20px' : '0',
    boxShadow: '0 0 20px rgba(255,255,255,0.2)',
  }

  const details = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'center' : 'flex-start',
    textAlign: isMobile ? 'center' : 'left',
  }

  const titleStyle = {
    fontSize: isMobile ? '32px' : '46px',
    fontWeight: 'bold',
    marginBottom: '10px',
  }

  const yearStyle = {
    fontSize: isMobile ? '18px' : '22px',
    color: 'gray',
    marginBottom: '10px',
  }

  const infoStyle = {
    fontSize: isMobile ? '14px' : '16px',
    color: 'lightgray',
    marginBottom: '5px',
  }

  const ratingBox = {
    backgroundColor: '#f5c518',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '4px 10px',
    borderRadius: '4px',
    display: 'inline-block',
    margin: '15px 0 25px 0',
  }

  const descriptionStyle = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#e0e0e0',
    lineHeight: 1.6,
    maxWidth: '700px',
    marginBottom: '25px',
  }

  const buttonContainer = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '15px',
    width: isMobile ? '100%' : 'auto',
    justifyContent: isMobile ? 'center' : 'flex-start',
  }

  const watchNowButton = {
    backgroundColor: '#E50914',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '6px',
    fontSize: '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: isMobile ? '100%' : 'auto',
  }

  const watchlistButtonBase = {
    border: '2px solid white',
    padding: '12px 28px',
    borderRadius: '6px',
    fontSize: '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: isMobile ? '100%' : 'auto',
  }

  return (
    <div style={pageWrapper}>
      <div style={overlay}></div>
      <div style={contentContainer}>
        {movies.map((movie, index) => {
          const isAdded = watchlist.includes(movie.title)
          return (
            <div key={index} style={cardStyle}>
              <img src={movie.image} alt={movie.title} style={imgStyle} />
              <div style={details}>
                <h1 style={titleStyle}>{movie.title}</h1>
                <p style={yearStyle}>{movie.year}</p>
                <p style={infoStyle}>Genre: {movie.genre}</p>
                <p style={infoStyle}>Time: {movie.time}</p>
                <p style={infoStyle}>Stars: {movie.stars}</p>
                <p style={infoStyle}>Director: {movie.director}</p>
                <p style={infoStyle}>Network: {movie.network}</p>

                <div style={ratingBox}>{movie.rating}</div>

                <p style={descriptionStyle}>{movie.description}</p>

                <div style={buttonContainer}>
                  <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
                    <button style={watchNowButton}>▶ Watch Now</button>
                  </a>
                  <button
                    style={{
                      ...watchlistButtonBase,
                      backgroundColor: isAdded ? 'white' : 'transparent',
                      color: isAdded ? 'black' : 'white',
                    }}
                    onClick={() => toggleWatchlist(movie.title)}
                  >
                    {isAdded ? '✓ Added to Watchlist' : '+ Watchlist'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        <Comments />
      </div>
    </div>
  )
}

export default RomanceDetails
