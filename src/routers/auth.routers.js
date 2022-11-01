import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  registerUser,
  loginUser,
  logOut,
  changePw,
} from "../controller/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logOut", auth, logOut);
router.post("/changePw", changePw);

export default router;
