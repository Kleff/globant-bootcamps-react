import React from 'react';
import Header from '../components/Header';
import FormHome from '../components/FormHome';
import ContentHome from '../components/ContentHome';

import '../styles/UserFormContainer.css';

const UserFormContainer = () => {
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

export default UserFormContainer;
