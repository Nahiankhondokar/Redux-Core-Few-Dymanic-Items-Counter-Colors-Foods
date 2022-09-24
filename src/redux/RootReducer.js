import { combineReducers } from "redux";
import { ColorReducer } from "./color/ColorReducer";
import { CounterReducer } from "./counter/CounterReducer";
import { FoodReducer } from "./food/FoodReducer";
import { userReducer } from "./user/userReducer";

const RootReducer = combineReducers({
    counter : CounterReducer,
    color : ColorReducer,
    food : FoodReducer,
    user : userReducer
});

export default RootReducer;