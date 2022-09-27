import { USER_ADDED, USER_REMOVE, USER_UPDATED } from "./actionType";
import { initialState } from "./initialState";



// user reducer
export const userReducer = (state = initialState, { type , payload}) => {

    switch (type) {
        case USER_ADDED:
            return {
                ...state,
               user : payload
            } 

        case USER_REMOVE:
            return {
                ...state,
               user : payload
            } 

            
        case USER_UPDATED:
            return {
                ...state,
               user : payload
            } 
        
        default:
            return state;
    }

}