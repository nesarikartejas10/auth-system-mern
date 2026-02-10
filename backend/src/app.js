import express from "express";
import userRouter from "./routes/user.routes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";



const app = express();

//middlewares
app.use(express.json());


//routes
app.use("/api/v1/auth", userRouter);

//global error middleware
app.use(globalErrorHandler);
export default app;
