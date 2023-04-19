import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CardsContext = createContext({
  user: [],
  lastDirection: "",
  swiped: () => {},
  outOfFrame: () => {},
});

export const CardsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [lastDirection, setLastDirection] = useState();
  const [swipedUser, setSwipedUser] = useState({});
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://wave.nodestarter.eu:4000/users/getall"
        );
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const res = await axios.get(
          `http://wave.nodestarter.eu:4000/users/getone/${localStorage.getItem(
            "loggedIn"
          )}`
        );
        setLoggedInUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLoggedInUser();
  }, []);

  const swiped = (direction, idSwiped) => {
    console.log(`swiped ${idSwiped} to the ${direction}`);
    setLastDirection(direction);

    const swiped = users.filter((user) => user._id === idSwiped);
    setSwipedUser(swiped[0]);
    if (direction === "right") {
      axios.post(
        `http://wave.nodestarter.eu:4000/users/like/${idSwiped}`,
        {},
        {
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        }
      );
      if (swiped[0].liking.includes(loggedInUser._id)) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <CardsContext.Provider
      value={{
        users,
        loggedInUser,
        lastDirection,
        swiped,
        outOfFrame,
        swipedUser,
        match,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContext;
