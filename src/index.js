import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VehiclesListContainer from './containers/VehiclesListContainer';
import UserFormContainer from './containers/UserFormContainer';



ReactDOM.render(
    <Router>
        <div>
            <main>
                <Provider store={store}>
                    <Route exact path="/" component={UserFormContainer} />
                    <Route path="/vehicles" component={VehiclesListContainer} />
                </Provider>
            </main>
        </div>
    </Router>
    , document.getElementById('root'));