import express from "express";
const router = express.Router();

import {
  uploadData,
  getImageGallerys,
} from "../controller/imageGallery.controller.js";

router.post("/upload", uploadData);
router.get("/getData", getImageGallerys);

export default router;
