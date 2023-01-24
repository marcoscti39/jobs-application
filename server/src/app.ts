import express from "express";
import { connectDatabase } from "./db/connection";
import loginRoute from "./routes/login";
import registerRoute from "./routes/register";
import getJobsRoute from "./routes/register";

import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { getJobsController } from "./controlers/getJobs";
import { addJobController } from "./controlers/addJob";
import { removeJobController } from "./controlers/removeJob";
import { getSingleJobController } from "./controlers/getSingleJob";
import { updateJobController } from "./controlers/updateJob";

dotenv.config();
const app = express();

const PORT = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

connectDatabase();

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.get("/get-jobs", getJobsController);
app.post("/add-job", addJobController);
app.delete("/delete-job", removeJobController);
app.get("/get-single-job/:userID", getSingleJobController);
app.patch("/update-job/:userID", updateJobController);
// app.use("/get-jobs", getJobsRoute);

app.listen(PORT, () => {
  console.log("running on port 3000");
});
