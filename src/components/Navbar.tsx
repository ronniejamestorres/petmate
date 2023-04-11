import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";


import logoImage from "../images/petmate-newlogo-01.svg";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";



function Navbar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false); //true open and false close
  const handleClick = () => setToggle(!toggle);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  
  
  return (
    <nav className="w-full h-[80px] bg-beige1 border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logoImage} alt="Logo" className="h-[25px]" />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
          <li><a href="#home" onClick={handleClick}>Home</a></li>
          
          <li>
          <a href="#about" onClick={() => handleLinkClick(aboutRef)}>
            About
          </a>
        </li>
          <li><a href="#testimonials" onClick={handleClick}>Testimonials</a></li>
          <li><a href="#faq" onClick={handleClick}>FAQ</a></li>
            
          </ul>
          <div ref={homeRef} id="home"></div>
          <div ref={aboutRef} id="about"></div>
        </div >

        <div className="hidden md:flex">
          <button
            className="bg-beige2 hover:bg-grey px-8 py-3 rounded-full"
            onClick={() => navigate("/Login")}
          >
            LOGIN
          </button>
          <button
            className="bg-purewhite hover:bg-grey px-8 py-3 rounded-full "
            onClick={() => navigate("/Register")}
          >
            REGISTER
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      <div className={toggle?'absolute z-10 p-4  bg-[#FFFF] w-full px-8 md:hidden border-b':'hidden'}>
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
          <button
            className="bg-beige2 px-8 py-5 rounded-full hover:bg-grey "
            onClick={() => navigate("/Login")}
          >
            LOGIN
          </button>
          <button
            className="bg-beige3 px-8 py-5 rounded-full hover:bg-grey "
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
