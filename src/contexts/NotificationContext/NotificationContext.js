import React, { useState } from "react";
import "./NotificationContext.css";

export const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  const [notificationsList, setNotificationsList] = useState([]);

  const handleAddNote = (text) => {
    if (!notificationsList.includes(text)) {
      setNotificationsList((prev) => prev.concat(text));
      setTimeout(() => {
        setNotificationsList((prev) => prev.filter((item) => item !== text));
      }, 3000);
    }
  };

  return (
    <NotificationContext.Provider value={{ handleAddNote }}>
      <div className="notification-container">
        {notificationsList.map((item) => (
          <div className="notification" key={item}>
            {item}
          </div>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
