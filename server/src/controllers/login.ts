import Express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const loginController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { email, password } = req.body;
  const loginUser = await User.find({ email });

  if (loginUser.length > 0) {
    if (loginUser[0].password === password) {
      const accessKey = jwt.sign(
        { userName: loginUser[0].name },
        process.env?.ACCESS_SECRET_KEY!,
        {
          expiresIn: "10m",
        }
      );
      res.cookie("jwt-token", accessKey);
      res.json({
        userData: loginUser[0],
        userID: loginUser[0]._id,
        status: "success",
        msg: "User Logged!",
      });
    } else {
      res.json({ status: "error", msg: "incorrect user password" });
    }
    return;
  }

  res.json({ status: "error", msg: "user does not exist" });
};
