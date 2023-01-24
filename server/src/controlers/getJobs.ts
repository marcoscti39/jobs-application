import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const getJobsController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { "jwt-token": jwtToken } = req.cookies;
  try {
    const decoded = jwt.verify(jwtToken, process.env.ACCESS_SECRET_KEY!);
    const userName = (decoded as JwtPayload).userName;
    const userData = await User.find({ name: userName });
    res.json({
      status: "success",
      name: userName,
      jobs: userData[0].jobs,
      userID: userData[0]._id,
    });
  } catch (err) {
    res.json({ status: "error", msg: "Invalid json-token" });
    console.log(err);
  }
};
