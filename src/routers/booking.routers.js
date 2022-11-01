import express from "express";
const router = express.Router();

import { booking } from "../controller/booking.controller.js";

router.post("/", booking);

export default router;
