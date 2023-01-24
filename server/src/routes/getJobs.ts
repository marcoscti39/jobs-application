import express from "express";
import { getJobsController } from "../controlers/getJobs";

const router = express.Router();

router.get("/", getJobsController);

export default router;
