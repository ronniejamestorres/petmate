import React, { useState } from "react";
import logoImage from "../images/petmate-newlogo-01.svg";
import backgroundImage from "../images/petmate-background-01.svg";
import backgroundImage2 from "../images/petmate-background-01.svg";
import axios from "axios";
import { update } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import petsImage from "../images/pngegg8.png";
import petsImage2 from "../images/pngegg9.png";
import petsImage3 from "../images/pngegg10.png";
import petsImage4 from "../images/pngegg11.png";
import petsImage5 from "../images/pngegg12.png";
import petsImage6 from "../images/pngegg13.png";
import petsImage7 from "../images/pngegg15.png";
import petsImage8 from "../images/pngegg16.png";

const Dashboard = () => {
  const Navigate = useNavigate();

  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>(["", "", ""]);
  const [interests, setInterests] = useState<string[]>(["", "", ""]);
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [firstSubmitted, setFirtSubmitted] = useState(false);
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

  const handleFirstSubmit = () => {
    console.log(`uploading picture`);
    //upload the picture ....
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();

    formData.append("uploads", selectedFile);
    try {
      const response = axios.post(
        `http://wave.nodestarter.eu:4000/users/upload-picture`,
        formData,
        {
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log("error is ", error);
    }

    setFirtSubmitted(true);
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

    Navigate("/showall");
  };

  return (
    <div
      className=" bg-center h-screen bg-repeat  bg-beige1 p-4 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center ">
        <img src={logoImage} alt="Logo" className="w-60 m-4" />
      </div>

      {!firstSubmitted ? (
        <div className=" justify-center mt-10 grid grid-cols-1 lg:grid-cols-2 ">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-10 ">
            <p className="flex justify-center text-2xl border border-black rounded-full p-4 bg-pure">
              Hello {localStorage.getItem("username")}
            </p>
            <p className="flex justify-center m-4 text-xl ">
              Please upload picture
            </p>
            <input
              className=" file:bg-beige2 file:hover:bg-grey file:rounded-full file:w-44 file:h-10 file:items-center file:mb-4 file:border-0"
              type="file"
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />
            <button
              onClick={handleFirstSubmit}
              className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4 "
            >
              Submit
            </button>
          </div>
          <div className="">
            <img src={petsImage} alt="pets" className=" scale-150   " />
          </div>
        </div>
      ) : !secondSubmitted ? (
        <div className="justify-center mt-10 grid grid-cols-1 lg:grid-cols-2 ">
          <div className=" ">
            <img src={petsImage2} alt="pets" className=" lg:scale-150" />
          </div>
          <div className="bg-white flex flex-col items-center justify-center rounded-xl p-4  ">
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
        <div className="justify-center mt-10 grid grid-cols-1 lg:grid-cols-3">
          <div className=" h-64 lg:h-96 col-span-1 lg:col-span-1 bg-white flex flex-col items-center justify-center rounded-xl p-4  ">
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
          <div className=" col-span-1 lg:col-span-2  ">
            <img src={petsImage3} alt="pets" className=" scale-150" />
          </div>
        </div>
      ) : !fourthSubmitted ? (
        <div className="justify-center mt-10 grid grid-cols-1 lg:grid-cols-3">
          <div className=" col-span-1 lg:col-span-2  ">
            <img src={petsImage4} alt="pets" className=" " />
          </div>
          <div className="bg-white lg:h-72 flex flex-col items-center justify-center rounded-xl p-4 ">
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
        <div className="justify-center mt-10 grid grid-cols-3 lg:grid-cols-2">
          <div className="z-40  col-span-2 lg:col-span-1 bg-white w-fit h-fit flex flex-col items-center rounded-xl p-4">
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
          <div className=" col-span-1 lg:col-span-1 pt-10 ">
            <img
              src={petsImage5}
              alt="pets"
              className=" scale-150 lg:scale-150"
            />
          </div>
        </div>
      ) : !sixthSubmitted ? (
        <div className="justify-center grid grid-cols-1 lg:grid-cols-1">
          <div>
            <div className="col-span-1 lg:col-span-1 flex justify-center">
              <div className="w-96">
                <img src={petsImage6} alt="pets" className="scale-150" />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1 w-fit mx-auto bg-white flex flex-col items-center justify-center rounded-xl p-4">
            <label>
              <p className="mb-4 flex justify-center">
                What are your interests?
              </p>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={interests[0]}
                  onChange={(e) => handleInterestsChange(e, 0)}
                  className="p-2 border border-black rounded-2xl"
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
                  className="p-2 border border-black rounded-2xl"
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
                  className="p-2 border border-black rounded-2xl"
                  placeholder="3"
                />
              </div>
            </label>

            <button
              onClick={handleSixthSubmit}
              className="bg-beige2 hover:bg-grey rounded-full w-44 h-10 items-center mb-4"
            >
              Submit
            </button>
          </div>
        </div>
      ) : !seventhSubmitted ? (
        <div className="justify-center grid grid-cols-1 lg:grid-cols-1 ">
          <div>
            <div className="col-span-1 lg:col-span-1 flex justify-center z-0  ">
              <div className="">
                <img
                  src={petsImage7}
                  alt="pets"
                  className="scale-150 lg:scale-150"
                />
              </div>
            </div>
          </div>
          <div className="z-10 col-span-1 lg:col-span-1   flex flex-col items-center justify-center rounded-xl p-4 ">
            <label>
              <p className="mb-4 flex justify-center"></p>
              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="border border-black rounded-2xl p-2 w-screen  h-32   "
                  placeholder="Describe yourself :"
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
        <div className=" justify-center grid grid-cols-1 lg:grid-cols-1 ">
          <div className="col-span-1 lg:col-span-1 flex justify-center   ">
            <div className="w-screen">
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
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1 flex justify-center mb-10">
            <button
              onClick={handleLastSubmit}
              className="bg-orange hover:bg-grey rounded-full w-44 h-10 items-center mb-4 z-10"
            >
              Update User
            </button>
          </div>
          <div>
            <div className="col-span-1 lg:col-span-1 flex justify-center z-0  ">
              <div className="">
                <img
                  src={petsImage8}
                  alt="pets"
                  className="scale-150 lg:scale-150"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
