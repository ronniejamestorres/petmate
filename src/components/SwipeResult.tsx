import { useState, useContext } from "react";
import CardsContext from "../contexts/CardsContext";

function SwipeResult() {
  const { users, loggedInUser, lastDirection, swiped, outOfFrame } =
    useContext(CardsContext);

  return (
    <div className="flex w-full absolute flex-col bottom-8 py-10 justify-center items-center ">
      <h1>here comes the swipe result</h1>
      <p>last direction: {lastDirection}</p>
    </div>
  );
}

export default SwipeResult;
