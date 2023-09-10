import express from "express";
const router = express.Router();

import {
    addAdmin


}from "./managerControlls";




router
.post("/register", addAdmin)



export default router