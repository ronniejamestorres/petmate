import React, { useState } from "react";
import logoImage from "../images/petmate-newlogo-01.svg";
import backgroundImage from "../images/petmate-background-01.svg";
import axios from "axios";
import { update } from "@react-spring/web";

const Dashboard = () => {
  const [animal, setAnimal] = useState("");

  const [secondSubmitted, setSecondSubmitted] = useState(false);

  const handleAnimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    {
      setAnimal(event.target.value);
    }
  };

  const handleSecondSubmit = () => {
    console.log(`Animal: ${animal}`);
    setSecondSubmitted(true);
  };

  const handleLastSubmit = () => {
    const data = {
      animal,
    };

    axios
      .patch(
        `http://wave.nodestarter.eu:4000/users/update/${localStorage.getItem(
          "userId"
        )}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Handle response data
        console.log(
          "Success:",
          response
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div
      className=" bg-center h-screen bg-repeat  bg-beige1 p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center ">
        <img src={logoImage} alt="Logo" className="w-60 m-4" />
      </div>

      {!secondSubmitted ? (
        <div className="flex justify-center mt-10">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4  ">
            <p className="flex justify-center m-4 text-xl ">
              Hello {localStorage.getItem("username")}
            </p>
            <label>
              <p className="mb-4 ">What kind of animal are you ?</p>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={animal}
                  onChange={handleAnimalChange}
                  className="border border-black rounded-2xl p-2  "
                />
              </div>
            </label>

            <button
              onClick={handleSecondSubmit}
              className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className=" justify-center  flex-col items-center ">
          <p className="bg-white p-2 rounded-xl mb-2 ">
            Thank you, {localStorage.getItem("username")} the {animal} !
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleLastSubmit}
              className="bg-orange hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
            >
              Update User
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
