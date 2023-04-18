import ContainerCardCopy from "../components/DashboardCard";
import NavbarLogin from "../components/NavbarLogin";
import backgroundImage from "../images/petmate-background-01.svg";
import DashboardGallery from "../components/DashboardGallery";
import ImageDisplay from "../components/ImageDisplay";
import { FaJedi } from "react-icons/fa";
import React, { useState, useContext } from "react";

function Match() {
  return (
    <div
      className="h-screen bg-center bg-repeat  bg-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarLogin />
      </div>
      <div className=" flex items-center justify-center    ">
        <div className="lg:w-11/12 grid grid-cols-1 lg:grid-cols-1 lg:mt-20 ">
          <div className="  h-32 col-span-1 lg:col-span-1 bg-beige2  p-4 rounded-xl shadow-2xl flex gap-2 justify-center">
            <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
          </div>

          <div className=" col-span-1 lg:col-span-1 bg-white  p-4 rounded-xl shadow-2xl ">
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
