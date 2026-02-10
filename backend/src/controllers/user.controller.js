import asyncHandler from "../middlewares/asyncHandler.js";
import sanitize from "mongo-sanitize";

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = sanitize(req.body);

  res.status(201).json({
    user: { name, email },
    success: true,
    massage: "User registered successfully",
  });
});

export { registerUser };
