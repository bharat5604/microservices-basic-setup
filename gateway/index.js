import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  //   app.use("/auth", proxy("http://localhost:8001"));
  app.use("/order", proxy("http://localhost:8002"));
  app.use("/", proxy("http://localhost:8001"));

  app.listen(8000, () => {
    console.log("Server is running on 8000");
  });
};

startServer();
