import React from "react";
import Logo from "./coin-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt="CoinCheck" className="Main-logo" />
      <h1>CoinCheck</h1>
    </div>
  );
};

export default Header;
