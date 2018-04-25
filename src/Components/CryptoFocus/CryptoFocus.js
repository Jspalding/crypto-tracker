import React from "react";

import Loader from "../Common/Loader";
import FocusUsd from "./CryptoFocusCurrencies/FocusUsd";
import FocusGbp from "./CryptoFocusCurrencies/FocusGbp";
import FocusBtc from "./CryptoFocusCurrencies/FocusBtc";

import {
  fetchResponseHandler,
  percentageChange,
  toDecimals
} from "../../helpers";

import { API_URL } from "../../config";

import "./CryptoFocus.css";

class CryptoFocus extends React.Component {
  //To do: 
  //Style Template
  //Return Button

  constructor() {
    super();

    this.state = {
      loading: false,
      crypto: [],
      error: null
    };
  }

  componentWillMount() {
    this.fetchCrypto();
  }

  fetchCrypto = () => {
    const cryptoData = this.props.match.params.id; //'match' as this is the param passed from router

    this.setState({ loading: true });

    fetch(`${API_URL}${cryptoData}/?convert=GBP`)
      .then(fetchResponseHandler)
      .then(data => {
        this.setState({
          crypto: data,
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
    const { loading, error, crypto } = this.state;
    const { fiat } = this.props;

    //reuse loading components from maintable
    if (loading) {
      return (
        <div className="loader-wrapper">
          <Loader />
        </div>
      );
    }
    if (error) {
      return (
        <div className="loader-wrapper">
          <p>{error}</p>
        </div>
      );
    }

    let DetailCurrency = null;

    if (fiat === "USD") {
      DetailCurrency = (
        <FocusUsd
          crypto={crypto}
          percentageChange={percentageChange}
          decimals={toDecimals}
        />
      );
    } else if (fiat === "GBP") {
      DetailCurrency = (
        <FocusGbp
          crypto={crypto}
          percentageChange={percentageChange}
          decimals={toDecimals}
        />
      );
    } else if (fiat === "BTC") {
      DetailCurrency = (
        <FocusBtc
        crypto={crypto}
          percentageChange={percentageChange}
          decimals={toDecimals}
        />
      );
    } else {
      DetailCurrency = (
        <FocusBtc
        crypto={crypto}
          percentageChange={percentageChange}
          decimals={toDecimals}
        />
      );
    }

    return (
      <div>{DetailCurrency}</div>
    );
  }
}

export default CryptoFocus;
