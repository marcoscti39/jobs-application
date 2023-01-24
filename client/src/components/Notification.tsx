import React from "react";

export interface NotificationProps {
  text: string;
  varient: "success" | "error";
}

const Notification = ({ text, varient }: NotificationProps) => {
  return (
    <div className="flex justify-center">
      <p
        className={`${
          varient === "success" ? "text-green-500" : "text-red-500"
        } font-semibold`}
      >
        {text}
      </p>
    </div>
  );
};

export default Notification;
