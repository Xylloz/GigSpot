import express from "express";
import authRouter from "./authRouter";
import jobRouter from "./jobRouter"
import userRouter from "./userRouter";

const router = express.Router();

// Place all routers here to exported, can be changed
router.use("/auth", authRouter);
router.use("/jobs", jobRouter);
router.use("/users", userRouter);

export default router;
