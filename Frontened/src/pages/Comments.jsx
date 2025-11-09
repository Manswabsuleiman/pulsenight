import React from 'react'


const CommentsSection = () => {


  const comments = [
    {
      name: 'Samantha D.',
      text: `"The Crown" is seriously addictive! The drama, the history, the scandals—it’s all so captivating. And the cast? Absolutely brilliant! Can’t get enough of this royal rollercoaster!`,
      date: 'August 14, 2023',
    },
    {
      name: 'Jenny Wilson',
      text: `OMG, just binged "The Crown" and I'm obsessed! The drama, the history, the cast – it’s like a royal rollercoaster that I can’t get enough of. 10/10 would recommend for anyone looking for their next binge-worthy show!`,
      date: 'August 12, 2023',
    },
    {
      name: 'Leslie Alexander',
      text: `"The Crown" is an absolute binge-worthy masterpiece! It flawlessly combines history with drama, keeping viewers hooked with its gripping storytelling and stellar performances. A must-watch for anyone fascinated by the intricacies of royal life.`,
      date: 'August 14, 2023',
    },
    {
      name: 'Jenny Wilson',
      text: `OMG, just binged "The Crown" and I'm obsessed! The drama, the history, the cast – it’s like a royal rollercoaster that I can’t get enough of. 10/10 would recommend for anyone looking for their next binge-worthy show!`,
      date: 'August 12, 2023',
    },
  ]

  // ======= Styles =======
  const sectionStyle = {
    backgroundColor: '#0f0f0f',
    color: 'white',
    minHeight: '100vh',
    padding: '60px',
    fontFamily: 'Arial, sans-serif',
  }

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
  }

  const titleStyle = {
    fontSize: '26px',
    fontWeight: 'bold',
  }

  const subtitleStyle = {
    color: 'gray',
    fontSize: '15px',
    marginLeft: '8px',
  }

  const dropdownStyle = {
    backgroundColor: '#1a1a1a',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 14px',
    fontSize: '15px',
    cursor: 'pointer',
  }

  const commentsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  }

  const commentCard = {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '200px',
  }

  const starsStyle = {
    color: '#f5c518',
    fontSize: '18px',
    marginBottom: '10px',
  }

  const nameStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '8px',
  }

  const textStyle = {
    color: '#d3d3d3',
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '12px',
  }

  const dateStyle = {
    fontSize: '13px',
    color: 'gray',
  }

  const seeMoreButton = {
    display: 'block',
    backgroundColor: '#E50914',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '12px 28px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '40px auto 0 auto',
    transition: '0.3s',
  }

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={titleStyle}>Comments</h2>
          <span style={subtitleStyle}>1798 Comments</span>
        </div>
        <select style={dropdownStyle}>
          <option>Latest</option>
          <option>Top Rated</option>
          <option>Oldest</option>
        </select>
      </div>

      <div style={commentsGrid}>
        {comments.map((comment, index) => (
          <div key={index} style={commentCard}>
            <div>
              <div style={starsStyle}>★★★★★</div>
              <div style={nameStyle}>{comment.name}</div>
              <div style={textStyle}>{comment.text}</div>
            </div>
            <div style={dateStyle}>Posted on {comment.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CommentsSection
