import React, { useState } from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const checkboxClass = `checkbox__toggler ${
    isActive ? "checkbox__toggler_active" : ""
  }`;
  const checkboxDotClass = `checkbox__dot ${
    isActive ? "checkbox__dot_active" : ""
  }`;

  return (
    <div onClick={toggleActive} className="checkbox">
      <div className={checkboxClass}>
        <div className={checkboxDotClass} />
      </div>
      <div className="checkbox__label">Короткометражки</div>
    </div>
  );
};

export default FilterCheckbox;
