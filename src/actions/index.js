import { INCREMENT, DECREMENT } from './types';

export const incrementCount = (id, count) => (
    {
        type: INCREMENT,
        payload: {
            id,
            count
        }
    }
);

export const decrementCount = (id, count) => (
    {
        type: DECREMENT,
        payload: {
            id,
            count
        }
    }
);