import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../actions/ProductAction";

const initialState = {
    products: [],
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                error: null,
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                products: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
