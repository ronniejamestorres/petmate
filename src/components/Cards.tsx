import React, { useState, useEffect } from "react";
import CardUser from "react-tinder-card";
import "../components/cards.css";
import UserCard from "./UserCard";
import axios from "axios";

function Cards() {
  const [user, setUser] = useState([]);

  //fetch all users from the database (should actualy be 'pets' to make more sence but I called the collection users)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users/getall");
        setUser(res.data); //store results in user state
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="cardPet__container">
      {
        // creating a card with "react-tinder-card" npm package for each user array element
        user.map((user) => (
          <CardUser
            className="swipe"
            key={user._id}
            preventSwipe={["up", "down"]}
          >
            <UserCard user={user} />{" "}
            {/* calling the userCard componand with the array element as prop  */}
          </CardUser>
        ))
      }
    </div>
  );
}

export default Cards;
