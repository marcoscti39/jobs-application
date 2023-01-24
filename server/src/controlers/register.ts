import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const registerController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });

  const accessKey = jwt.sign(
    { userName: name },
    process.env?.ACCESS_SECRET_KEY!,
    {
      expiresIn: "10m",
    }
  );
  res.cookie("jwt-token", accessKey);

  res.json({ status: "success", msg: "User Created!" });
};
