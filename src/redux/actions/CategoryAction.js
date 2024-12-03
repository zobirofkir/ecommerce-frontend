import { categoryActionTypes } from "../types/categoryActionTypes";
import categoryService from "../services/categoryService";

export const getCategorySuccess = (data) => {
    return {
        type: categoryActionTypes.GET_CATEGORY_SUCCESS,
        payload: data,
    };
};

export const getCategoryFail = (error) => {
    return {
        type: categoryActionTypes.GET_CATEGORY_FAIL,
        payload: error.response?.data || error.message,
    };
};

export const categoryAction = () => {
    return async (dispatch) => {
        try {
            const response = await categoryService();
            dispatch(getCategorySuccess(response.data.data));
        } catch (error) {
            dispatch(getCategoryFail(error));
        }
    };
};
