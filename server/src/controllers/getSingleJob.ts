import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const getSingleJobController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { userID } = req.params;
  const singleJob = await User.findById({ _id: userID });
  res.json(singleJob);
};
