import React from "react";
import { useContext } from "react";
import CardsContext from "../contexts/CardsContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function CarouselComponent() {
  const { users } = useContext(CardsContext)
  const { id } = useParams<{ id: string }>();
  const [ imageDataURL, setImageDataURL] = useState();

  //using the backend route for fetching the image
  useEffect(() => {
    const fetchPictures = async (path:string) => {
      try {
        const res = await axios.post(
          "http://wave.nodestarter.eu:4000/users/getPicture",
          {
            picture: path, //path of the picture stored on the server
          },
          { responseType: "arraybuffer" }
        );

        //create a link from the response data image
        const blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });
        const url = URL.createObjectURL(blob);
        setImageDataURL(url);
      } catch (err) {
        console.log(err);
      }
    };
    //console.log("log path for each user element: ", user.pictures.length);
    fetchPictures(user.pictures[0]);

    //call the function with the prop received from the 'cards' component
    //if the user has no picture yet a profile template picture is displayed
    if (user.pictures && user.pictures.length > 0) {
      fetchPictures(user.pictures[0]);
    } else setImageDataURL("../public/emptyTemplate.jpg");
  }, [user]);

  
  console.log(imageDataURL)

  return (
    <div>
      <h1 className="flex justify-center pt-8 pb-6 font-bold text-lg text-brown lg:text-2xl">
        G a l l e r y
      </h1>
      <div className="relative flex items-center justify-center w-full">
        <div className="flex items-center justify-start rounded-full w-2/3  h-64 gap-8 py-4 mx-auto overflow-auto md:rounded-lg md:w-2/3 md:h-80 lg:gap-8 lg:w-1/2 lg:h-full lg:rounded-lg">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-80 aspect-square"
              src="https://images.unsplash.com/photo-1614633673914-0af3eae06970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="Image 1"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-80 aspect-square "
              src="https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Image 2"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-80 aspect-square "
              src="https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="Image 3"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-80 aspect-square "
              src="https://images.unsplash.com/photo-1614633673914-0af3eae06970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="Image 1"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-80 aspect-square "
              src="https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Image 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
