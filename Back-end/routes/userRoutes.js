import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { uploadAvatar } from "../controllers/userController.js";
import parser from "../middleware/cloudinaryUpload.js";

const userRoutes = express.Router();

userRoutes.post("/upload_avatar", authMiddleware, parser.single('avatar'), uploadAvatar)

export default userRoutes;