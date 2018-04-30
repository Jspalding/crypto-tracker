import React from "react";
import { withRouter } from "react-router-dom";

import "./../Table.css";

const TableGbp = props => {
  const { coins, percentageChange, history, numberFormatRender } = props;

  return (
    <tbody>
      {coins.map(coins => (
        <tr key={coins.id} onClick={() => history.push(`/coins/${coins.id}`)}>
          <td>{coins.rank}</td>
          <td>
            {coins.name} ({coins.symbol})
          </td>
          <td><span className="currency-highlight">£</span> {coins.price_gbp}</td>
          <td>{numberFormatRender(coins.available_supply)}</td>
          <td><span className="currency-highlight">£</span> {numberFormatRender(coins.market_cap_gbp)}</td>
          <td>{percentageChange(coins.percent_change_24h)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default withRouter(TableGbp);
