import React, { useState } from 'react'
import Comments from './Comments'

const SitcomDetails = () => {
  const [watchlist, setWatchlist] = useState([])

  const toggleWatchlist = (title) => {
    if (watchlist.includes(title)) {
      setWatchlist(watchlist.filter((item) => item !== title))
    } else {
      setWatchlist([...watchlist, title])
    }
  }

  const sitcoms = [
    {
      title: "We're the Millers",
      year: '2013',
      image: './Pictures/Sitcom1.png',
      genre: 'Comedy, Crime, Adventure',
      time: '1h 50m',
      stars: 'Jason Sudeikis, Jennifer Aniston, Emma Roberts, Will Poulter',
      director: 'Rawson Marshall Thurber',
      network: 'Warner Bros.',
      rating: '7.0',
      trailer: 'https://www.youtube.com/watch?v=0Vsy5KzsieQ',
      description:
        "A small-time pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico. But his 'family vacation' quickly spirals out of control in this hilarious action-comedy.",
    },
    {
      title: "Tyler Perry's Madea",
      year: '2005–2023',
      image: './Pictures/Sitcom2.png',
      genre: 'Comedy, Drama, Family',
      time: 'Varies',
      stars: 'Tyler Perry, Cassi Davis, Patrice Lovely, David Mann',
      director: 'Tyler Perry',
      network: 'Lionsgate',
      rating: '6.5',
      trailer: 'https://www.youtube.com/watch?v=60befdTWmG8',
      description:
        "Madea, the tough-talking, gun-toting grandmother created by Tyler Perry, always brings wisdom, chaos, and comedy to every situation. From family drama to laugh-out-loud misadventures, Madea reminds everyone who’s boss.",
    },
    {
      title: 'Day Shift',
      year: '2022',
      image: './Pictures/Sitcom3.png',
      genre: 'Action, Comedy, Fantasy',
      time: '1h 53m',
      stars: 'Jamie Foxx, Dave Franco, Natasha Liu Bordizzo, Snoop Dogg',
      director: 'J.J. Perry',
      network: 'Netflix',
      rating: '6.1',
      trailer: 'https://www.youtube.com/watch?v=GN_IwBptKi4',
      description:
        "A hardworking dad just wants to provide for his daughter — but his boring pool-cleaning job is a front for his real gig: hunting and killing vampires in Los Angeles. Wild, funny, and full of over-the-top action.",
    },
    {
      title: 'Game Over, Man!',
      year: '2018',
      image: './Pictures/Sitcom4.png',
      genre: 'Comedy, Action',
      time: '1h 41m',
      stars: 'Adam Devine, Anders Holm, Blake Anderson, Neal McDonough',
      director: 'Kyle Newacheck',
      network: 'Netflix',
      rating: '5.4',
      trailer: 'https://www.youtube.com/watch?v=u7ZHi_dDSnQ',
      description:
        "Three friends on the verge of getting their video game financed find themselves in a real-life hostage situation. Armed with their absurd ideas and zero experience, they must save the day — or die trying.",
    },
    {
      title: 'Sextuplets',
      year: '2019',
      image: './Pictures/Sitcom5.png',
      genre: 'Comedy',
      time: '1h 39m',
      stars: 'Marlon Wayans, Bresha Webb, Michael Ian Black, Molly Shannon',
      director: 'Michael Tiddes',
      network: 'Netflix',
      rating: '4.5',
      trailer: 'https://www.youtube.com/watch?v=e0LJNn-GcnY',
      description:
        "A soon-to-be father discovers he’s actually one of six siblings and sets out on a wild journey to meet his long-lost family — all played by Marlon Wayans. Expect chaos, laughs, and a whole lot of disguises.",
    },
  ]

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundImage: 'url("./Pictures/FantasyBackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
  }

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: "60px",
    maxWidth: '1000px',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    marginBottom: '40px',
    padding: '30px',
    gap: '30px',
  }

  const imgStyle = {
    width: '250px',
    height: '375px',
    borderRadius: '6px',
    objectFit: 'cover',
    boxShadow: '0 0 20px rgba(255,255,255,0.2)',
  }

  const detailsStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }

  const titleStyle = {
    fontSize: '46px',
    marginBottom: '10px',
  }

  const yearStyle = {
    fontSize: '22px',
    color: 'gray',
    marginBottom: '10px',
  }

  const infoStyle = {
    fontSize: '16px',
    color: 'lightgray',
    marginBottom: '5px',
  }

  const ratingStyle = {
    display: 'inline-block',
    backgroundColor: '#f5c518',
    color: 'black',
    fontWeight: 'bold',
    padding: '4px 10px',
    borderRadius: '4px',
    margin: '15px 0 25px 0',
  }

  const descStyle = {
    fontSize: '16px',
    color: '#e0e0e0',
    marginBottom: '25px',
    maxWidth: '700px',
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  }

  const watchNowStyle = {
    backgroundColor: '#E50914',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '6px',
    fontSize: '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }

  const watchlistBaseStyle = {
    border: '2px solid white',
    padding: '12px 28px',
    borderRadius: '6px',
    fontSize: '17px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: 'white',
  }

  // Media query for mobile
  const mobileCardStyle = {
    ...cardStyle,
    flexDirection: 'column',
    padding: '20px',
  }

  const mobileImgStyle = {
    ...imgStyle,
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  }

  const mobileTitleStyle = {
    ...titleStyle,
    fontSize: '32px',
    textAlign: 'center',
  }

  const mobileYearStyle = {
    ...yearStyle,
    fontSize: '18px',
    textAlign: 'center',
  }

  const mobileInfoStyle = {
    ...infoStyle,
    fontSize: '14px',
    textAlign: 'center',
  }

  const mobileDescStyle = {
    ...descStyle,
    fontSize: '14px',
    textAlign: 'center',
  }

  const mobileButtonContainer = {
    ...buttonContainerStyle,
    flexDirection: 'column',
    alignItems: 'center',
  }

  const mobileWatchButtonStyle = {
    ...watchNowStyle,
    width: '100%',
    textAlign: 'center',
  }

  const mobileWatchlistStyle = {
    ...watchlistBaseStyle,
    width: '100%',
    textAlign: 'center',
  }

  const isMobile = window.innerWidth <= 768

  return (
    <div style={pageStyle}>
      {sitcoms.map((show, index) => {
        const isAdded = watchlist.includes(show.title)
        return (
          <div key={index} style={isMobile ? mobileCardStyle : cardStyle}>
            <img
              src={show.image}
              alt={`${show.title} Poster`}
              style={isMobile ? mobileImgStyle : imgStyle}
            />
            <div style={detailsStyle}>
              <h1 style={isMobile ? mobileTitleStyle : titleStyle}>{show.title}</h1>
              <p style={isMobile ? mobileYearStyle : yearStyle}>{show.year}</p>
              <p style={isMobile ? mobileInfoStyle : infoStyle}>Genre: {show.genre}</p>
              <p style={isMobile ? mobileInfoStyle : infoStyle}>Time: {show.time}</p>
              <p style={isMobile ? mobileInfoStyle : infoStyle}>Stars: {show.stars}</p>
              <p style={isMobile ? mobileInfoStyle : infoStyle}>Director: {show.director}</p>
              <p style={isMobile ? mobileInfoStyle : infoStyle}>Network: {show.network}</p>

              <div style={ratingStyle}>{show.rating}</div>

              <p style={isMobile ? mobileDescStyle : descStyle}>{show.description}</p>

              <div style={isMobile ? mobileButtonContainer : buttonContainerStyle}>
                <a href={show.trailer} target="_blank" rel="noopener noreferrer">
                  <button style={isMobile ? mobileWatchButtonStyle : watchNowStyle}>▶ Watch Now</button>
                </a>
                <button
                  style={{
                    ...(isMobile ? mobileWatchlistStyle : watchlistBaseStyle),
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
  )
}

export default SitcomDetails
