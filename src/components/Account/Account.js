import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../images/profile-icon.svg";
import "./Account.css";

const Account = () => {
  return (
    <>
      <Link className="account__profile-link" to={"/profile"}>
        Аккаунт
        <div className="account__profile-icon">
          <img alt="Логотип" src={profileIcon} />
        </div>
      </Link>
    </>
  );
};

export default Account;
