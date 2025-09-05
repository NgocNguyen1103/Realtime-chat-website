import express from "express";
import cors from "cors";
import connectDB from './config/database.js'
import authRouters from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);
const io = new Server(server);

const port = 4000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"))
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse HTML form

connectDB();

app.get("/", (req, res) => {
    res.render("chat");
})

app.use('/api/auth', authRouters);
app.use('/api/user', userRoutes);



io.on("connection", (socket) => {
    console.log(`User ${socket.id} `);

    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected`);

    })
    let myRoom = ""
    let myName = ""
    socket.on("join_room", (room, name) => {
        socket.join(room);
        myRoom = room;
        myName = name;
        console.log(`${socket.id} join room: ${room}`);

    })
    socket.on("send_message", (mess) => {
        io.to(myRoom).emit("room_message", myName, mess)
        //console.log(`${socket.id} sent: ${mess} `);

    })
})




server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);

})