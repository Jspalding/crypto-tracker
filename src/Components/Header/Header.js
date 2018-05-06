import React from "react";
import { Link } from "react-router-dom";

import GlobalData from "./GlobalData/GlobalData";

import Logo from "./coin-logo.png";
import GHLogo from "./gh.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Main-header">
        <Link to="/">
          <img src={Logo} alt="CoinCheck" className="Main-logo" />
          <h1>CoinCheck</h1>
        </Link>
        <a
          href="https://github.com/Jspalding"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="gh-logo" src={GHLogo} alt="Github Link" />
        </a>
      </div>
      <div>
        <GlobalData />
      </div>
    </div>
  );
};

export default Header;
