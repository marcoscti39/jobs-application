import Express from "express";
import User from "../models/user";

export const getSingleJobController = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { userID } = req.params;
  let singleJob = await User.findById({ _id: userID });
  singleJob!.password = "";
  res.json({ status: "success", ...singleJob });
};
