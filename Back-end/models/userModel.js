import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    avatarUrl: { type: String, default: "" },
    lastSeenAt: { type: Date },
    verifyOtp: { type: String, default: "" },
    verifyOtpExpiredAt: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
    resetOtp: { type: String, default: "" },
    resetOtpExpiredAt: { type: Number, default: 0 }
}, {
    timestamps: true
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;