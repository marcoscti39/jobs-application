import Express from "express";
import User, { Job } from "../models/user";

export const removeJobController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { name, jobID } = req.body;

  const user = await User.find({ name });

  const updatedUser = user[0].jobs.filter(
    (job) => jobID !== job?._id?.toString()
  );
  await User.updateOne({ name }, { jobs: updatedUser });
  res.json({ status: "success" });
};
