import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { runInNewContext } from "vm";

export const getJobsController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { userName } = req.body;
  const userData = await User.find({ name: userName });
  res.json({
    status: "success",
    name: userName,
    jobs: userData[0].jobs,
    userID: userData[0]._id,
  });
};
