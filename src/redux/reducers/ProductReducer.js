
import { productTypes } from "../types/productTypes";

const initialState = {
    products: [],
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case productTypes.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                error: null,
            };
        case productTypes.GET_PRODUCT_FAIL:
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
