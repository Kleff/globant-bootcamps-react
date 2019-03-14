import React from 'react';
import ReactDOM from 'react-dom';
import VehiclesList from './components/VehiclesList';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={UserForm} />
                <Route path="/vehicles" component={VehiclesList} />
            </main>
        </div>
    </Router>
    , document.getElementById('root'));