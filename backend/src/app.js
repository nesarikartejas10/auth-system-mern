import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome into express server</h1>");
});

export default app;
