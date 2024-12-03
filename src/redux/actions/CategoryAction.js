import { categoryTypes } from "../types/categoryTypes";
import categoryService from "../services/categoryService";

export const getCategorySuccess = (data) => {
    return {
        type: categoryTypes.GET_CATEGORY_SUCCESS,
        payload: data,
    };
};

export const getCategoryFail = (error) => {
    return {
        type: categoryTypes.GET_CATEGORY_FAIL,
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
