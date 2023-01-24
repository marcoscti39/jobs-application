import React, { InputHTMLAttributes } from "react";

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  labelName: string;
};

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
  ({ labelName, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <span>{labelName}</span>
        <input {...rest} className="bg-gray-100 text-lg p-1" ref={ref} />
      </div>
    );
  }
);

export default InputComponent;
