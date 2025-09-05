import userModel from "../models/userModel.js";


export const uploadAvatar = async (req, res) => {

    try {
        const user_id = req.user.id;
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }
        const imageURL = req.file.path;
        const user = await userModel.findByIdAndUpdate(
            user_id,
            { avatarUrl: imageURL },
            { new: true }
        );
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, message: "Avatar updated", user });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error" });
    }
}