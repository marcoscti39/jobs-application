import Express from "express";
import { registerController } from "../controlers/register";

const router = Express.Router();

router.post("/", registerController);

export default router;
