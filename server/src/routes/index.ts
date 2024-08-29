import express from "express";
import authRouter from "./authRouter";

const router = express.Router();

// Place all routers here to exported, can be changed
router.use("/auth", authRouter);

export default router;
