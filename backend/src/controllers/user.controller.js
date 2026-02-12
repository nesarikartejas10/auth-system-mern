import asyncHandler from "../middlewares/asyncHandler.js";
import createHttpError from "http-errors";

const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  res.status(201).json({
    user: { username, email },
    success: true,
    message: "User registered successfully",
  });
});

export { registerUser };
