import express from "express";

const startServer = () => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res, next) => {
    res.send("Hello from order api");
  });
  app.listen(8002, () => {
    console.log("Server is running on 8002");
  });
};

startServer();
