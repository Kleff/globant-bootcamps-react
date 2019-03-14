import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

import '../styles/UserForm.css';

class UserForm extends Component {

    submitFormHandler = e => {

        e.preventDefault();
        this.props.history.push('/vehicles');
    }

    render() {
        return (
            <div className="userForm">
                <Header />
                <div className="containerHeader">
                    <h1>Welcome!</h1>
                    <p>First we need some information about you</p>
                    <form onSubmit={this.submitFormHandler}>
                        <div>
                            <label htmlFor="userName">Username: </label>
                            <input type="text" name="userName" ref="userName" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="money">Money amount: </label>
                            <input type="number" name="money" ref="money" placeholder="0" />
                        </div>
                        <div>
                            <label htmlFor="owner">Do you have a car?</label>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
                                <label className="custom-control-label" for="customRadioInline1">Yes</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                <label className="custom-control-label" for="customRadioInline2">No</label>
                            </div>
                        </div>
                        <Link to={`/vehicles`}><input type="submit" value="Submit" /></Link>

                    </form>
                </div>
            </div>
        )
    }
}

export default UserForm;
