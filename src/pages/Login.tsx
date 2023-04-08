import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import logoImage from "../images/petmate-newlogo-01.svg";
import backgroundImage from "../images/petmate-background-01.svg";

const Login = () => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover bg-beige1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center pt-10">
        <img src={logoImage} alt="Logo" className="w-60 m-4" />
      </div>
      <div className="  h-full flex mt-10 justify-center">
        <div id="" className="  flex  justify-center">
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
