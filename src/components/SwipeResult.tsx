import { useState, useContext } from "react";
import CardsContext from "../contexts/CardsContext";

function SwipeResult() {
  const { loggedInUser, lastDirection, swipedUser, match } =
    useContext(CardsContext);

  console.log(loggedInUser);

  return (
    <div className="flex w-full absolute flex-col bottom-8 py-10 justify-center items-center ">
      {match ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-blue-500 animate-bounce font-bold">
            You matched with {swipedUser.username}
          </h1>
        </div>
      ) : lastDirection === "right" ? (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            You liked {swipedUser.username}
          </h1>
        </div>
      ) : lastDirection === "left" ? (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            You disliked {swipedUser.username}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            Swipe left to dislike, <br />
            Swipe right to like
          </h1>
        </div>
      )}
    </div>
  );
}

export default SwipeResult;
