import { productTypes } from "../../redux/types/productTypes";
import productService from "../services/ProductService";

export const getProductSuccess = (data) => {
    return {
        type: productTypes.GET_PRODUCT_SUCCESS,
        payload: data
    };
};

export const getProductFail = (error) => {
    return {
        type: productTypes.GET_PRODUCT_FAIL,
        payload: error
    };
};

export const productAction = () => {
    return async (dispatch) => {
        try {
            const response = await productService();
            dispatch(getProductSuccess(response.data.data));
        } catch (error) {
            dispatch(getProductFail(error.message || "Failed to fetch products"));
        }
    };
};
