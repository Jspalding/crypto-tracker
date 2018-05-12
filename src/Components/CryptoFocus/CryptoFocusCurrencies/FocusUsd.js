import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ".././CryptoFocus.css";

const FocusUsd = props => {
  const { percentageChange, numberFormatRender, crypto } = props;

  return (

    <article>
      {crypto.map(crypto => (
        <div className="main" key={crypto.name}>
          <div className="percentage-wrapper">

            <div className="percentage-change">
              <h2>1H CHANGE</h2>
              <span>{percentageChange(crypto.percent_change_1h)}</span>
            </div>

            <div className="percentage-change">
              <h2>24H CHANGE</h2>
              <span>{percentageChange(crypto.percent_change_24h)}</span>
            </div>

            <div className="percentage-change">
              <h2>7D CHANGE</h2>
              <span>{percentageChange(crypto.percent_change_7d)}</span>
            </div>
          </div>

          <div className="focus-box">
            <div className="page-header" key={crypto.id}>
              <h1>
                {crypto.name} ({crypto.symbol})
              </h1>
              <span>#{crypto.rank}</span>
            </div>
            <div className="focus-box-body">
              <div className="focus-entry">
                <label>Current Price:</label> <span><span className="currency-highlight">$</span> {crypto.price_usd}</span>
              </div>
              <div className="focus-entry">
                <label>Market Supply:</label>{" "}
                <span>{numberFormatRender(crypto.available_supply)}</span>
              </div>
              <div className="focus-entry">
                <label>Market Cap:</label>{" "}
                <span><span className="currency-highlight">$</span> {numberFormatRender(crypto.market_cap_usd)}</span>
              </div>
            </div>
          </div>
          <Link to="/" className="focus-return"> Go Back </Link>
        </div>
      ))}
    </article>
  );
};

FocusUsd.propTypes = {
  crypto: PropTypes.array,
  percentageChange: PropTypes.func,
  numberFormatRender: PropTypes.func
}

export default FocusUsd;
