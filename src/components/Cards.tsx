import React, { useState, useEffect } from "react";
import CardUser from "react-tinder-card";
import "../components/cards.css";
import UserCard from "./UserCard";
import CardsContext from "../contexts/CardsContext";

function Cards() {
  const { users, lastDirection, swiped, outOfFrame } =
    React.useContext(CardsContext);

  return (
    <div className="cardPet__container">
      {
        // creating a card with "react-tinder-card" npm package for each user array element
        users.map((user) => (
          <CardUser
            className="swipe"
            key={user._id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, user._id)}
            onCardLeftScreen={() => outOfFrame(user.username)}
          >
            {/* calling the userCard componand with the array element as prop  */}
            <UserCard user={user} />
          </CardUser>
        ))
      }
    </div>
  );
}

export default Cards;
