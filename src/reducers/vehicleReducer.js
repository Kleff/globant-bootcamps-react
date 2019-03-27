import { INCREMENT } from '../actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case INCREMENT:
            console.log('reducer INCREMENT');
            return {...state,
                vehicles: state.vehicles.map(
                    vehicle =>  vehicle.id === action.payload.id ? {...vehicle, count: action.payload.count} : vehicle
                )
            }
        default:
            return state;

    }
}