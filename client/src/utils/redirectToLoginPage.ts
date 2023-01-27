import { redirect, useNavigate } from "react-router-dom";

export const redirectToLoginPage = () => {
  window.location.href = "/login";
};
