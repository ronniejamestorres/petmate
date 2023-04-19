import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  user: {
    pictures: string[];
  };
}

const ImageDisplay: React.FC<Props> = ({ user }) => {
  const [imageDataURL, setImageDataURL] = useState<string | null>(null);

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

    //check if the user has any pictures, if not, display the template picture
    if (user.pictures && user.pictures.length > 0) {
      fetchPictures(user.pictures[0]);
    } else {
      setImageDataURL("../emptyTemplate.jpg");
    }
  }, [user]);

  return (
    <div>
      <p className="flex justify-center m-4 text-xl ">
        Hello {localStorage.getItem("username")}
      </p>
      {imageDataURL ? (
        <img src={imageDataURL} alt="User Profile" />
      ) : (
        <img src="../emptyTemplate.jpg" alt="User Profile Template" />
      )}
    </div>
  );
};

export default ImageDisplay;
