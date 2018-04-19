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

    fiatChangeHandler = (event) => {
        this.setState({
            fiat: event.target.value
        })
    }

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

        const { loading, coins, error } = this.state;

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

                <select value={this.state.fiat} onChange={this.fiatChangeHandler}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="BTC">BTC</option>
                </select>

                <Table
                coins={coins}
                fiat={this.state.fiat}
                percentageChange={this.percentageChange}
                decimals={this.toDecimals} />

            </div>
        );
    }
}

export default MainTable;