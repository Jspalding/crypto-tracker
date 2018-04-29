import React from "react";

import "./../CryptoFocus.css";

const FocusUsd = props => {
  const { percentageChange, decimals, crypto } = props;

  return (
    <div>
        {crypto.map(crypto => (
          <div key={crypto.id}>
            <h1>
              {crypto.name} ({crypto.symbol})
            </h1>
            {crypto.rank}
            ${decimals(crypto.price_usd)}
            {crypto.available_supply}
            ${crypto.market_cap_usd}
            {percentageChange(crypto.percent_change_24h)}
          </div>
        ))}
    </div>
  );
};

export default FocusUsd;
