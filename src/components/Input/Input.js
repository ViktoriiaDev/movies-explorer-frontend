import React from "react";
import "./Input.css";

const Input = ({ name, title, error, type = "text", onChange, minLength, maxLength }) => {
  const classInput = `input__field ${error ? "input__field_error" : ""}`;

  return (
    <>
      <fieldset className="input">
        <label className="input__label" htmlFor={name}>
          {title}
        </label>
        <input onChange={onChange} minLength={minLength} maxLength={maxLength} name={name} className={classInput} type={type} required/>
        <p className="input__error">{error}</p>
      </fieldset>
    </>
  );
};

export default Input;
