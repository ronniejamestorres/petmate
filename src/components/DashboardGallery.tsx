import React, { useState } from "react";

function DashboardGallery() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const handleUpload1 = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    setImage1(URL.createObjectURL(file));
  };

  const handleUpload2 = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    setImage2(URL.createObjectURL(file));
  };

  const handleUpload3 = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    setImage3(URL.createObjectURL(file));
  };

  const handleUpload4 = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    setImage4(URL.createObjectURL(file));
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
      {
        <div className=" w-40 h-40 bg-beige3 rounded-full relative   hover:scale-125 overflow-hidden">
          <div className="w-40 h-40  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <p className="text-4xl font-bold text-beige1">+</p>
            // here comes the image fetching from the database
          </div>
        </div>
      }
      <div className="w-40 h-40 bg-beige3 rounded-full relative   hover:scale-125 overflow-hidden">
        <div className="w-40 h-40  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
          <label htmlFor="upload2">
            {image2 ? (
              <img src={image2} alt="Uploaded" className="w-full h-full " />
            ) : (
              <p className="text-4xl font-bold text-beige1">+</p>
            )}
          </label>
          <input
            type="file"
            id="upload2"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleUpload2}
          />
        </div>
      </div>
      <div className="w-40 h-40 bg-beige3 rounded-full relative   hover:scale-125 overflow-hidden">
        <div className="w-40 h-40  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
          <label htmlFor="upload3">
            {image3 ? (
              <img src={image3} alt="Uploaded" className="w-full h-full " />
            ) : (
              <p className="text-4xl font-bold text-beige1">+</p>
            )}
          </label>
          <input
            type="file"
            id="upload3"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleUpload3}
          />
        </div>
      </div>
      <div className="w-40 h-40 bg-beige3 rounded-full relative   hover:scale-125 overflow-hidden">
        <div className="w-40 h-40  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
          <label htmlFor="upload4">
            {image4 ? (
              <img src={image4} alt="Uploaded" className="w-full h-full " />
            ) : (
              <p className="text-4xl font-bold text-beige1">+</p>
            )}
          </label>
          <input
            type="file"
            id="upload4"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleUpload4}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardGallery;
