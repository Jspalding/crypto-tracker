import React from "react";
import "./Table.css";

import TableUsd from "./TableCurrencies/TableUsd";
import TableGbp from "./TableCurrencies/TableGbp";
import TableBtc from "./TableCurrencies/TableBtc";

const Table = props => {
  const { coins, percentageChange, fiat, decimals } = props;

  let TableCurrency = null;

  //bit dirty, not sure if should be switch or not
  if (fiat === "USD") {
    TableCurrency = (
      <TableUsd
        coins={coins}
        fiat={fiat}
        percentageChange={percentageChange}
        decimals={decimals}
      />
    );
  } else if (fiat === "GBP") {
    TableCurrency = (
      <TableGbp
        coins={coins}
        fiat={fiat}
        percentageChange={percentageChange}
        decimals={decimals}
      />
    );
  } else if (fiat === "BTC") {
    TableCurrency = (
      <TableBtc
        coins={coins}
        fiat={fiat}
        percentageChange={percentageChange}
        decimals={decimals}
      />
    );
  } else {
    TableCurrency = (
      <TableUsd
        coins={coins}
        fiat={fiat}
        percentageChange={percentageChange}
        decimals={decimals}
      />
    );
  }

  return (
    <div className="table-container">
      <table className="Main-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Supply</th>
            <th>Market Cap</th>
            <th>24hr Change</th>
          </tr>
        </thead>

        {TableCurrency}
      </table>
    </div>
  );
};

export default Table;
