import express from "express";
const router = express.Router();
import {getAllFoods,deleteFood, createNewFood, getFoodByID, updateFood} from "../controller/food.controller.js"
router.get("/", getAllFoods);
 router.get("/get-food/:id", getFoodByID)
 router.post("/add-food", createNewFood)
 router.delete("/delete-food",deleteFood)
 router.put("/edit-food/:id",updateFood)
export default router