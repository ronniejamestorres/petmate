import io from "socket.io-client";

const socket = io("http://wave.nodestarter.eu:4000");
socket.on("connect", () => {
  console.log("front is connecting to server");
});

export default socket;