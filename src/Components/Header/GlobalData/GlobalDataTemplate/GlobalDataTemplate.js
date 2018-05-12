import React from "react";
import PropTypes from 'prop-types';

import "./../GlobalData.css";

const GlobalDataTemplate = props => {
  const { Global, largeNumber } = props;

  return (
    <div className="Global-data">
      <div>
        <h2>Total Market Cap</h2>
        <span><span className="currency-highlight">$</span> {largeNumber(Global.totalCap)}</span>
      </div>
      <div>
        <h2>Bitcoin Cap</h2>
        <span><span className="currency-highlight">$</span> {largeNumber(Global.btcCap)}</span>
      </div>
      <div>
        <h2>Alt Coin Cap</h2>
        <span><span className="currency-highlight">$</span> {largeNumber(Global.altCap)}</span>
      </div>
    </div>
  );
};

GlobalDataTemplate.propTypes = {
  Global: PropTypes.oneOfType ([
    PropTypes.array,
    PropTypes.object
  ]),
  largeNumber: PropTypes.func,
}

export default GlobalDataTemplate;
