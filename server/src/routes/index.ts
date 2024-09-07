import express from "express";
import authRouter from "./authRouter";
import jobRouter from "./jobRouter"

const router = express.Router();

// Place all routers here to exported, can be changed
router.use("/auth", authRouter);
router.use("/jobs", jobRouter);

export default router;
