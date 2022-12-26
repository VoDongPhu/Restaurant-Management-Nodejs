import express from "express";
const router = express.Router();

import {
  uploadData,
  getTableTypes, deteteTable, updateTable, getTableByID
} from "../controller/tableType.controller.js";

router.post("/upload", uploadData);
router.get("/get-table/:id",getTableByID)
router.get("/getData", getTableTypes);
router.delete("/delete-table", deteteTable)
router.put("/edit-table/:id", updateTable)

export default router;
