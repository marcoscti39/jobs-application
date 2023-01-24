import React, { FormHTMLAttributes } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
};
const Form = ({ children, ...rest }: FormProps) => {
  return (
    <form
      className="flex flex-col gap-4 max-w-[700px] rounded shadow mx-auto mt-12 p-6 bg-white"
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
