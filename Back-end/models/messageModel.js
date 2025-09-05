import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: { type: String, require: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    conversation_id: { type: mongoose.Schema.Types.ObjectId, ref: "conversations" }
}, {
    timestamps: true
});

const messageModel = mongoose.Schema.messages || mongoose.model("messages", messageSchema);
export default messageModel;