import backgroundImage from "../images/petmate-background-01.svg";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardsContext from "../contexts/CardsContext";
import NavbarMatch from "../components/NavbarMatch";
import MatchIMG from "../components/MatchIMG";

function Match() {
  const navigate = useNavigate();
  const { users } = useContext(CardsContext);
  const loggedInId =
    users &&
    users.find((user) => user._id === localStorage.getItem("loggedIn"));
  const [picturesPaths, setpicturesPaths] = useState([]);

  useEffect(() => {
    const getMatchesPicturesPaths = () => {
      const matches = loggedInId && loggedInId.matches;
      const matchesPicturesPaths =
        matches &&
        matches.map(
          (match) => users.find((user) => user._id === match).pictures[0]
        );
      setpicturesPaths(matchesPicturesPaths);
    };
    getMatchesPicturesPaths();
  }, [loggedInId, users]);

  return (
    <div
      className="h-screen bg-center bg-repeat  bg-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarMatch />
      </div>
      <div className=" flex items-center justify-center    ">
        <div className="lg:w-11/12 grid grid-cols-1 lg:grid-cols-1 lg:mt-20">
          <div className="  h-32 col-span-1 lg:col-span-1 bg-beige2  p-4 rounded-xl shadow-2xl flex gap-2 justify-center mt-10">
            {picturesPaths &&
              picturesPaths.map((picturePath) => (
                <MatchIMG picturePath={picturePath} />
              ))}
          </div>

          <div className=" col-span-1 lg:col-span-1 bg-white  p-4 rounded-xl shadow-2xl ">
            {picturesPaths &&
              picturesPaths.map((picturePath) => (
                <div className="p-2 border   rounded-full">
                  <MatchIMG picturePath={picturePath} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
