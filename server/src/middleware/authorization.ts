import Express from "express";
import User from "../models/user";
import jwt, { JwtPayload } from "jsonwebtoken";

export const checkAuthorization = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { "jwt-token": jwtToken } = req.cookies;

  try {
    const decoded = jwt.verify(jwtToken, process.env.ACCESS_SECRET_KEY!);
    req.body.userName = (decoded as JwtPayload).userName;
  } catch (err) {
    res.json({ status: "error", msg: "Invalid json-token" });

    console.log(err);
  } finally {
    next();
  }
};
