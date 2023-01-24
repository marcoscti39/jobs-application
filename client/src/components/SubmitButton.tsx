import React, { ButtonHTMLAttributes } from "react";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: React.FC<SubmitButtonProps> = () => {
  return (
    <button
      type="submit"
      className="rounded bg-purple-600 text-white font-semibold py-2 mt-2"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
