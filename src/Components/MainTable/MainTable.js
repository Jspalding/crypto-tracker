import React from "react";

import Loader from "../Common/Loader";
import Table from "./Table";
import Search from "./TableSearch/Search";

import {
  fetchResponseHandler,
  percentageChange,
  toDecimals
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
    const { loading, coins, error, fiat } = this.state;

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
        <h1>All Coins</h1>

        <select onChange={this.props.fiatChangeHandler}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="BTC">BTC</option>
        </select>

        {/*<form>
          <input type="text" placeholder="Search" />
          <button>Submit</button>
        </form> */}

        <Table
          coins={coins}
          fiat={fiat}
          percentageChange={percentageChange}
          decimals={toDecimals}
          fiat={this.props.fiat}
        />
      </div>
    );
  }
}

export default MainTable;
