import express from "express";
const router = express.Router();

import {
  uploadData,
  getAwesomeServices,
} from "../controller/awesomeService.controller.js";

router.post("/upload", uploadData);
router.get("/getData", getAwesomeServices);

export default router;
