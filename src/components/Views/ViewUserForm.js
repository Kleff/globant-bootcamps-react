import React from 'react';
import Header from '../Header';
import FormHome from '../FormHome';
import ContentHome from '../ContentHome';

import '../../styles/ViewUserForm.css';

const ViewUserForm = () => {
    return (
        <div>
            <Header />
            <div className="formBody">
                <div className="content">
                    <ContentHome />
                    <FormHome />
                </div>
            </div>
        </div>
    )
}

export default ViewUserForm;
