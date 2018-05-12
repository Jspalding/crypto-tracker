import React from "react";
import PropTypes from "prop-types";

import Loader from "../Common/Loader";
import Table from "./Table";

import {
  fetchResponseHandler,
  percentageChange,
  numberFormatRender
} from "../../helpers";
import { API_URL } from "../../config";

import "./MainTable.css";

class MainTable extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      coins: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchCoins();
    setInterval(this.fetchCoins, 300000);
  }

  //Main API call
  fetchCoins = () => {
    this.setState({ loading: true });

    fetch(`${API_URL}?convert=GBP&limit=25`)
      .then(fetchResponseHandler)
      .then(data => {
        this.setState({
          coins: data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.error,
          loading: false
        });
      });
  };

  render() {
    const { loading, coins, error } = this.state;
    const { fiat, fiatChangeHandler } = this.props;

    //Renders while loading data from API
    if (loading) {
      return (
        <div className="loader-wrapper">
          <Loader />
        </div>
      );
    }

    //Renders if error getting data
    if (error) {
      return (
        <div className="loader-wrapper">
          <p>{error}</p>
        </div>
      );
    }

    return (
      <div className="main-table-container">
        <div className="table-header">
          <h1>Top 25 Coins</h1>

          <select value={fiat} onChange={fiatChangeHandler}>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="BTC">BTC</option>
          </select>
        </div>

        <Table
          coins={coins}
          percentageChange={percentageChange}
          fiat={this.props.fiat}
          numberFormatRender={numberFormatRender}
        />
      </div>
    );
  }
}

MainTable.propTypes = {
  fiat: PropTypes.string,
  fiatChangeHandler: PropTypes.func
};

export default MainTable;
