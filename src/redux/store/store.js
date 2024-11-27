import { applyMiddleware, combineReducers, createStore } from "redux";
import registerReducer from "../reducers/RegisterReducer";
import {thunk} from "redux-thunk"; 

const rootReducer = combineReducers({
    register: registerReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);

export default store;
