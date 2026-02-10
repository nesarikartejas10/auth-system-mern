import app from "./src/app.js";

const startServer = () => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
};

startServer();
