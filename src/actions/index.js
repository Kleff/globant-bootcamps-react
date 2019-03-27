import { INCREMENT } from './types';

export const incrementCount = (id, count) => (
    {
        type: INCREMENT,
        payload: {
            id,
            count
        }
    }
);