import { applyMiddleware, combineReducers, createStore } from "redux";
import registerReducer from "../reducers/RegisterReducer";
import loginReducer from "../reducers/LoginReducer";
import forgotPasswordReducer from "../reducers/ForgotPasswordReducer";
import categoryReducer from "../reducers/CategoryReducer";
import productReducer from "../reducers/ProductReducer";
import productInfoReducer from "../reducers/ProductInfoReducer";
import categoryProductReducer from "../reducers/CategoryProductReducer";
import { profileReducer } from "../reducers/ProfileReducer";
import {thunk} from "redux-thunk"; 
import cartReducer from "../reducers/CartReducer";
import stripePaymentReducer from "../reducers/payments/StripePaymentReducer";
import orderReducer from "../reducers/OrderReducer";
import searchReducer from "../reducers/SearchReducer";

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    category: categoryReducer,
    product: productReducer,
    productInfo: productInfoReducer,
    categoryProductReducer: categoryProductReducer,
    profile: profileReducer,
    cart: cartReducer,
    stripePayment: stripePaymentReducer,
    orders: orderReducer,
    search: searchReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) 
);

export default store;
