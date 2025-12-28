import dotenv from "dotenv";
dotenv.config(); // ✅ LOAD ENV HERE FIRST

import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import complaintRoutes from "./routes/complaintRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

export default app;
