
import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import LikeDislikeButtons from '../components/LikeDislikeButtons.tsx';
import backgroundImage from '../images/backgroundShowAll.png'


function ShowAll() {
  
  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header />
        <Cards />
        <LikeDislikeButtons />
    </div>
  )
}

export default ShowAll