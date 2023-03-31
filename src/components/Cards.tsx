import React, { useState, useEffect } from "react";
import CardUser from "react-tinder-card";
import "../components/cards.css";
import UserCard from "./UserCard";
import axios from "axios";

function Cards() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users/getall");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  //   const [user, setUser] = useState([
  //     {
  //       name: "bert",
  //       age: 3,
  //       breed: "Bulldog",
  //       url: "https://images.unsplash.com/photo-1601245381370-4056f3f47526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //     },
  //     {
  //       name: "Honey",
  //       age: 3,
  //       breed: "Siberian Husky",
  //       url: "https://images.unsplash.com/photo-1629246999700-1e7ad7a1ba03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=824&q=80",
  //     },
  //     {
  //       name: "Luna",
  //       age: 3,
  //       breed: "british shorthair",
  //       url: "../public/emptyTemplate.jpg",
  //     },
  //   ]);

  return (
    <div className="cardPet__container">
      {user.map((user) => (
        <CardUser
          className="swipe"
          key={user._id}
          preventSwipe={["up", "down"]}
        >
          <UserCard user={user} />
        </CardUser>
      ))}
    </div>
    // <>
    //   <div className="cardPet__">
    //     <div className="cardPet__container">
    //       {user.map((user) => (
    //         <CardUser
    //           className="swipe"
    //           key={user.name}
    //           preventSwipe={["up", "down"]}
    //         >
    //           <div
    //             className="card flex "
    //             style={{ backgroundImage: `url(${user.url})` }}
    //           >
    //             <h3 className=" text-3xl">{user.name}</h3>
    //             <p> {user.age} </p>
    //             <h1>{user.breed}</h1>
    //           </div>
    //         </CardUser>
    //       ))}
    //     </div>
    //   </div>
    // </>
  );
}

export default Cards;
