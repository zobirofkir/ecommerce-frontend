import { applyMiddleware, combineReducers, createStore } from "redux";
import registerReducer from "../reducers/RegisterReducer";
import loginReducer from "../reducers/LoginReducer";
import forgotPasswordReducer from "../reducers/ForgotPasswordReducer";
import {thunk} from "redux-thunk"; 

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);

export default store;
