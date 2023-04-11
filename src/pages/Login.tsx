import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import logoImage from "../images/petmate-newlogo-01.svg";
import backgroundImage from "../images/petmate-background-01.svg";
import petsImage from "../images/pngegg4.png";
import NavbarLogin from "../components/NavbarLogin";

const Login = () => {
  return (
    <div
      className="h-screen bg-center bg-repeat  bg-beige1 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarLogin />
      </div>
      <div className=" flex justify-center  ">
        <div className=" mt-10 grid grid-cols-1 lg:grid-cols-2  justify-items-center items-center   lg:mt-40">
          <div className="lg:w-96 lg:h-96 bg-white lg:bg-white rounded-xl p-4 justify-center flex flex-col items-center shadow-xl">
            <div className="">
              <LoginForm />
            </div>
          </div>
          <div className="w-80 pt-8  lg:w-96  lg:h-96 lg:bg-beige2 rounded-xl  flex flex-col justify-center items-center lg:shadow-xl    ">
            <img src={petsImage} alt="pets" className="scale-150    " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
