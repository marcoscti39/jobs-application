import Express from "express";
import User from "../models/user";
import jwt, { JwtPayload } from "jsonwebtoken";
import { refreshAccessToken } from "../utils/refreshAccessToken";

interface JwtErrors {
  name?: string;
  message?: string;
  expiredAt?: Date;
}

export const checkAuthorization = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { "jwt-token": jwtToken, "jwt-refresh-token": refreshJwtToken } =
    req.cookies;
  try {
    const decoded = jwt.verify(jwtToken, process.env.ACCESS_SECRET_KEY!);
    req.body.userName = (decoded as JwtPayload).userName;
    next();
  } catch (err) {
    if (err) {
      const error: JwtErrors = err;
      if (error?.name === "TokenExpiredError") {
        const decoded = refreshAccessToken(refreshJwtToken);
        if (!decoded) {
          res.json({ status: "error", msg: "Invalid jwt-token", error });
          return;
        }
        req.body.userName = (decoded as JwtPayload).userName;
        next();
        return;
      }
      console.log({ catchRefreshTimeout: true });
      res.json({ status: "error", msg: "Invalid jwt-token", error });
    }
  }
};
