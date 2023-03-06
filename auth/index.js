import express from "express";

const startServer = () => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res, next) => {
    res.send("Hello from auth api");
  });

  app.listen(8001, () => {
    console.log("Server is running on 8001");
  });
};

startServer();
