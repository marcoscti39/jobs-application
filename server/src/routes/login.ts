import express from "express";
import { loginController } from "../controlers/login";

const router = express.Router();

router.post("/", loginController);

export default router;
