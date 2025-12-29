import express from "express";
import { enhanceDescription } from "../controllers/aiController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/enhance-description", protect, enhanceDescription);

export default router;
