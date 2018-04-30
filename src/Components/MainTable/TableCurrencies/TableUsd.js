import React from "react";
import { withRouter } from "react-router-dom";

import "./../Table.css";

const TableUsd = props => {
  const { coins, percentageChange, history, numberFormatRender } = props;

  return (
    <tbody>
      {coins.map((coins,index)  => (
        <tr key={coins.id} onClick={() => history.push(`/coins/${coins.id}`)}>
          <td>{coins.rank}</td>
          <td>
            {coins.name} ({coins.symbol})
          </td>
          <td><span className="currency-highlight">$</span> {coins.price_usd}</td>
          <td>{numberFormatRender(coins.available_supply)}</td>
          <td><span className="currency-highlight">$</span> {numberFormatRender(coins.market_cap_usd)}</td>
          <td>{percentageChange(coins.percent_change_24h)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default withRouter(TableUsd);
