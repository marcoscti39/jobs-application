import Express from "express";
import { registerController } from "../controllers/register";

const router = Express.Router();

router.post("/", registerController);

export default router;
