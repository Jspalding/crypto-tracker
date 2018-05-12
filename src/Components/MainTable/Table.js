import React from "react";
import PropTypes from 'prop-types';

import TableUsd from "./TableCurrencies/TableUsd";
import TableGbp from "./TableCurrencies/TableGbp";
import TableBtc from "./TableCurrencies/TableBtc";

import "./Table.css";

const Table = props => {
  const { coins, percentageChange, fiat, numberFormatRender } = props;

  let TableCurrency = null;

  //bit dirty, not sure if should be switch or not
  if (fiat === "USD") {
    TableCurrency = (
      <TableUsd
        coins={coins}
        percentageChange={percentageChange}
        numberFormatRender={numberFormatRender}
      />
    );
  } else if (fiat === "GBP") {
    TableCurrency = (
      <TableGbp
        coins={coins}
        percentageChange={percentageChange}
        numberFormatRender={numberFormatRender}
      />
    );
  } else if (fiat === "BTC") {
    TableCurrency = (
      <TableBtc
        coins={coins}
        percentageChange={percentageChange}
        numberFormatRender={numberFormatRender}
      />
    );
  } else {
    TableCurrency = (
      <TableUsd
        coins={coins}
        percentageChange={percentageChange}
        numberFormatRender={numberFormatRender}
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

Table.propTypes = {
  coins: PropTypes.array,
  percentageChange: PropTypes.func,
  fiat: PropTypes.string,
  numberFormatRender: PropTypes.func
}

export default Table;
