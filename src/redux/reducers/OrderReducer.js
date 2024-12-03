import { orderTypes }  from "../../redux/types/orderTypes";

const initialState = {
    orders: [],  
    error: null,
    loading: false,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case orderTypes.GET_ORDER:
            return {
                ...state,
                loading: true, 
            };
        case orderTypes.GET_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false, 
                error: null,
            };
        case orderTypes.GET_ORDER_FAIL:
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
