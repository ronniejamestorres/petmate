import React from "react";
import heroImg from "../images/heroImage.png";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="w-full bg-[#FFFF] py-24 md:px-3">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-beige2 font-medium">
            START TO MATCH
          </p>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            Welcome to our<span className="text-beige2"> PETMATE</span> app.
            Find your perfect <span className="text-beige2"> furry friend</span>{" "}
            in just a few clicks!
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Find friendship, love, and fur-ever companionship with PETMATE - the
            app for pets and their people
          </p>

          <form className="bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between">
            <input
              className="bg-white"
              type="text"
              placeholder="find pets"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>

        <img src={heroImg} className="md:order-last  order-first" />
      </div>
    </div>
  );
};

export default Hero;
