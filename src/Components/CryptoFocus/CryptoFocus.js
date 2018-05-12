import React from "react";
import PropTypes from 'prop-types';

import Loader from "../Common/Loader";
import FocusUsd from "./CryptoFocusCurrencies/FocusUsd";
import FocusGbp from "./CryptoFocusCurrencies/FocusGbp";
import FocusBtc from "./CryptoFocusCurrencies/FocusBtc";

import {
  fetchResponseHandler,
  percentageChange,
  numberFormatRender
} from "../../helpers";

import { API_URL } from "../../config";

import "./CryptoFocus.css";

class CryptoFocus extends React.Component {

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

    //Again dirty option, need to figure out how to make this more scaleable
    if (fiat === "USD") {
      DetailCurrency = (
        <FocusUsd
          crypto={crypto}
          percentageChange={percentageChange}
          numberFormatRender={numberFormatRender}
        />
      );
    } else if (fiat === "GBP") {
      DetailCurrency = (
        <FocusGbp
          crypto={crypto}
          percentageChange={percentageChange}
          numberFormatRender={numberFormatRender}
        />
      );
    } else if (fiat === "BTC") {
      DetailCurrency = (
        <FocusBtc
          crypto={crypto}
          percentageChange={percentageChange}
          numberFormatRender={numberFormatRender}
        />
      );
    } else {
      DetailCurrency = (
        <FocusBtc
          crypto={crypto}
          percentageChange={percentageChange}
          numberFormatRender={numberFormatRender}
        />
      );
    }

    return( 
    <div className="focus-wrapper">
      {DetailCurrency}
    </div> 
    );
  }
}

CryptoFocus.propTypes = {
  fiat: PropTypes.string
}

export default CryptoFocus;
