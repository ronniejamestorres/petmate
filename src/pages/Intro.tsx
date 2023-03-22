import React from "react";
import SquareOne from "../components/SquareOne";

import SquareTwo from "../components/SquareTwo";
import Button from "../components/Button";

const Intro: React.FC = () => {
  return (
    <>
      <div className="">
        <SquareOne />
      </div>
      <div className="">
        <SquareTwo />
      </div>
      <div className="p-4 flex gap-4 justify-items-center  ">
        <div className="bg-orange-500 rounded-xl h-20 w-1/3 items-center flex justify-center ">
          coco
        </div>
        <div className="bg-orange-500 rounded-xl h-20 w-2/3 items-center flex justify-center "></div>
      </div>
    </>
  );
};

export default Intro;
