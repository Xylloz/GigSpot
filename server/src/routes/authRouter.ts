import express from "express";
import { googleLogin } from "../controllers/authController";

const router = express.Router();

router.get("/login", googleLogin);

export default router;
