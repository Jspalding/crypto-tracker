import React from 'react';

import Loader from '../Common/Loader';
import Table from './Table';

import { fetchResponseHandler } from '../../helpers';
import { API_URL } from '../../config';

import './MainTable.css';

class MainTable extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            coins: [],
            error: null,
            fiat: 'USD',
        }
    }

    componentDidMount() {
        this.fetchCoins();
        setInterval(this.fetchCoins, 300000);
    }

    //Main API call
    fetchCoins = () => {
        this.setState({ loading: true })

        fetch(`${API_URL}?convert=GBP&limit=25`)
            .then(fetchResponseHandler)
            .then((data) => {
                this.setState({
                    coins: data,
                    loading: false
                })
            })
            .catch((error) => {
                this.setState({
                    error: error.error,
                    loading: false
                })
            });
    }

    //Simple handler to take input to change currency view
    fiatChangeHandler = (event) => {
        this.setState({
            fiat: event.target.value
        })
    }

    //Changes percentage display depending on value
    percentageChange = (percent) => {
        if (percent > 0) {
            return <span className="percent-up">{percent}% <img src="img/chev-up.png" /></span>
        } else if (percent < 0) {
            return <span className="percent-down">{percent}% <img src="img/chev-down.png" /></span>
        } else {
            return <span>{percent}</span>
        }
    }

    //Used to display only 5 decimals, mainly for price.
    toDecimals = (num) => {
        return Number.parseFloat(num).toFixed(5);
    }

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

                <select value={fiat} onChange={this.fiatChangeHandler}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="BTC">BTC</option>
                </select>

                <Table
                    coins={coins}
                    fiat={fiat}
                    percentageChange={this.percentageChange}
                    decimals={this.toDecimals} />

            </div>
        );
    }
}

export default MainTable;