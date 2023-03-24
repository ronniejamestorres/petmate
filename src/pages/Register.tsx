import React, { useState } from "react";
import SubscribeOne from "../components/SubscribeOne";
import Logo from "../components/Logo";

const Register = () => {
  return (
    <div className="bg-orange rounded-3xl ">
      <div className="flex justify-center items-center mx-auto mb-20">
        <Logo className="h-24" />
      </div>
      <div className="flex-1 bg-beige">
        <div id="" className=" h-screen flex items-center justify-center">
          <div id="" className="flex items-center justify-center">
            <div>
              <SubscribeOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
