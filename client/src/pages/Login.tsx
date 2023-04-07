import React, { useEffect, useRef } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import FormTitle from "../components/FormTitle";
import InputComponent from "../components/InputComponent";
import Notification, { NotificationProps } from "../components/Notification";
import SubmitButton from "../components/SubmitButton";
import { getJobs } from "../fetch/getJobs";
import { postLogin } from "../fetch/postLogin";
import { useNotification } from "../hooks/useNotification";

const Login = () => {
  const navigate = useNavigate();
  const { mutate: mutateLogin, data: userData } = useMutation(postLogin);
  const { data } = useQuery(["getJobs"], () => getJobs());

  const redirectIfSuccess = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    if (data?.name) {
      navigate("/dashboard");
    }
  }, []);

  const {
    isNotificationShowing,
    notificationContent,
    setNotificationContent,
    showNotification,
  } = useNotification();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const showNotificationWithContent = (
    notificationContent: NotificationProps
  ) => {
    setNotificationContent(notificationContent);
    showNotification();
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!email || !password) {
      setNotificationContent({ text: "Fill all the fields", varient: "error" });
      showNotification();
      return;
    }

    const loginUser = {
      email,
      password,
    };
    mutateLogin({
      userLoginData: loginUser,
      notificationCallback: showNotificationWithContent,
      redirectIfSuccess,
    });
  };

  return (
    <section>
      <Form onSubmit={handleLogin}>
        <FormTitle titleText="Login" />
        <InputComponent
          ref={emailInputRef}
          labelName="Email"
          type={"email"}
          aria-label="email input"
        />
        <InputComponent
          ref={passwordInputRef}
          labelName="Password"
          type={"password"}
          aria-label="password input"
        />
        <SubmitButton />

        <div className="mx-auto">
          Not a member yet?{" "}
          <Link to="/register" className="text-purple-600">
            Register
          </Link>
        </div>
        {isNotificationShowing && <Notification {...notificationContent} />}
      </Form>
    </section>
  );
};

export default Login;
