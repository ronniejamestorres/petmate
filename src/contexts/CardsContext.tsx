import React, { createContext, useState, useEffect, FC } from "react";
import axios from "axios";

interface ContextValue {
  users: any;
  loggedInUser: any;
  lastDirection: string;
  swiped: (direction: string, idSwiped: string) => void;
  outOfFrame: (username: string) => void;
  match: boolean;
  swipedUser: any;
}

const CardsContext = createContext<ContextValue>({
  users: [],
  loggedInUser: {},
  lastDirection: "",
  swiped: () => {},
  outOfFrame: () => {},
  swipedUser: {},
  match: false,
});

interface CardsProviderProps {
  children: React.ReactNode;
}

export const CardsProvider: FC<CardsProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<any>({});
  const [lastDirection, setLastDirection] = useState<string>("");
  const [swipedUser, setSwipedUser] = useState<any>({});
  const [match, setMatch] = useState<boolean>(false);

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

  const swiped = (direction: string, idSwiped: string) => {
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
            "x-auth-token": localStorage.getItem("x-auth-token") ?? "",
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

  const outOfFrame = (name: string) => {
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
