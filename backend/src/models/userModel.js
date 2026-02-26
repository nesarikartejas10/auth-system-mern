import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    otp: {
      type: String,
      match: /^[0-9]{6}$/,
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
