import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = ({ user }) => {
  const [imageDataURL, setImageDataURL] = useState("");

  //using the backend route for fetching the image
  useEffect(() => {
    const fetchPictures = async (path) => {
      try {
        const res = await axios.post(
          "http://localhost:4000/users/getPicture",
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
    if (user.pictures && user.pictures.lenght > 0) {
      fetchPictures(user.pictures[0]);
    } else setImageDataURL("../public/emptyTemplate.jpg");
  }, [user]);

  return (
    <div
      className="card flex"
      style={{
        backgroundImage: `url(${imageDataURL})`,
      }}
    >
      <h3 className="text-xl text-dark font-extrabold">{user.username}</h3>
    </div>
  );
};

export default UserCard;
