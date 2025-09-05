import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "user-avatar",
        allowed_formats: ["jpg", "png", "jpeg"],
        transformation: [{ width: 300, height: 300, crop: 'limit' }]
    }
});
const parser = multer({ storage: storage });
export default parser;