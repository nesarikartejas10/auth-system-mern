import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome into express server</h1>");
});

//global error middleware
app.use(globalErrorHandler);
export default app;
