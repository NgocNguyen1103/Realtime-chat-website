import bcrypt, { hash } from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const register = async (req, res) => {
    const { name, email, password, gender, dob } = req.body;

    if (!name || !email || !password || !gender || !dob) {
        return res.status(400).json({ success: false, message: "Missing data" });
    }

    try {
        const existing_user = await userModel.findOne({ email });
        if (existing_user) {
            return res.status(409).json({ success: false, message: "Email already exists" });
        }
        const hash_password = await bcrypt.hash(password, 10);
        const user = new userModel({ user_name: name, email, password: hash_password, gender, dob, avatarUrl: process.env.DEFAULT_AVATAR_URL });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            path: "/"
        });

        return res.status(201).json({
            success: true,
            message: "Registration successful",
            user: { id: user._id }
        });
    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Missing data" });
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "User does not exist" });
        }
        const passMatched = await bcrypt.compare(password, user.password);
        if (!passMatched) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            path: "/"
        });

        res.status(200).json({
            success: true,
            message: "Login successful"
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}

export const getUser = async (req, res) => {
    try {
        const user_id = req.user.id;
        const user = await userModel.findById(user_id);
        return res.json({ name: user.user_name })

    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            path: "/"
        });
        return res.status(200).json({
            success: true,
            message: "Logout successful"
        });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}
