import { io } from "socket.io-client";
export default {
  sendMessage(context, payload) {
    const socket = io("http://localhost:3030");

    // socket.on("connect", () => {
    //   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    // });

    // socket.on("disconnect", () => {
    //   console.log(socket.id); // undefined
    // });
    socket.emit(payload.messageId, payload.message);
    context.commit("sendMessage", payload);
  },
};
