import React, { useState } from "react";
import logoImage from "../images/petmate-newlogo-01.svg";
import backgroundImage from "../images/petmate-background-01.svg";
import axios from "axios";
import { update } from "@react-spring/web";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>(["", "", ""]);
  const [interests, setInterests] = useState<string[]>(["", "", ""]);
  const [description, setDescription] = useState("");

  const [secondSubmitted, setSecondSubmitted] = useState(false);
  const [thirdSubmitted, setThirdSubmitted] = useState(false);
  const [fourthSubmitted, setFourthSubmitted] = useState(false);
  const [fifthSubmitted, setFifthSubmitted] = useState(false);
  const [sixthSubmitted, setSixthSubmitted] = useState(false);
  const [seventhSubmitted, setSeventhSubmitted] = useState(false);
  const [characteristics, setCharacteristics] = useState({
    animal: "",
    race: "",
    age: 0,
    weight: 0,
    interests: [],
    favoriteFoods: [],
    description: [],
  });

  const handleAnimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    {
      setAnimal(event.target.value);
    }
    const newCharacteristics = {
      ...characteristics,
      animal: event.target.value,
    };
    setCharacteristics(newCharacteristics);
  };

  const handleRaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    {
      setRace(event.target.value);
    }
    const newCharacteristics = {
      ...characteristics,
      race: event.target.value,
    };
    setCharacteristics(newCharacteristics);
  };
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    {
      setAge(event.target.value);
    }
    const newCharacteristics = {
      ...characteristics,
      age: event.target.value,
    };
    setCharacteristics(newCharacteristics);
  };

  const handleFavoriteFoodsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFavoriteFoods = [...favoriteFoods];
    newFavoriteFoods[index] = event.target.value;
    setFavoriteFoods(newFavoriteFoods);
    const newCharacteristics = {
      ...characteristics,
      favoriteFoods: newFavoriteFoods,
    };
    setCharacteristics(newCharacteristics);
  };

  const handleInterestsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInterests = [...interests];
    newInterests[index] = event.target.value;
    setInterests(newInterests);
    const newCharacteristics = {
      ...characteristics,
      interests: newInterests,
    };
    setCharacteristics(newCharacteristics);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    {
      setDescription(event.target.value);
    }
  };

  const handleSecondSubmit = () => {
    console.log(`Animal: ${animal}`);
    setSecondSubmitted(true);
  };

  const handleThirdSubmit = () => {
    console.log(`Race: ${race}`);
    setThirdSubmitted(true);
  };
  const handleFourthSubmit = () => {
    console.log(`Age: ${age}`);
    setFourthSubmitted(true);
  };
  const handleFifthSubmit = () => {
    console.log(`FavoriteFoods: ${favoriteFoods}`);
    setFifthSubmitted(true);
  };
  const handleSixthSubmit = () => {
    console.log(`Interests: ${interests}`);
    setSixthSubmitted(true);
  };
  const handleSeventhSubmit = () => {
    console.log(`Description: ${description}`);
    setSeventhSubmitted(true);
  };

  const handleLastSubmit = () => {
    const data = {
      description,
      characteristics,
    };
    console.log("description is ", data);
    axios
      .patch(
        `http://wave.nodestarter.eu:4000/users/update/${localStorage.getItem(
          "loggedIn"
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
          "Success:, a mon avis i am updated but u need to check ",
          response
        );
      })
      .catch((error) => {
        console.error("Error from route update :", error);
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
      ) : !thirdSubmitted ? (
        <div className="flex justify-center mt-10">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4  ">
            <label>
              <p className="mb-4 flex justify-center">What is your race ?</p>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={race}
                  onChange={handleRaceChange}
                  className="border border-black rounded-2xl p-2  "
                />
              </div>
            </label>

            <button
              onClick={handleThirdSubmit}
              className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
            >
              Submit
            </button>
          </div>
        </div>
      ) : !fourthSubmitted ? (
        <div className="flex justify-center mt-10">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4 ">
            <p className="flex justify-center m-4 text-xl">
              Thank you, {localStorage.getItem("username")} !
            </p>
            <label>
              <p className="mb-4 flex justify-center">How old are you?</p>
              <div className="mb-4 flex justify-center">
                <input
                  type="number"
                  value={age}
                  onChange={handleAgeChange}
                  className="border border-black rounded-2xl p-2  "
                />
              </div>
            </label>

            <button
              onClick={handleFourthSubmit}
              className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
            >
              Submit
            </button>
          </div>
        </div>
      ) : !fifthSubmitted ? (
        <div className="flex justify-center mt-10">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4 ">
            <label>
              <p className="mb-4 flex justify-center">
                What are your favorite foods?
              </p>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={favoriteFoods[0]}
                  onChange={(e) => handleFavoriteFoodsChange(e, 0)}
                  className="p-2 border border-black rounded-2xl  "
                  placeholder="1"
                />
              </div>
            </label>

            <label>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={favoriteFoods[1]}
                  onChange={(e) => handleFavoriteFoodsChange(e, 1)}
                  className="p-2 border border-black rounded-2xl  "
                  placeholder="2"
                />
              </div>
            </label>

            <label>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={favoriteFoods[2]}
                  onChange={(e) => handleFavoriteFoodsChange(e, 2)}
                  className="p-2 border border-black rounded-2xl  "
                  placeholder="3"
                />
              </div>
            </label>

            <button
              onClick={handleFifthSubmit}
              className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
            >
              Submit
            </button>
          </div>
        </div>
      ) : !sixthSubmitted ? (
        <div className="flex justify-center mt-10">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4 ">
            <label>
              <p className="mb-4 flex justify-center">
                What are your interests?
              </p>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={interests[0]}
                  onChange={(e) => handleInterestsChange(e, 0)}
                  className="p-2 border border-black rounded-2xl  "
                  placeholder="1"
                />
              </div>
            </label>

            <label>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={interests[1]}
                  onChange={(e) => handleInterestsChange(e, 1)}
                  className="p-2 border border-black rounded-2xl  "
                  placeholder="2"
                />
              </div>
            </label>

            <label>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={interests[2]}
                  onChange={(e) => handleInterestsChange(e, 2)}
                  className="p-2 border border-black rounded-2xl  "
                  placeholder="3"
                />
              </div>
            </label>

            <button
              onClick={handleSixthSubmit}
              className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
            >
              Submit
            </button>
          </div>
        </div>
      ) : !seventhSubmitted ? (
        <div className="flex justify-center mt-10">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4 ">
            <label>
              <p className="mb-4 flex justify-center">Describe yourself :</p>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="border border-black rounded-2xl p-2 w-72 h-60  "
                  placeholder="..."
                />
              </div>
            </label>

            <button
              onClick={handleSeventhSubmit}
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
          <p className="bg-white p-2 rounded-xl mb-2">Your are a {race}</p>
          <p className="bg-white p-2 rounded-xl mb-2">
            Your are {age} years old{" "}
          </p>

          <div className="bg-white p-2 rounded-xl mb-2">
            <p>Your favorite foods are :</p>
            {favoriteFoods.map((favoriteFoods, index) => (
              <p key={index} className="block">
                {favoriteFoods}
              </p>
            ))}
          </div>

          <div className="bg-white p-2 rounded-xl mb-2">
            <p>Your interests are:</p>
            {interests.map((interest, index) => (
              <p key={index} className="block">
                {interest}
              </p>
            ))}
          </div>
          <p className="bg-white p-2 rounded-xl mb-2 overflow-auto">
            <p>Description :</p>
            {description}{" "}
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
