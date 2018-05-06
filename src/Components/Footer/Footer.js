import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        <span className="seperator">Powered by:</span>
        <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">
          NewsAPI.org
        </a>,{" "}
        <a
          href="https://coinmarketcap.com/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoinMarketCap
        </a>{" "}
        &{" "}
        <a
          href="http://coincap.io/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coincap.io
        </a>.
      </span>
    </div>
  );
};

export default Footer;
