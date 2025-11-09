import React, { useState, useEffect } from 'react'
import Comments from './Comments'

const FantasyMovies = () => {
  const [watchlist, setWatchlist] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleWatchlist = (title) => {
    if (watchlist.includes(title)) {
      setWatchlist(watchlist.filter((item) => item !== title))
    } else {
      setWatchlist([...watchlist, title])
    }
  }

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const movies = [
    {
      title: 'Damsel',
      year: '2024',
      image: './Pictures/Fantasy1.png',
      genre: 'Fantasy, Adventure, Action',
      time: '1h 50m',
      stars: 'Millie Bobby Brown, Ray Winstone, Nick Robinson, Angela Bassett',
      director: 'Juan Carlos Fresnadillo',
      network: 'Netflix',
      rating: '7.1',
      trailer: 'https://www.youtube.com/watch?v=iM150ZWovZM',
      description:
        'A dutiful young woman agrees to marry a handsome prince, only to discover that the royal family plans to sacrifice her to a fire-breathing dragon as part of an ancient ritual. Trapped deep within the dragon’s lair, she must rely on her courage, intelligence, and sheer will to survive — transforming from a damsel in distress into the hero of her own legend.',
    },
    {
      title: 'Harry Potter',
      year: '2001–2011',
      image: './Pictures/Fantasy2.png',
      genre: 'Fantasy, Adventure',
      time: '2h 30m',
      stars: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman',
      director: 'Chris Columbus, Alfonso Cuarón, David Yates',
      network: 'Warner Bros.',
      rating: '8.5',
      trailer: 'https://www.youtube.com/watch?v=KnWJepe-nxE',
      description:
        'A young boy discovers he is a wizard on his 11th birthday and attends Hogwarts School of Witchcraft and Wizardry. There, he forges friendships, uncovers dark secrets, and faces the powerful dark lord who seeks to destroy him.',
    },
    {
      title: 'Evil',
      year: '2019–2024',
      image: './Pictures/Fantasy3.png',
      genre: 'Supernatural, Thriller, Mystery',
      time: '45m',
      stars: 'Katja Herbers, Mike Colter, Aasif Mandvi, Michael Emerson',
      director: 'Robert King, Michelle King',
      network: 'Paramount+',
      rating: '7.7',
      trailer: 'https://www.youtube.com/watch?v=_l4KXnKjw88',
      description:
        'A skeptical clinical psychologist teams up with a priest-in-training and a tech expert to investigate supposed supernatural occurrences. Together, they explore the thin line between science and religion — and the evil that lies between them.',
    },
    {
      title: 'Seventh Son',
      year: '2014',
      image: './Pictures/Fantasy4.png',
      genre: 'Fantasy, Action, Adventure',
      time: '1h 42m',
      stars: 'Jeff Bridges, Ben Barnes, Julianne Moore, Alicia Vikander',
      director: 'Sergey Bodrov',
      network: 'Legendary Pictures / Universal',
      rating: '5.5',
      trailer: 'https://www.youtube.com/watch?v=SaArm4Qupo8',
      description:
        'When the malevolent witch Mother Malkin escapes from her prison, Master Gregory must train a new apprentice, Tom Ward, to defeat her and her dark army before she unleashes chaos upon the world.',
    },
    {
      title: 'Yesterday',
      year: '2019',
      image: './Pictures/Fantasy5.png',
      genre: 'Fantasy, Comedy, Music, Romance',
      time: '1h 56m',
      stars: 'Himesh Patel, Lily James, Kate McKinnon, Ed Sheeran',
      director: 'Danny Boyle',
      network: 'Universal Pictures',
      rating: '6.8',
      trailer: 'https://www.youtube.com/watch?v=B97BFIqSvYA',
      description:
        'After a mysterious global blackout, struggling musician Jack Malik wakes up in a world where no one remembers The Beatles. Seizing the chance of a lifetime, he passes off their songs as his own — until fame and guilt collide.',
    },
  ]

  // Dynamic styles for responsiveness
  const mainContainer = {
    backgroundImage: 'url("./Pictures/FantasyBackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: windowWidth < 768 ? '20px' : '40px',
    color: 'white',
    position: 'relative',
  }

  const movieCard = {
    display: 'flex',
    flexDirection: windowWidth < 768 ? 'column' : 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxWidth: '1000px',
    width: '100%',
    padding: windowWidth < 768 ? '20px' : '30px',
    borderRadius: '12px',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: "60px",
    marginBottom: '40px',
  }

  const imageStyle = {
    width: windowWidth < 768 ? '100%' : '250px',
    height: windowWidth < 768 ? 'auto' : '375px',
    borderRadius: '6px',
    objectFit: 'cover',
    marginBottom: windowWidth < 768 ? '20px' : '0',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
  }

  const detailsStyle = {
    flex: 1,
    marginLeft: windowWidth < 768 ? '0' : '40px',
    textAlign: windowWidth < 768 ? 'center' : 'left',
  }

  const titleStyle = {
    fontSize: windowWidth < 768 ? '32px' : '46px',
    fontWeight: 'bold',
    color: 'white',
    margin: 0,
  }

  const yearStyle = {
    fontSize: windowWidth < 768 ? '18px' : '22px',
    color: 'gray',
    marginLeft: windowWidth < 768 ? '0' : '12px',
  }

  const infoStyle = {
    fontSize: windowWidth < 768 ? '14px' : '16px',
    lineHeight: '1.6',
    color: 'lightgray',
    marginBottom: '5px',
  }

  const descriptionStyle = {
    fontSize: windowWidth < 768 ? '14px' : '16px',
    lineHeight: '1.6',
    color: '#e0e0e0',
    marginBottom: '25px',
    maxWidth: windowWidth < 768 ? '100%' : '700px',
  }

  const buttonContainer = {
    display: 'flex',
    flexDirection: windowWidth < 768 ? 'column' : 'row',
    gap: '15px',
    alignItems: windowWidth < 768 ? 'center' : 'flex-start',
  }

  const watchNowButtonStyle = {
    backgroundColor: '#E50914',
    color: 'white',
    border: 'none',
    padding: windowWidth < 768 ? '10px 20px' : '12px 28px',
    borderRadius: '6px',
    fontSize: windowWidth < 768 ? '15px' : '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  }

  const watchlistButtonBase = {
    border: '2px solid white',
    padding: windowWidth < 768 ? '10px 20px' : '12px 28px',
    borderRadius: '6px',
    fontSize: windowWidth < 768 ? '15px' : '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  }

  const backHomeStyle = {
    position: 'absolute',
    top: windowWidth < 768 ? '15px' : '30px',
    left: windowWidth < 768 ? '20px' : '40px',
    fontSize: windowWidth < 768 ? '16px' : '18px',
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  }

  return (
    <div style={mainContainer}>
      <a href="/" style={backHomeStyle}>
        &lt; Back home
      </a>

      {movies.map((movie, index) => {
        const isAdded = watchlist.includes(movie.title)
        return (
          <div key={index} style={movieCard}>
            <img src={movie.image} alt={`${movie.title} Poster`} style={imageStyle} />
            <div style={detailsStyle}>
              <div style={{ display: 'flex', flexDirection: windowWidth < 768 ? 'column' : 'row', alignItems: 'flex-end', justifyContent: windowWidth < 768 ? 'center' : 'flex-start', marginBottom: '10px' }}>
                <h1 style={titleStyle}>{movie.title}</h1>
                <p style={yearStyle}>{movie.year}</p>
              </div>
              <p style={infoStyle}>Genre: {movie.genre}</p>
              <p style={infoStyle}>Time: {movie.time}</p>
              <p style={infoStyle}>Stars: {movie.stars}</p>
              <p style={infoStyle}>Directed by: {movie.director}</p>
              <p style={infoStyle}>Network: {movie.network}</p>

              <div style={{ ...infoStyle, backgroundColor: '#f5c518', color: 'black', fontWeight: 'bold', fontSize: windowWidth < 768 ? '14px' : '16px', padding: '4px 10px', borderRadius: '4px', display: 'inline-block', margin: '15px 0 25px 0' }}>
                {movie.rating}
              </div>

              <p style={descriptionStyle}>{movie.description}</p>

              <div style={buttonContainer}>
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button style={watchNowButtonStyle}>▶ Watch Now</button>
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
  )
}

export default FantasyMovies
