import React from 'react'
import Homepage from '../components/Homepage'
import Genres from '../components/Genres'
import TopRated from '../components/TopRated'
import LikedMovies from '../components/LikedMovies'
import Membership from '../components/Membership'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Homepage/>
        <Genres/>
        <TopRated/>
        <LikedMovies/>
        <Membership/>
        <Footer/>
    </div>
  )
}

export default Home