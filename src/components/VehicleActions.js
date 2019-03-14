import React from 'react';

import '../styles/VehicleActions.css';

const VehicleActions = (props) => {
    return (
        <div className="vehicleActions">
            <button onClick={props.handleIncrement}>BUY CAR</button>
            <button onClick={props.handleDecrement}>SELL CAR</button>
            <p>You have <span>{props.count}</span> cars <i className="fas fa-shopping-cart"></i></p>
        </div>
    );
};

export default VehicleActions;