import React from "react";
import { Link } from "react-router-dom";

import Logo from "./coin-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={Logo} alt="CoinCheck" className="Main-logo" />
        <h1>CoinCheck</h1>
      </Link>
    </div>
  );
};

export default Header;
