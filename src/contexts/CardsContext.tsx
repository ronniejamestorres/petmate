import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CardsContext = createContext({
  user: [],
  lastDirection: null,
  swiped: () => {},
  outOfFrame: () => {},
});

export const CardsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  const loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users/getall");
        setUsers(res.data);
        const loggedInUser = res.data.filter((ele) => ele._id === loggedIn)[0];
        console.log("logged in user ", loggedInUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const swiped = (direction, idSwiped) => {
    console.log(`swiped ${idSwiped} to the ${direction}`);
    setLastDirection(direction);
    if (direction === "right") {
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

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <CardsContext.Provider value={{ users, lastDirection, swiped, outOfFrame }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContext;
