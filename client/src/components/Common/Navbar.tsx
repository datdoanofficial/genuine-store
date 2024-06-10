import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Common/Logo";
import PrimaryBtn from "../Common/PrimaryBtn";

import "./Navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-link">
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-featured">
        <Link to="/cart">
          <span className="solar--bag-3-outline shopping-bag"></span>
        </Link>
        <PrimaryBtn to="/sign-in">Sign In</PrimaryBtn>
      </div>
    </div>
  );
};

export default Navbar;
