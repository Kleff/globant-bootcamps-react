import React, { Component } from 'react';
import Vehicle from '../components/Vehicle';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementCount } from '../actions'

import '../styles/VehiclesListContainer.css';


class VehiclesList extends Component {

  handleIncrement = count => {

    this.props.dispatch(incrementCount(count))

  }

  handleDecrement = () => {

  }

  render() {
    return (
      <div className="vehiclesList">
        <Header />
        <div className="contentList">
          {this.props.vehicles.map(vehicle =>
            <Vehicle
              key={vehicle.id}
              vehicle={vehicle}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
            />)}
        </div>
      </div>
    );
  }
}

VehiclesList.propTypes = {
  vehicles: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  }
}

const mapDispatchToProps = dispatch => (
  {
    incrementCount: count => dispatch(incrementCount(count))
  }
)

export default connect(mapStateToProps, mapDispatchToProps )(VehiclesList);
