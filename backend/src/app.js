import dotenv from "dotenv";
dotenv.config(); // ✅ LOAD ENV HERE FIRST

import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
