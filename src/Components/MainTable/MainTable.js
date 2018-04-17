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
        };
    }

    componentDidMount() {

        this.setState({ loading: true })

        fetch(`${API_URL}?limit=25`)
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

    percentageChange = (percent) => {
        if (percent > 0) {
            return <span className="percent-up">{percent}% <img src="img/chev-up.png" /></span>
        } else if (percent < 0) {
            return <span className="percent-down">{percent}% <img src="img/chev-down.png" /></span>
        } else {
            return <span>{percent}</span>
        }
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
            <Table
            coins={coins}
            percentageChange={this.percentageChange} />
        );
    }
}

export default MainTable;