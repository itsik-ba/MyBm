import express from "express";
const router = express.Router();

import {
    addAdmin



}from "./managerControlls";




router
.post("/addAdmin", addAdmin)



export default router