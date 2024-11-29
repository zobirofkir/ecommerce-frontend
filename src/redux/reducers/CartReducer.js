import {
    ADD_CART_SUCCESS,
    ADD_CART_FAIL,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAIL,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAIL,
} from '../actions/CartAction';

const initialState = {
    cartItems: [], 
    loading: false,
    error: null, 
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...state.cart, action.data], 
                error: null,
            };

        case ADD_CART_FAIL:
            return {
                ...state,
                error: action.error,
            };

        case GET_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.data, 
                error: null,
            };

        case GET_CART_FAIL:
            return {
                ...state,
                error: action.error,
            };

        case DELETE_CART_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.id), 
                error: null,
            };
                
        case DELETE_CART_FAIL:
            return {
                ...state,
                error: action.error,
            };

        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.data.id ? { ...item, quantity: action.data.quantity } : item
                ),
                error: null,
            };
                
        case UPDATE_CART_FAIL:
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
};

export default cartReducer;
