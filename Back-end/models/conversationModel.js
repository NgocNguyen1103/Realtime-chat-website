import mongoose, { Schema } from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        { type: mongoose.Schema.Types.ObjectId, ref: "users" }
    ],
    isGroup: { type: Boolean, default: false },
    chat_name: { type: String, require: true },
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "messages" },
    chat_avatarUrl: { type: String, default: "" },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
}, {
    timestamps: true
});

const conversationModel = mongoose.Schema.conversations || mongoose.model("conversations", conversationSchema);
export default conversationModel;