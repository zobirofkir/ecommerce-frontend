import { applyMiddleware, combineReducers, createStore } from "redux";
import registerReducer from "../reducers/RegisterReducer";
import loginReducer from "../reducers/LoginReducer";
import {thunk} from "redux-thunk"; 

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);

export default store;
