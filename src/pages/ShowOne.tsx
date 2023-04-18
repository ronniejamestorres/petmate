import React from "react";
import backgroundImage from "../images/petmate-background-01.svg";
import ContainerCard from "../components/ContainerCard";
import CarouselComponent from "../components/CarouselComponent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function ShowOne() {
  return (
    <div
      className="h-screen bg-center bg-repeat  bg-beige1 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-start items-center absolute top-0 left-0 p-4">
        {/* Lien et bouton avec l'icône de flèche de retour */}
        <Link to="/showAll">
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Link>
      </div>
      <CarouselComponent />
      <ContainerCard />
    </div>
  );
}

export default ShowOne;
