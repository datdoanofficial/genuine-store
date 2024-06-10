import React from "react";
import "./Header.scss";
import Navbar from "../Common/Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

export default Header;
