import React, { useEffect, useState, useContext } from "react";
import socket from "../socket";
import CardsContext from "../contexts/CardsContext";

const ChatRoom = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { users, match } = useContext(CardsContext);

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
    <div className="flex flex-col items-center">
      <h1 className="text-3xl p-5">ChatRoom</h1>
      <form
        id="join"
        className="flex items-center flex-col justify-center gap-1"
      >
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="user"
          placeholder="your name here"
          className=" border p-1"
        />
        <input
          onChange={(e) => {
            setRoom(e.target.value);
          }}
          type="text"
          id="room"
          placeholder="the room name"
          className=" border p-1"
        />
        <button
          onClick={joinRoom}
          type="submit"
          id="join-btn"
          className="border px-1 border-gray-600 "
        >
          Join
        </button>
      </form>
      <div id="messages" className=" mt-5 ">
        <div id="chat-header">
          <p className="text-lg">Chatting with: </p>
        </div>
        <div id="chat-body" className=" h-96 border my-2">
          {messages.map((message, index) => (
            <div key={index}>
              <p className="flex justify-between items-center">
                <span>{message.username}</span>
                <span className="text-xs font-thin">{message.time}</span>
              </p>
              <p>{message.message}</p>
              <hr />
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
            className="border p-1"
            value={currentMessage}
          />
          <button onClick={sendMessage} className=" border ml-2 px-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
