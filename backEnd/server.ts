import express from "express";
import "./data/data";
import cors from 'cors'
const app = express();
const Port = 5173
app.use(cors())
app.use(express.json());

import managerRoutes from "./API/manager/managerRouts";
app.use("/api/manager", managerRoutes );

app.listen( Port,() => {
    console.log(`Server is running: ${Port}`);
  });