import asyncHandler from "../middlewares/asyncHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    user: { name, email },
    success: true,
    message: "User registered successfully",
  });
});

export { registerUser };
