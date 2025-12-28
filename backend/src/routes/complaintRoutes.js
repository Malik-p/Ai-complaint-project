import express from "express";
import {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateStatus,
} from "../controllers/complaintController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/roleMiddleware.js";

const router = express.Router();

/* User */
router.post("/", protect, createComplaint);
router.get("/me", protect, getMyComplaints);

/* Admin */
router.get("/", protect, isAdmin, getAllComplaints);
router.put("/:id", protect, isAdmin, updateStatus);

export default router;
