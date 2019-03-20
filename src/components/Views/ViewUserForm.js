import React, { Component } from 'react';
import Header from '../Header';
import FormHome from '../FormHome';
import ContentHome from '../ContentHome';

import '../../styles/ViewUserForm.css';

class ViewUserForm extends Component {
    constructor() {
        super()
        this.state = {}
    }

    submitFormHandler = e => {
        e.preventDefault();
        this.props.history.push('/vehicles');
    }

    render() {
        return (
            <div>
                <Header />
                <div className="formBody">
                    <div className="content">
                        <ContentHome />
                        <FormHome submitFormHandler={this.submitFormHandler} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewUserForm;
