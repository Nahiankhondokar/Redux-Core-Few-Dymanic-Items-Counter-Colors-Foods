import { GRAY, GREEN, RED } from "./actionType";
import { initialState } from "./initialState";


// color reducer
export const ColorReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case RED :
            return state = 'red';

        case GRAY :
            return state = 'gray';

        case GREEN :
            return 'green';
    
        default:
            return state;
    }

}
