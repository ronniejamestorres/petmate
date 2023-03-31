import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCard = ({ user }) => {
  const [imageDataURL, setImageDataURL] = useState("");

  useEffect(() => {
    const fetchPictures = async (path) => {
      try {
        const res = await axios.post(
          "http://localhost:4000/users/getPicture",
          {
            picture: "C:\BeCode\petMateBackend\uploads\dante\1680086412008-hamster.jpg", //path
          },
          { responseType: "arraybuffer" }
        );
        console.log(path);
        const contentType = res.headers["content-type"];
        const imageDataURL = `data:${contentType};base64,${Buffer.from(
          res.data,
          "binary"
        ).toString("base64")}`;
        setImageDataURL(imageDataURL);
        console.log(imageDataURL);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPictures("ok");

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
