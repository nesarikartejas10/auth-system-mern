import express from "express";
import userRouter from "./routes/user.routes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import mongoSanitize from "express-mongo-sanitize";

const app = express();

//middlewares
app.use(express.json());
app.use(
  mongoSanitize({
    replaceWith: "_",
  }),
);

//routes
app.use("/api/v1/auth", userRouter);

//global error middleware
app.use(globalErrorHandler);
export default app;
