import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import backgroundImage from "../images/petmate-background-01.svg";
import SwipeResult from "../components/SwipeResult";


function ShowAll() {
  if (localStorage.getItem("x-auth-token") === null) {
    window.location.href = "/login";
  }

  return (
    <div
      className="h-screen bg-center bg-repeat  bg-beige1 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <Cards />
      <SwipeResult />
    </div>
  );
}

export default ShowAll;
