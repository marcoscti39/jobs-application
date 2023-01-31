import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const addJobController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { name, data } = req.body;
  const user = await User.find({ name });
  await User.updateOne({ name }, { jobs: [...user[0].jobs, data] });
  res.json({ status: "success" });
};
