import React from "react";
import { withRouter } from "react-router-dom";

import "./../Table.css";

const TableBtc = props => {
  const { coins, percentageChange, fiat, decimals, history } = props;

  return (
    <tbody>
      {coins.map(coins => (
        <tr key={coins.id} onClick={() => history.push(`/coins/${coins.id}`)}>
          <td>{coins.rank}</td>
          <td>
            {coins.name} ({coins.symbol})
          </td>
          <td>{decimals(coins.price_btc)}</td>
          <td>{coins.available_supply}</td>
          <td>${coins.market_cap_usd}</td>
          <td>{percentageChange(coins.percent_change_24h)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default withRouter(TableBtc);
