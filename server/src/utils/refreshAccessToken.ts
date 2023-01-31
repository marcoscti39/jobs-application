import jwt from "jsonwebtoken";

export const refreshAccessToken = (refreshAccessKeyToken: string) => {
  try {
    const decoded = jwt.verify(
      refreshAccessKeyToken,
      process.env.REFRESH_ACCESS_KEY_SECRET!
    );
    console.log("refreshed");
    return decoded;
  } catch (err) {
    return false;
  }
};
