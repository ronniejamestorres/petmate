import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../images/petmate-background-01.svg'
import logoImage from '../images/petmate-newlogo-01.svg'
import Image from '../images/pets.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
function LandingPage() {

  const navigate = useNavigate()

  
  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover bg-beige1" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center pt-8">
        <img src={Image} alt="Logo" className="w-28 pt-8 mt-12" />
      </div>
      <div className="flex justify-center">
        <img src={logoImage} alt="Logo" className="w-3/5" />
      </div>
      
    <div className="flex justify-center items-center mt-40 space-x-6">
      <button className="bg-beige3 hover:bg-grey text-black font-bold pb-3 px-4 rounded"
        onClick={() => navigate("/Register")}
      >
        Register
      </button>
      <button className="bg-beige3 hover:bg-grey text-black font-bold pb-3 px-4 rounded"
        onClick={() => navigate("/Login")}
      >
        Login
      </button>
    </div>
  </div>

  )
}

export default LandingPage