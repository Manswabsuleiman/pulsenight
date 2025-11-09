import React, { useState, useEffect } from 'react'
import Comments from './Comments'

const DramaDetails = () => {
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

  const dramas = [
    {
      title: 'Peace River',
      year: '2022',
      image: './Pictures/Drama1.png',
      genre: 'Drama, Western, Faith-Based',
      time: '2h 13m',
      stars: 'Chase Garland, Jessica Nunez-Wood, Benjamin M. Jones',
      director: 'Doug James',
      network: 'Amazon Prime / Faith Films',
      rating: '7.3',
      trailer: 'https://www.youtube.com/watch?v=PU3lZNEnAs8',
      description:
        'A champion rodeo cowboy with a troubled past must find peace and purpose again when tragedy strikes. With faith, love, and forgiveness, he discovers that redemption can come even from the hardest losses.',
    },
    {
      title: 'Strive',
      year: '2019',
      image: './Pictures/Drama2.png',
      genre: 'Drama, Family, Inspirational',
      time: '1h 27m',
      stars: 'Danny Glover, JoiStaRR, Shayla Love Washington, Laurence Fishburne',
      director: 'Robert Rippberger',
      network: 'Harlem Films / Amazon',
      rating: '6.9',
      trailer: 'https://www.youtube.com/watch?v=_9RPZmo_vbo',
      description:
        'Kalani Johnson dreams of going to college, but life in Harlem tests her every step of the way. With mentorship and faith, she learns to overcome adversity and redefine success on her own terms.',
    },
    {
      title: "It's Lonely at the Top",
      year: '2023',
      image: './Pictures/Drama3.png',
      genre: 'Drama, Thriller',
      time: '1h 45m',
      stars: 'Taye Diggs, Keesha Sharp, Michael Ealy',
      director: 'Mark Brown',
      network: 'Independent',
      rating: '7.1',
      trailer: 'https://www.youtube.com/watch?v=mFaovBXtZwU',
      description:
        'A successful businessman’s rise to fame and fortune begins to unravel as lies, betrayal, and greed consume him. “It’s Lonely at the Top” exposes the cost of ambition and the emptiness behind power.',
    },
    {
      title: 'Philly Uncut',
      year: '2022',
      image: './Pictures/Drama4.png',
      genre: 'Drama, Crime',
      time: '2h 5m',
      stars: 'Brian Anthony Wilson, Gillie Da Kid, Wallo267, Neef Buck',
      director: 'Jamal Hill',
      network: 'Amazon Prime / Tubi',
      rating: '6.5',
      trailer: 'https://www.youtube.com/watch?v=WTJTSEEirKk',
      description:
        'Set in the gritty streets of Philadelphia, this intense urban drama follows two brothers caught between loyalty, crime, and survival. Every choice comes with a price — and not everyone makes it out alive.',
    },
    {
      title: 'Our Fault',
      year: '2023',
      image: './Pictures/OurFault.png',
      genre: 'Drama, Romance, Adaptation',
      time: '1h 57m',
      stars: 'Nicole Wallace, Gabriel Guevara, Marta Hazas',
      director: 'Domingo González',
      network: 'Prime Video (Amazon)',
      rating: '6.9',
      trailer: 'https://www.youtube.com/watch?v=RK_E4h6eYP0',
      description:
        'When Noah moves into her mother’s new boyfriend’s mansion, she never expects to fall for his rebellious son. Passion, secrets, and family tension collide in this intense Spanish romantic drama.',
    },
  ]

  // 🎨 Styles
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
    marginTop: "60px",
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
        {dramas.map((show, index) => {
          const isAdded = watchlist.includes(show.title)
          return (
            <div key={index} style={cardStyle}>
              <img src={show.image} alt={show.title} style={imgStyle} />
              <div style={details}>
                <h1 style={titleStyle}>{show.title}</h1>
                <p style={yearStyle}>{show.year}</p>
                <p style={infoStyle}>Genre: {show.genre}</p>
                <p style={infoStyle}>Time: {show.time}</p>
                <p style={infoStyle}>Stars: {show.stars}</p>
                <p style={infoStyle}>Director: {show.director}</p>
                <p style={infoStyle}>Network: {show.network}</p>

                <div style={ratingBox}>{show.rating}</div>

                <p style={descriptionStyle}>{show.description}</p>

                <div style={buttonContainer}>
                  <a href={show.trailer} target="_blank" rel="noopener noreferrer">
                    <button style={watchNowButton}>▶ Watch Now</button>
                  </a>
                  <button
                    style={{
                      ...watchlistButtonBase,
                      backgroundColor: isAdded ? 'white' : 'transparent',
                      color: isAdded ? 'black' : 'white',
                    }}
                    onClick={() => toggleWatchlist(show.title)}
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

export default DramaDetails
