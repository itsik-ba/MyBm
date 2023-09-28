import express from "express";
import "./data/data";
import cors from 'cors'
import jwt from 'jsonwebtoken';
const app = express();

app.use(cors())
app.use(express.json());

import managerRoutes from "./API/manager/managerRouts";
app.use("/", managerRoutes );

app.listen(3000, () => {
  console.log("server listen on port 3000");
});