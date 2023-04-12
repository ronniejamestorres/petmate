import React, { useState, useEffect } from "react";
import CardUser from "react-tinder-card";
import "../components/cards.css";
import UserCard from "./UserCard";
import CardsContext from "../contexts/CardsContext";
import Confetti from "react-confetti";

function Cards() {
  const { users, lastDirection, swiped, outOfFrame,match } =
    React.useContext(CardsContext);

    const [showConfetti, setShowConfetti] = useState(false); // State pour gérer l'affichage du Confetti

    useEffect(() => {
      // Mettre à jour le state du Confetti lorsque le message "You matched with" est affiché
      if (match) {
        setShowConfetti(true);
        // Masquer le Confetti après 5 secondes
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      }
    }, [match]);

  return (
    <div className="cardPet__container">
      {match ? (
        showConfetti && <Confetti/>
        ) : null
      }
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
