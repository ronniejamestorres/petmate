import React, { useEffect, useState, useContext } from "react";
import socket from "../socket";
import CardsContext from "../contexts/CardsContext";
import backgroundImage from "../images/petmate-background-01.svg";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
  const username = useState(localStorage.getItem("username"));
  const [room, setRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { users } = useContext(CardsContext);
  const { id } = useParams<{ id: string }>();
  // console.log("matches: ", users && users[0].matches);

  const joinRoom = (e) => {
    e.preventDefault();
    if (username && room) {
      socket.emit("join_room", { username, room });
      console.log(username, "joining room ", room);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage) {
      console.log("sending current message: ", currentMessage);
      const messageData = {
        room: room,
        username: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString(),
      };

      setCurrentMessage("");
      socket.emit("send_message", messageData);
    }
  };

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log("message received: ", data);
    };
    socket.on("receive_message", handleReceiveMessage);

    // Clean up event listeners when the component unmounts
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center h-screen bg-center overflow-hidden bg-no-repeat bg-cover bg-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-3xl p-5 font-semibold">ChatRoom</h1>
      <p className="text-md font-semibold rounded-md bg-purewhite my-2 px-2">
        <span>Hello </span>
        <span className=" text-orange text-xl">{username}</span>
      </p>
      <form id="join" className=" items-center flex-col justify-center gap-1">
        <input
          onChange={(e) => {
            setRoom(e.target.value);
          }}
          type="text"
          id="room"
          placeholder="the room name"
          className=" border p-1 border-orange rounded-lg bg-beige1"
        />
        <button
          onClick={joinRoom}
          type="submit"
          id="join-btn"
          className="border px-2 bg-orange text-white rounded-full  border-transparent"
        >
          Join
        </button>
      </form>
      <div id="messages" className=" mt-5">
        <div id="chat-header">
          <p className="text-md font-semibold rounded-md bg-purewhite">
            Chatting with:{" "}
          </p>
        </div>
        <div
          id="chat-body"
          className="h-96 border my-2 overflow-scroll bg-beige1 rounded-lg md:h-96 md:w-80 lg:w-96"
          style={{
            overflowY: "auto",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          {messages
            .slice(0)
            .reverse()
            .map((message, index) => (
              <div key={index}>
                <p className="flex justify-between mx-0 rounded-md bg-purewhite text-orange text-sm ">
                  <span>{message.username}</span>
                  <span className=" text-sm">{message.time}</span>
                </p>
                <p className="text-md text-black flex justify-normal p-2 mx-2">
                  {message.message}
                </p>
              </div>
            ))}
        </div>
        <div id="chat-footer" className="">
          <input
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            type="text"
            placeholder="Hey..."
            className="border p-1 rounded-md border-orange lg:w-64"
          />
          <button
            onClick={sendMessage}
            className="border ml-2  border-orange px-2 rounded-lg bg-orange text-white"
          >
            Send <SendIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
