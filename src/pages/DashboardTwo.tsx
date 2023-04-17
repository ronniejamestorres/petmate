import React from "react";
import ContainerCardCopy from "../components/DashboardCard";
import NavbarLogin from "../components/NavbarLogin";
import backgroundImage from "../images/petmate-background-01.svg";
import DashboardGallery from "../components/DashboardGallery";
import ImageDisplay from "../components/ImageDisplay";

function DashboardTwo() {
  return (
    <div
      className="h-full bg-center bg-repeat  bg-beige1 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarLogin />
      </div>
      <div className=" flex items-center justify-center h-screen  ">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="  col-span-1 lg:col-span-1 bg-beige2  p-4 rounded-xl shadow-2xl">
            <DashboardGallery />
          </div>

          <div className=" col-span-1 lg:col-span-1 bg-white  p-4 rounded-xl shadow-2xl">
            <ContainerCardCopy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTwo;
