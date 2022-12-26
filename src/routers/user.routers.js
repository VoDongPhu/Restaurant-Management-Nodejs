import express from "express";
const router = express.Router();
import {getAllUsers, createNewUser, deteteUser, updateUser, getUserByID} from "../controller/user.controller.js"
router.get("/get-all-users", getAllUsers);
router.get("/get-user/:id", getUserByID)
router.post("/add-user", createNewUser)
router.delete("/delete-user",deteteUser)
router.put("/edit-user/:id",updateUser)
export default router