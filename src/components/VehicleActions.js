import React from 'react';

import '../styles/VehicleActions.css';

const VehicleActions = (props) => {
    const { handleIncrement, handleDecrement, count } = props;
    return (
        <div className="vehicleActions">
            <button onClick={handleIncrement}>BUY CAR</button>
            <button onClick={handleDecrement}>SELL CAR</button>
            <p>You have <span>{count}</span> cars <i className="fas fa-shopping-cart"></i></p>
        </div>
    );
};

export default VehicleActions;