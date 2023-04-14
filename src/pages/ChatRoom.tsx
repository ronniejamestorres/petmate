import React from "react";

const chatRoom = () => {
  return (
    <div>
      <h1>ChatRoom</h1>
      <form id="send">
        <input type="text" id="message" placeholder="Type your message here" />
        <button type="submit" id="send">
          Send
        </button>
      </form>
    </div>
  );
};
