import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewVehiclesList from './components/Views/ViewVehiclesList';
import ViewUserForm from './components/Views/ViewUserForm';

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={ViewUserForm} />
                <Route path="/vehicles" component={ViewVehiclesList} />
            </main>
        </div>
    </Router>
    , document.getElementById('root'));