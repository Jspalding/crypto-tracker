import React from 'react';

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

        fetch('http://coincap.io/front')
        .then(response => {
          return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
          });
        })
        .then((data) => {
          this.setState({ coins: data, loading: false })
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }

    percentageChange = (percent) => {
        if (percent > 0) {
            return <span className="percent-up">{percent}% &uarr; </span>
        } else if (percent < 0) {
            return <span className="percent-down">{percent}% &darr; </span>
        } else {
            return <span>{percent}</span>
        }
    }

    render() {

        if(this.state.loading) {
            return <div>Loading...</div>
        }

        return (
            <div>

                <table className="Main-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Supply</th>
                            <th>Market Cap</th>
                            <th>24hr Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coins.slice(0, 25).map((coins) => (
                            <tr key={coins.long}>
                                <td>{coins.long} ({coins.short})</td>
                                <td>${coins.price})</td>
                                <td>{coins.supply}</td>
                                <td>${coins.mktcap}</td>
                                <td>{this.percentageChange(coins.cap24hrChange)}</td> 
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default MainTable;