import express from "express";
const router = express.Router();


import {
    getAllUsers,

}from "./clientsControlls";



router
.get("/getusers", getAllUsers)




export default router