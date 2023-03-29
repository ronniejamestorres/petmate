import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/petmate-background-01.svg";
import logoImage from "../images/petmate-newlogo-01.svg";
import Image from "../images/pets.svg";
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover bg-beige1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center pt-8">
        <img src={Image} alt="Logo" className="w-28 pt-8 mt-12" />
      </div>
      <div className="flex justify-center">
        <img src={logoImage} alt="Logo" className="w-60" />
      </div>

      <div className=" p-4 flex flex-col items-center justify-center">
        <div className="mb-4">
          <button
            className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center"
            onClick={() => navigate("/Login")}
          >
            LOGIN
          </button>
        </div>
        <button
          className="bg-beige3 hover:bg-grey rounded-full w-44 h-10 items-center"
          onClick={() => navigate("/Register")}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
