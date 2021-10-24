const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
io.on("connection", (socket) => {
  console.log(socket);
  console.log("the user is connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3030, () => {
  console.log("server socket is running");
});
