import React from "react";
import ContainerCardCopy from "../components/DashboardCard";
import NavbarLogin from "../components/NavbarLogin";
import backgroundImage from "../images/petmate-background-01.svg";
import DashboardGallery from "../components/DashboardGallery";

function DashboardTwo() {
  return (
    <div
      className="h-screen bg-center bg-repeat  bg-beige1 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarLogin />
      </div>
      <div className="flex justify-center ">
        <div className=" grid grid-cols-1 lg:grid-cols-2  justify-items-center items-center">
          <div className=" bg-beige2  p-4 rounded-xl shadow-2xl">
            <DashboardGallery />
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-1 gap-2 bg-white shadow-2xl rounded-2xl mt-20  ">
            <ContainerCardCopy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTwo;
