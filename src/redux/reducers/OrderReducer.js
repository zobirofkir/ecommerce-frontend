import { GET_ORDER_SUCCESS, GET_ORDER_FAIL, GET_ORDER } from "../actions/OrderAction";

const initialState = {
    orders: [],  
    error: null,
    loading: false,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return {
                ...state,
                loading: true, 
            };
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false, 
                error: null,
            };
        case GET_ORDER_FAIL:
            return {
                ...state,
                orders: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default orderReducer;
