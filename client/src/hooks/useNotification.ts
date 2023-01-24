import { useState } from "react";
import { NotificationProps } from "../components/Notification";

const debounce = (fn: () => void, delay: number) => {
  let timeoutID = 0;
  return () => {
    if (timeoutID !== 0) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn();
    }, delay);
  };
};

export const useNotification = () => {
  const [isNotificationShowing, setIsNotificationShowing] = useState(false);
  const [notificationContent, setNotificationContent] =
    useState<NotificationProps>({} as NotificationProps);

  const closeNotificationWithDelay = debounce(
    () => setIsNotificationShowing(false),
    1000
  );

  const showNotification = () => {
    setIsNotificationShowing(true);
    closeNotificationWithDelay();
  };

  return {
    isNotificationShowing,
    showNotification,
    notificationContent,
    setNotificationContent,
  };
};
