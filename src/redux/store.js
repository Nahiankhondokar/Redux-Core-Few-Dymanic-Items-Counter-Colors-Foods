import { applyMiddleware, createStore } from "redux";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import CheckMiddleware from "../Middleware/CheckMiddleware";


const store = createStore(RootReducer, composeWithDevTools(applyMiddleware( CheckMiddleware )));



export default store;
