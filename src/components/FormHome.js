import React from 'react';

import '../styles/FormHome.css';


const FormHome = (props) => {
    return (
        <div className="containerForm">
            <h1>GET STARTED!</h1>
            <p>First we need some information about you</p>
            <form onSubmit={props.submitFormHandler}>
                <div>
                    <label htmlFor="userName">Username: </label>
                    <input type="text" name="userName" ref="userName" placeholder="Username" />
                </div>
                <div>
                    <label htmlFor="money">Money amount: </label>
                    <input type="number" name="money" ref="money" placeholder="0" />
                </div>
                <div>
                    <label htmlFor="owner">Do you have already a car?</label>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormHome;

