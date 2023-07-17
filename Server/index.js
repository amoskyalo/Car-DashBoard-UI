const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const http = require("http").Server(app);
const PORT = 8080;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors({ origin: "*" }));

const io = new Server(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
    credentials: true,
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  const clients = [];
  for (let [id, socket] of io.of("/").sockets) {
    if (socket.username) {
      clients.push({ userId: id, username: socket.username });
    }
  }

  socket.broadcast.emit("users", clients);
  socket.broadcast.emit("user connected", {
    username: socket.username,
    userId: socket.id,
  });
});

//listening to port 8080
http.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
