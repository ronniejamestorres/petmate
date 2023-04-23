import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface MatchIMGProps {
  picturePath: string;
  matchedId: string;
}

const MatchIMG: FC<MatchIMGProps> = ({ picturePath, matchedId }) => {
  const navigate = useNavigate();
  const [imageDataURL, setImageDataURL] = useState<string>("");

  useEffect(() => {
    const fetchPictures = async (path: string) => {
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

    //call the function with the prop received from the 'cards' component
    fetchPictures(picturePath);
  }, [picturePath]);

  return (
    <div
      onClick={() => navigate(`/chatroom/${matchedId}`)}
      className=" w-20 h-20  rounded-full bg-beige1 cursor-pointer"
    >
      <img
        className=" rounded-full w-full h-full object-cover"
        src={imageDataURL}
        alt="image of match"
      />
    </div>
  );
};

export default MatchIMG;
