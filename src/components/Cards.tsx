import React, { useState, useEffect } from "react";
import CardUser from "react-tinder-card";
import "../components/cards.css";
import UserCard from "./UserCard";
import axios from "axios";

function Cards() {
  const [user, setUser] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  const loggedIn = localStorage.getItem("loggedIn");

  console.log("logged in Id ", loggedIn);
  console.log("x-auth-token ", localStorage.getItem("x-auth-token"));

  //fetch all users from the database (should actualy be 'pets' to make more sence but I called the collection users)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users/getall");
        setUser(res.data); //store results in user state
        const loggedInUser = res.data.filter((ele) => ele._id === loggedIn)[0]; //filter the logged in user from the array
        console.log("logged in user ", loggedInUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  //function to handle the swiping action
  const swiped = (direction, idSwiped) => {
    console.log(`swiped ${idSwiped} to the ${direction}`);
    setLastDirection(direction);
    if (direction === "right") {
      //if the user swipes right, the user is added to the user's liked array
      axios.post(
        `http://localhost:4000/users/like/${idSwiped}`,
        {},
        {
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        }
      );
    }
  };

  //function to handle the out of frame action
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="cardPet__container">
      {
        // creating a card with "react-tinder-card" npm package for each user array element
        user.map((user) => (
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
