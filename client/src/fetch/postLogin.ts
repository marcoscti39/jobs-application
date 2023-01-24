import { NotificationProps } from "../components/Notification";

export interface UserLoginDataTypes {
  password: string;
  email: string;
}

export interface Job {
  position: string;
  company: string;
  jobState: string;
  createdAt: Date;
  _id: string;
}

export interface UserTypes {
  email: string;
  name: string;
  password: string;
  jobs: Job[];
}

interface LoginResponse {
  status: "success" | "error";
  msg: string;
  userData?: UserTypes;
}

interface PostLoginProps {
  userLoginData: UserLoginDataTypes;
  notificationCallback: (notificationContent: NotificationProps) => void;
  redirectIfSuccess: () => void;
}

export const postLogin = async ({
  userLoginData,
  notificationCallback,
  redirectIfSuccess,
}: PostLoginProps) => {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userLoginData),
  });

  const data: LoginResponse = await response.json();
  notificationCallback({ text: data.msg, varient: data.status });
  if (data.status === "success") {
    redirectIfSuccess();
  }
  return data;
};
