


// counter 
const initialState = '';


// counter reducer
export const FoodReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'FOOD_CHANGE':
            return payload;
    
        default:
            return state;
    }

}
