import { INCREMENT, DECREMENT } from '../actions/types';


export default function (state = [], action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                vehicles: state.vehicles.map(
                    vehicle =>  vehicle.id === action.payload.id ? {...vehicle, count: action.payload.count + 1} : vehicle
                )
            }
        case DECREMENT:
            return {
                ...state,
                vehicles: state.vehicles.map(
                    vehicle =>  vehicle.id === action.payload.id ? {...vehicle, count: action.payload.count - 1} : vehicle
                )
            }
        default:
            return state;

    }
}