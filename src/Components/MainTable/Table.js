import React from 'react';
import './Table.css';

const Table = (props) => {

    const {coins, percentageChange} = props;

    return (

        <div className="table-container">

            <h1>All Coins</h1>

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
                <tbody>
                    {coins.map((coins) => (
                        <tr key={coins.id}>
                            <td>{coins.rank}</td>
                            <td>{coins.name} ({coins.symbol})</td>
                            <td>${coins.price_usd}</td>
                            <td>{coins.available_supply}</td>
                            <td>${coins.market_cap_usd}</td>
                            <td>{percentageChange(coins.percent_change_24h)}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
}

export default Table;