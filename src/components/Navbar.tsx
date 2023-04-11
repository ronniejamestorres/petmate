import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logoImage from "../images/petmate-newlogo-01.svg";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false); //true open and false close
  const handleClick = () => setToggle(!toggle);

  return (
    <nav className="w-full fixed h-[80px] bg-beige1 border-b shadow-md md:px-3">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logoImage} alt="Logo" className="h-[25px]" />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex gap-2">
          <button
            className="bg-beige2 hover:bg-grey md:px-5 md:py-2 rounded-full"
            onClick={() => navigate("/Login")}
          >
            LOGIN
          </button>
          <button
            className="bg-beige3 hover:bg-grey md:px-5 md:py-2 rounded-full "
            onClick={() => navigate("/Register")}
          >
            REGISTER
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-[#FFFF] w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
          <div className="flex flex-col my-4 gap-3">
            <button
              className="bg-beige2 px-3 py-2 rounded-full hover:bg-grey "
              onClick={() => navigate("/Login")}
            >
              LOGIN
            </button>
            <button
              className="bg-beige3 px-3 py-2 rounded-full hover:bg-grey "
              onClick={() => navigate("/Register")}
            >
              REGISTER
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
