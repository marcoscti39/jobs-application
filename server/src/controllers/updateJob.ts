import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const updateJobController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { userID } = req.params;
  const { updatedUser } = req.body;
  console.log(updatedUser);
  const user = await User.findById({ _id: userID });
  const userWithJobUpdated = user?.jobs?.map((job) => {
    if (job._id?.toString() === updatedUser?.jobIDToBeUpdated) {
      return { ...updatedUser.job };
    }
    return job;
  });
  await User.findByIdAndUpdate({ _id: userID }, { jobs: userWithJobUpdated });
};
