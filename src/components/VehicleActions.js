import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementCount } from '../actions'

import '../styles/VehicleActions.css';



class VehicleActions extends Component {

    handleIncrement = (id, count) => {
        console.log(`el id es: ${id} y el count es: ${count}`)
        count += 1;
        this.props.dispatch(incrementCount(id, count))
      }

    render(props) {
        const {id, count} = props
        return (
            <div className="vehicleActions">
                <button onClick={this.handleIncrement(id, count)}>BUY CAR</button>
                <button onClick={this.props.handleDecrement}>SELL CAR</button>
                <p>You have <span>{count}</span> cars <i className="fas fa-shopping-cart"></i></p>
            </div>
        );
    };
}


VehicleActions.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
}

const mapDispatchToProps = dispatch => (
    {
      incrementCount: (id, count) => dispatch(incrementCount(id, count))
    }
  )

export default connect(null, mapDispatchToProps)(VehicleActions);