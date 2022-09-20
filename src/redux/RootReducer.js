import { combineReducers } from "redux";
import { ColorReducer } from "./color/ColorReducer";
import { CounterReducer } from "./counter/CounterReducer";
import { FoodReducer } from "./food/FoodReducer";

const RootReducer = combineReducers({
    counter : CounterReducer,
    color : ColorReducer,
    food : FoodReducer
});

export default RootReducer;