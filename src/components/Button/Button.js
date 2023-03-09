import React from "react";
import "./Button.css";

const Button = ({ children, disabled }) => {
  return (
    <>
      <button
        className={`button-submit ${disabled ? "button-submit_disabled" : ""}`}
        type="submit"
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
