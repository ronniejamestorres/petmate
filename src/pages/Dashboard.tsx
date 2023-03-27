import React from "react";
import Header from "../components/Header";
import backgroundImage from "../../public/petmate-background-01.svg";

function Dashboard() {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
    </div>
  );
}

export default Dashboard;
