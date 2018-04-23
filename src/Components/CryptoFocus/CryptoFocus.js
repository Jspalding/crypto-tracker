import React from "react";

import Loader from "../Common/Loader";

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

    fetch(`${API_URL}${cryptoData}/`)
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

    return (
      <div>
        {crypto.map(crypto => (
          <ul key={crypto.id}>
            <h1>
              {crypto.name} ({crypto.symbol})
            </h1>
            {crypto.rank}
            £{toDecimals(crypto.price_usd)}
            {crypto.available_supply}
            £{crypto.market_cap_usd}
            {percentageChange(crypto.percent_change_24h)}
          </ul>
        ))}
      </div>
    );
  }
}

export default CryptoFocus;
