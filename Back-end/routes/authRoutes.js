import express from "express";
import { register, login, logout, getUser } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouters = express.Router()

authRouters.post("/register", register);
authRouters.post("/login", login);
authRouters.get("/me",authMiddleware, getUser);
authRouters.get("/logout", logout);

export default authRouters