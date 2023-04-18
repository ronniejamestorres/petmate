import NavbarLogin from "../components/NavbarLogin";
import backgroundImage from "../images/petmate-background-01.svg";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardsContext from "../contexts/CardsContext";

function Match() {
  const navigate = useNavigate();
  const { users } = useContext(CardsContext);
  const loggedInUser = localStorage.getItem("username");
  const loggedInId = localStorage.getItem("loggedIn");
  const [matches, setmatches] = useState([]);
  const [picturesPaths, setpicturesPaths] = useState([]);

  useEffect(() => {
    const getMatches = () => {
      if (users) {
        const user = users.find((user) => user._id === loggedInId);
        if (user) {
          setmatches(user.matches);
        }
      }
    };
    getMatches();
    const getPicturesPaths = () => {
      if (matches) {
        matches.map((match) => {
          const user = users.find((user) => user._id === match);
          if (user) {
            setpicturesPaths(user.pictures);
          }
        });
      }
      console.log("picturesPaths: ", picturesPaths);
    };
    getPicturesPaths();
    const fetchPictures = () => {
      if (picturesPaths) {
        picturesPaths.map((path) => {
          const picture = fetch(path);
          console.log("picture: ", picture);
        });
      }
    };
  }, [users, matches]);

  return (
    <div
      className="h-screen bg-center bg-repeat  bg-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarLogin />
      </div>
      <div className=" flex items-center justify-center    ">
        <div className="lg:w-11/12 grid grid-cols-1 lg:grid-cols-1 lg:mt-20 ">
          <div className="  h-32 col-span-1 lg:col-span-1 bg-beige2  p-4 rounded-xl shadow-2xl flex gap-2 justify-center">
            <div
              onClick={() => navigate("/chatroom")}
              className=" w-20 h-20  rounded-full bg-beige1"
            >
              <img
                className=" rounded-full w-full h-full object-cover"
                src="/emptyTemplate.jpg"
                alt=""
              />
            </div>
            <div
              onClick={() => navigate("/chatroom")}
              className=" w-20 h-20  rounded-full bg-beige1"
            >
              X
            </div>
            <div
              onClick={() => navigate("/chatroom")}
              className=" w-20 h-20  rounded-full bg-beige1"
            >
              X
            </div>
            <div
              onClick={() => navigate("/chatroom")}
              className=" w-20 h-20  rounded-full bg-beige1"
            >
              X
            </div>
          </div>

          <div className=" col-span-1 lg:col-span-1 bg-white  p-4 rounded-xl shadow-2xl ">
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
            <div className="p-2 border   rounded-full">
              <div className=" w-20 h-20  rounded-full bg-beige1">X</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
