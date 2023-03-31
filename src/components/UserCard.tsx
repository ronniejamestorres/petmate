import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = ({ user }) => {
  const [imageDataURL, setImageDataURL] = useState("");
  console.log(user.pictures[0 ]);
  useEffect(() => {
    const fetchPictures = async (path) => {
      try {
        const res = await axios.post(
          "http://localhost:4000/users/getPicture",
          {
            picture: "C:\\becode\\PetMate-Backend\\uploads\\mike\\1680007648176-20211117_223534.jpg", //path
          },
          { responseType: "arraybuffer" }
        );
       
        const blob = new Blob([res.data], { type: res.headers["content-type"] });
        const url = URL.createObjectURL(blob);
        console.log(url);
        setImageDataURL(url);

      } catch (err) {
        console.log(err);
      }
    };

    fetchPictures("i have hardcoded a picture path");

    // if (user.pictures && user.pictures.lenght > 0) {
    //   fetchPictures(user.pictures[0]);
    // } else setImageDataURL("../public/emptyTemplate.jpg");
  }, [user]);

  return (
    <div
      className="card flex"
      style={{
        backgroundImage: `url(${imageDataURL})`,
      }}
      //   `url(${imageDataURL})`
    >
      <h3 className=" text-3xl">{user.name}</h3>
    </div>
  );
};

export default UserCard;
