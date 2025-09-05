import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token;
        //console.log(token);
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next()

    } catch (err) {
        return res.status(403).json({ success: false, message: "Invalid token" });
    }
}