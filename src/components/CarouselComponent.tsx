import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardsContext from "../contexts/CardsContext";

function CarouselComponent() {
  const { users } = useContext(CardsContext);
  const { id } = useParams<{ id: string }>();
  const [imageDataURLs, setImageDataURLs] = useState<string[]>([]); // specify the type for state variable

  useEffect(() => {
    const fetchPictures = async (paths: string[]) => {
      try {
        const res = await axios.post(
          "http://wave.nodestarter.eu:4000/users/getPicture",
          {
            picture: paths, //path of the picture stored on the server
          },
          { responseType: "arraybuffer" }
        );

        //create a link from the response data image
        const blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });
        const url = URL.createObjectURL(blob);

        setImageDataURLs([url]);
      } catch (err) {
        console.log(err);
      }
    };

    // Find the user by id
    const user = users.find((user) => user._id === id);

    if (user && user.pictures && user.pictures.length > 0) {
      fetchPictures(user.pictures[0]);
    } else {
      // Set empty template image URL if user does not have any pictures
      setImageDataURLs(["../emptyTemplate.jpg"]);
    }
  }, [id, users]); // Include id and users as dependencies for useEffect

  return (
    <div>
      <h1 className="flex justify-center pt-8 pb-6 font-bold text-lg text-brown lg:text-2xl">
        G a l l e r y
      </h1>
      <div className="relative flex items-center justify-center ">
        <div className="flex items-center justify-start rounded-full w-2/3 mt-2 overflow-auto  md:w-1/4 md:rounded-md md: mt-10 lg:w-1/6 md:mt-3 lg:rounded-full "
        style={{
          borderRadius: '129px',
          background: 'linear-gradient(145deg, #ffad59, #d8924b)',
          boxShadow: '20px 20px 60px #cc8a47, -20px -20px 60px #ffba5f',
        }}>
          <div className="relative  w-full ">
            {imageDataURLs.length > 0 ? (
              imageDataURLs.map((imageDataURL, index) => (
                <img
                  key={index}
                  className="object-cover object-center h-64 aspect-square"
                  src={imageDataURL}
                  alt={`User Profile ${index + 1}`}
                />
              ))
            ) : (
              <img
                src={imageDataURLs[0] || "../emptyTemplate.jpg"}
                alt="User Profile Template"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
