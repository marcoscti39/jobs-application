import React, { useRef } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import FormTitle from "../components/FormTitle";
import InputComponent from "../components/InputComponent";
import Notification from "../components/Notification";
import SubmitButton from "../components/SubmitButton";
import { registerUser } from "../fetch/postRegister";
import { useNotification } from "../hooks/useNotification";

const Register = () => {
  const { mutate: mutateRegister } = useMutation(registerUser);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const {
    isNotificationShowing,
    notificationContent,
    setNotificationContent,
    showNotification,
  } = useNotification();

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    console.log(document.cookie);
    if (!name || !email || !password) {
      setNotificationContent({
        varient: "error",
        text: "Fill all the fields",
      });

      showNotification();
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };

    mutateRegister(newUser);
  };

  return (
    <section>
      <Form onSubmit={handleRegister}>
        <FormTitle titleText="Register" />
        <InputComponent
          ref={nameInputRef}
          labelName="Name"
          aria-label="name input"
          type={"text"}
        />
        <InputComponent
          ref={emailInputRef}
          labelName="Email"
          arial-label="email input"
          type={"email"}
        />
        <InputComponent
          ref={passwordInputRef}
          labelName="Password"
          aria-label="password input"
          type={"password"}
        />

        <SubmitButton />

        <div className="mx-auto">
          Already Registered?{" "}
          <Link to="/jobs/login" className="text-purple-600">
            Login
          </Link>
        </div>
        {isNotificationShowing && <Notification {...notificationContent} />}
      </Form>
    </section>
  );
};

export default Register;
