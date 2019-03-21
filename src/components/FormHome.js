import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import '../styles/FormHome.css';

class FormHome extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            money: 0,
            haveCar: "",
            usernameError: "",
            moneyError: "",
            haveCarError: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let usernameError = "";
        let moneyError = "";
        let haveCarError = "";

        if (!this.state.username) {
            usernameError = "Invalid username";
        }

        if (this.state.money === 0) {
            moneyError = "Invalid amount of money"
        }

        if (!this.state.haveCar) {
            haveCarError = "You have to choose an option"
        }

        if (usernameError || moneyError || haveCarError) {
            this.setState({ usernameError, moneyError, haveCarError })
            return false;
        }

        return true;
    }

    submitFormHandler = e => {
        e.preventDefault();
        const isValid = this.validate();
        console.log(this.state);
        if (isValid) {
            this.props.history.push("/vehicles");
        }
    }

    render() {
        return (
            <div className="containerForm">
                <h1>GET STARTED!</h1>
                <p>First we need some information about you</p>
                <form onSubmit={this.submitFormHandler}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <div className="errorMessage">{this.state.usernameError}</div>
                    </div>
                    <div>
                        <label htmlFor="money">Money amount: </label>
                        <input
                            onChange={this.handleChange}
                            type="number"
                            name="money"
                            placeholder="0"
                        />
                        <div className="errorMessage">{this.state.moneyError}</div>
                    </div>
                    <div>
                        <label htmlFor="owner">Do you have already a car?</label>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                onChange={this.handleChange}
                                type="radio"
                                id="customRadioInline1"
                                name="haveCar"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                onChange={this.handleChange}
                                type="radio"
                                id="customRadioInline2"
                                name="haveCar"
                                className="custom-control-input"
                            />
                            <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                        </div>
                        <div className="errorMessage">{this.state.haveCarError}</div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
};

export default withRouter(FormHome);
