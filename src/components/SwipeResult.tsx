import { useState, useContext } from "react";
import CardsContext from "../contexts/CardsContext";

function SwipeResult() {
  const { loggedInUser, lastDirection, swipedUser, match } =
    useContext(CardsContext);

  console.log(loggedInUser);

  return (
    <div className="flex w-full absolute flex-col bottom-24 py-24 justify-center items-center  lg:bottom-12 lg:py-12">
      {match ? (
        <div className="flex flex-col items-center">
          <h1 className="text-xl text-orange  bg-white rounded-lg animate-bounce  font-bold md:text-2xl lg:text-2xl">
            You matched with {swipedUser.username}
          </h1>
        </div>
      ) : lastDirection === "right" ? (
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold bg-beige2 rounded-lg  md:text-2xl lg:text-2xl">
            You liked {swipedUser.username}
          </h1>
        </div>
      ) : lastDirection === "left" ? (
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold bg-beige2 rounded-lg  md:text-2xl lg:text-2xl">
            You disliked {swipedUser.username}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-xl  text-beige3  bg-white rounded-lg font-bold md:text-2xl lg:text-2xl">
            Swipe left to dislike, <br />
            Swipe right to like
          </h1>
        </div>
        
      )}
    </div>
  );
}

export default SwipeResult;
