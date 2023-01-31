import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const logOutController = async (
  req: Express.Request,
  res: Express.Response
) => {
  res.clearCookie("jwt-token");
  res.json({ status: "success", msg: "user logout successfully" });
};
