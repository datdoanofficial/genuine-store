import React from "react";
import logo from "../../assets/images/logo/logo.png";
import "./Logo.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
