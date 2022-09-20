import { combineReducers } from "redux";
import { ColorReducer } from "./ColorReducer";
import { CounterReducer } from "./CounterReducer";
import { FoodReducer } from "./FoodReducer";

const RootReducer = combineReducers({
    counter : CounterReducer,
    color : ColorReducer,
    food : FoodReducer
});

export default RootReducer;