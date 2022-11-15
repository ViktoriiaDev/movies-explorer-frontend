import React from "react";
import "./Input.css";

const Input = ({ name, title, error, type = "text" }) => {
  const classInput = `input__field ${error ? "input__field_error" : ""}`;

  return (
    <>
      <fieldset className="input">
        <label className="input__label" htmlFor={name}>
          {title}
        </label>
        <input name={name} className={classInput} type={type} />
        <p className="input__error">{error}</p>
      </fieldset>
    </>
  );
};

export default Input;
