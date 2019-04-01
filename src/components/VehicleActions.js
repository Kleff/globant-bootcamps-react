import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions'
import PropTypes from 'prop-types';

import '../styles/VehicleActions.css';



const VehicleActions = (props) => {

        const {id, count} = props
        return (
            <div className="vehicleActions">
                <button 
                onClick={() => this.props.incrementCount(id, count)}
                >BUY CAR
                </button>
                <button
                onClick={() => this.props.decrementCount(id, count)}
                >
                SELL CAR</button>
                <p>You have <span>{count}</span> cars <i className="fas fa-shopping-cart"></i></p>
            </div>
        );
    };

VehicleActions.propTypes  = {
    incrementCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        incrementCount: incrementCount,
        decrementCount: decrementCount
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(VehicleActions);