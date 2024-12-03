import { productInfoTypes } from "../types/productInfoTypes";

const initialState = {
    productInfo: null,
    error: null,
};

const productInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case productInfoTypes.GET_PRODUCT_INFO_SUCCESS:
        return {
            ...state,
            productInfo: action.payload,
            error: null,
        };
        case productInfoTypes.GET_PRODUCT_INFO_FAIL:
        return {
            ...state,
            productInfo: null,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default productInfoReducer;