import React from "react";
import { Children } from "react";
import "./Button.css";

const Button = ({ children }) => {
  return (
    <>
      <button className="button-submit" type="submit">
        {children}
      </button>
    </>
  );
};

export default Button;
