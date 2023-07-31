import express from "express";
import "./data/data";
const app = express();

app.use(express.json());

import clientsRoutes from "./API/clients/clientsRouts";
app.use("/api/clients", clientsRoutes );

app.listen( () => {
    console.log(`Server is running`);
  });