import React from 'react';
import './UserOptions.css';

const UserOptions = (props) => {
    return (
        <div className="options-wrapper">
            <button onClick={props.show}>Add Coins</button>
        </div>
    )
}

export default UserOptions;