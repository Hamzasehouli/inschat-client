const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    // methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  console.log("the user is connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("hamza", (msg) => {
    console.log(msg);
  });
});

server.listen(3030, () => {
  console.log("server socket is running");
});
