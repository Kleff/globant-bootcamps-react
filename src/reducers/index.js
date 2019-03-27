import { combineReducers } from 'redux';
import vehicleReducer from './vehicleReducer';
import formReducer from './formReducer';

export default combineReducers({
    vehicles: vehicleReducer,
    form: formReducer
});

