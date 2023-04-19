import { useEffect, useState, useContext } from "react";
import CardsContext from "../contexts/CardsContext";

import NavbarLogin from "../components/NavbarLogin";
import backgroundImage from "../images/petmate-background-01.svg";
import DashboardGallery from "../components/DashboardGallery";
import ImageDisplay from "../components/ImageDisplay";

import DashboardCard from "../components/DashboardCard";

function DashboardTwo() {
  const { users } = useContext(CardsContext);

  const loggedInId =
    users &&
    users.find((user) => user._id === localStorage.getItem("loggedIn"));
  const [picturesPaths, setpicturesPaths] = useState([]);

  useEffect(() => {
    const getPicturesPaths = () => {
      const picturesPaths = loggedInId && loggedInId.pictures;
      setpicturesPaths(picturesPaths);
    };
    getPicturesPaths();
  }, [loggedInId]);

  return (
    <div
      className="h-screen bg-center bg-repeat  bg-beige1 overflow-auto "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavbarLogin />
      </div>
      <div className=" flex items-center justify-center h-screen  ">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="  col-span-1 lg:col-span-1 bg-beige2  p-4 rounded-xl shadow-2xl">
            <DashboardGallery picturesPaths={picturesPaths} />
          </div>

          <div className=" col-span-1 lg:col-span-1 bg-white  p-4 rounded-xl shadow-2xl">
            <div className="flex justify-center m-4 text-xl border border-black rounded-full p-2 ">
              Hello {localStorage.getItem("username")}
            </div>
            <DashboardCard />
            <div className=" flex justify-center ">
              <button className="bg-orange hover:bg-grey rounded-full w-44 h-10 items-center mb-4 ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTwo;
