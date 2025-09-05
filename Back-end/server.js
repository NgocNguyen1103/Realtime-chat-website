import express from "express";
import cors from "cors";
import connectDB from './config/database.js'
import authRouters from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
const app = express();
const port = 4000;

app.use(cors());
app.use(cookieParser());
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse HTML form

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth', authRouters);
app.use('/api/user', userRoutes);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);

})