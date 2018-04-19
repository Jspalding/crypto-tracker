import React from 'react';
import './Table.css';
import TableUsd from './TableConditionals/TableUsd';
import TableGbp from './TableConditionals/TableGbp';

const Table = (props) => {

    const {coins, percentageChange, fiat} = props;

    return (

        <div className="table-container">

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

                {fiat === 'USD' ? (
                        <TableUsd
                        coins={coins}
                        fiat={fiat}
                        percentageChange={percentageChange} 
                        />
                    ) : (
                        <TableGbp
                        coins={coins}
                        fiat={fiat}
                        percentageChange={percentageChange} 
                        />
                    )
                }

            </table>

        </div>

    )
}

export default Table;