import React from 'react';
import './CarActions.css';

const CarActions = (props) => {
    return (
        <div className="carActions">
            <button onClick={props.addToCart}>BUY CAR</button>
            <button onClick={props.removeToCart}>SELL CAR</button>
            <p>You have <span>{props.count}</span> cars <i className="fas fa-shopping-cart"></i></p>
        </div>
    );
};

export default CarActions;