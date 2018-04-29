import React from "react";
import { withRouter } from "react-router-dom";

import "./../Table.css";

const TableUsd = props => {
  const { coins, percentageChange, decimals, history } = props;

  return (
    <tbody>
      {coins.map(coins => (
        <tr key={coins.id} onClick={() => history.push(`/coins/${coins.id}`)}>
          <td>{coins.rank}</td>
          <td>
            {coins.name} ({coins.symbol})
          </td>
          <td><span className="currency-highlight">$</span> {decimals(coins.price_usd)}</td>
          <td>{coins.available_supply}</td>
          <td><span className="currency-highlight">$</span> {coins.market_cap_usd}</td>
          <td>{percentageChange(coins.percent_change_24h)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default withRouter(TableUsd);
