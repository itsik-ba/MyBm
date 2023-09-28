import express from "express";
const router = express.Router();

import {
    addAdmin,
    loginAdmin


}from "./managerControlls";

router
.post("/", addAdmin)
.post('/login', loginAdmin)



export default router