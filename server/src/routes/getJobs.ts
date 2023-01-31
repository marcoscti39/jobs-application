import express from "express";
import { getJobsController } from "../controllers/getJobs";

const router = express.Router();

router.get("/", getJobsController);

export default router;
