import { combineReducers } from "redux";
import { ColorReducer } from "./ColorReducer";
import { CounterReducer } from "./CounterReducer";

const RootReducer = combineReducers({
    counter : CounterReducer,
    color : ColorReducer
});

export default RootReducer;