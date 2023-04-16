import React, { useEffect } from "react";
import socket from "../socket";

const ChatRoom = () => {
  const [username, setUsername] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const joinRoom = (e) => {
    e.preventDefault();
    if (username && room) {
      socket.emit("join_room", room);
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
      <form id="send">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="user"
          placeholder="your name here"
          className=" border border-black"
        />
        <input
          onChange={(e) => {
            setRoom(e.target.value);
          }}
          type="text"
          id="room"
          placeholder="the room name"
          className=" border border-black"
        />
        <button onClick={joinRoom} type="submit" id="send" className="border">
          Join the room
        </button>
      </form>
      <div id="messages" className=" mt-5 ">
        <div id="chat-body">
          {messages.map((message, index) => (
            <div key={index}>
              <p>
                <span>{message.username}</span>
                <span>{message.time}</span>
              </p>
              <p>{message.message}</p>
              <hr />
              <br />
            </div>
          ))}
        </div>
        <div id="chat-footer" className=" bottom-0">
          <input
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            type="text"
            placeholder="Hey..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
