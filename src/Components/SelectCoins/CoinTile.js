import React from 'react';
import './CoinTile.css';

const tile = (props) => {
    return (
        <div className="tile">
            <img src={props.imgPath}/>
            <h2>{props.CoinName}</h2>
        </div>
    )
}

export default tile;