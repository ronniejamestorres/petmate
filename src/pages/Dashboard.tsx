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
    interests: "",
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
      race: event.target.value,
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
  };
  const handleInterestsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInterests = [...favoriteFoods];
    newInterests[index] = event.target.value;
    setInterests(newInterests);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    {
      setDescription(event.target.value);
    }
    const newCharacteristics = {
      ...characteristics,
      race: event.target.value,
    };
    setCharacteristics(newCharacteristics);
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
      animal,
      race,
      age,
      favoriteFoods,
      interests,
      description,
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
          "Success:, a mon avis i am updated but u need to check ",
          response
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log("the userID is: ", localStorage.getItem("userId"));
  return (
    <div
      className=" bg-center h-screen bg-no-repeat bg-cover bg-beige1 p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center ">
        <img src={logoImage} alt="Logo" className="w-60 m-4" />
      </div>

      {!secondSubmitted ? (
        <div>
          <p className="flex justify-center m-4 text-xl">
            Hello {localStorage.getItem("username")}
          </p>
          <label>
            What kind of animal are you ?
            <input
              type="text"
              value={animal}
              onChange={handleAnimalChange}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <button
            onClick={handleSecondSubmit}
            className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
          >
            Submit
          </button>
        </div>
      ) : !thirdSubmitted ? (
        <div>
          <label>
            What is your race ?
            <input
              type="text"
              value={race}
              onChange={handleRaceChange}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <button
            onClick={handleThirdSubmit}
            className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
          >
            Submit
          </button>
        </div>
      ) : !fourthSubmitted ? (
        <div>
          <p>Thank you, {name}!</p>
          <label>
            How old are you?
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <button
            onClick={handleFourthSubmit}
            className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
          >
            Submit
          </button>
        </div>
      ) : !fifthSubmitted ? (
        <div>
          <label>
            What are your favorite foods?
            <input
              type="text"
              value={favoriteFoods[0]}
              onChange={(e) => handleFavoriteFoodsChange(e, 0)}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <label>
            What are your second favorite foods?
            <input
              type="text"
              value={favoriteFoods[1]}
              onChange={(e) => handleFavoriteFoodsChange(e, 1)}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <label>
            What are your third favorite foods?
            <input
              type="text"
              value={favoriteFoods[2]}
              onChange={(e) => handleFavoriteFoodsChange(e, 2)}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <button
            onClick={handleFifthSubmit}
            className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
          >
            Submit
          </button>
        </div>
      ) : !sixthSubmitted ? (
        <div>
          <label>
            What are your interests?
            <input
              type="text"
              value={interests[0]}
              onChange={(e) => handleInterestsChange(e, 0)}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={interests[1]}
              onChange={(e) => handleInterestsChange(e, 1)}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={interests[2]}
              onChange={(e) => handleInterestsChange(e, 2)}
              className="border border-black rounded-2xl ml-2"
            />
          </label>
          <br />
          <button
            onClick={handleSixthSubmit}
            className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
          >
            Submit
          </button>
        </div>
      ) : !seventhSubmitted ? (
        <div>
          <label>
            Describe yourself :
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              className="border border-black rounded-2xl ml-2 h-60 w-full"
            />
          </label>
          <br />
          <button
            onClick={handleSeventhSubmit}
            className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
          >
            Submit
          </button>
        </div>
      ) : (
        <div className=" ">
          <p className="border border-black p-2 rounded-xl mb-2">
            Thank you, {localStorage.getItem("username")} the {animal}!
          </p>
          <p className="border border-black p-2 rounded-xl mb-2">
            Your are a {race}
          </p>
          <p className="border border-black p-2 rounded-xl mb-2">
            Your are {age} years old{" "}
          </p>
          <p className="border border-black p-2 rounded-xl mb-2">
            Your favorite foods are : {favoriteFoods.join(", ")}.
          </p>
          <p className="border border-black p-2 rounded-xl mb-2">
            Your interests are : {interests.join(", ")}.
          </p>
          <p className="border border-black p-2 rounded-xl mb-2 h-60  overflow-auto">
            {description}{" "}
          </p>
          <button onClick={handleLastSubmit}>Update User</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
