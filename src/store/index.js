import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// Import of images
import onix from '../img/onix.jpg';
import ka from '../img/ka.jpg';
import p208 from '../img/p208.jpg';

const initialState = {
    vehicles: [
        {
            id: 1,
            count: 0,
            info: {
                img: ka,
                make: "Ford",
                model: "Ka",
                version: "LT",
                price: "$503.200",
                country: "Brasil",
                warranty: "3 años o 100.000 km"
            }
        },
        {
            id: 3,
            count: 0,
            info: {
                img: p208,
                make: "Peugeot",
                model: "208",
                version: "LTZ",
                price: "$611.700",
                country: "Brasil",
                warranty: "3 años o 100.000 km"
            }
        },
        {
            id: 2,
            count: 0,
            info: {
                img: onix,
                make: "Chrevrolet",
                model: "Onix",
                version: "LTZ",
                price: "$697.900",
                country: "Brasil",
                warranty: "3 años o 100.000 km"
            }
        }
    ]
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;