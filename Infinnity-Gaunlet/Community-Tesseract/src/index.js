import express from "express";
import cors from "cors";
import { initDB } from "./db/index.js";
import { TodosRouter } from "./route/todosrouter.js";

const api = express();

const apiPort = 3001;
api.use(cors());
api.use(express.json());
api.use(express.text());
api.use(express.urlencoded({ extended: false }));

api.use("/v1", TodosRouter);

api.listen(apiPort, () => {
  console.log(`API RUNNING IN PORT : ${apiPort}`);
  initDB().then(() => {
    console.log("DB INITIALIZED");
  });
});
