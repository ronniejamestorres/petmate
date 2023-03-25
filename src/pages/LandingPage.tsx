import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

  const navigate = useNavigate()

  
  return (
    <div className="bg-orange h-screen flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold mb-8">Welcome to PetMate</h1>
    <div className="flex justify-center items-center space-x-4">
      <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/Register")}
      >
        Register
      </button>
      <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/Login")}
      >
        Login
      </button>
    </div>
  </div>

  )
}

export default LandingPage