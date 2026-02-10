import app from "./src/app.js";
import { config } from "./src/config/envConfig.js";

const startServer = () => {
  const PORT = config.port || 5000;
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
};

startServer();
