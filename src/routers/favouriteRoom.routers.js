import express from "express";
const router = express.Router();

import {
  uploadData,
  getFavouriteRooms,
} from "../controller/favouriteRoom.controller.js";

router.post("/upload", uploadData);
router.get("/getData", getFavouriteRooms);

export default router;
