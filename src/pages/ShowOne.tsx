import React from "react";
import Caroussel from "../components/Carousel";
import ContainerCard from "../components/ContainerCard";
import CarouselComponent from "../components/CarouselComponent";

function ShowOne() {
  return (
    <div className="bg-beige1 h-screen">
      <CarouselComponent />
      <ContainerCard />
    </div>
  );
}

export default ShowOne;
