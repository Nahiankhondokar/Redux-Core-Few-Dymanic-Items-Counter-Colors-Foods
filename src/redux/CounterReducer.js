



// counter 
const initialState = 0;


// counter reducer
export const CounterReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;
    
        default:
            return state;
    }

}
