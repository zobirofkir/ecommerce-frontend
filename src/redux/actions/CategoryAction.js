import axiosClient from "../../axios/axiosClient";

export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_FAIL = "GET_CATEGORY_FAIL";

export const getCategory = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CATEGORY_SUCCESS });
    } catch (error) {
        dispatch({ type: GET_CATEGORY_FAIL });
    }
};

export const getCategorySuccess = (data) => {
    return {
        type: GET_CATEGORY_SUCCESS,
        payload: data
    };
};

export const getCategoryFail = (error) => {
    return {
        type: GET_CATEGORY_FAIL,
        payload: error
    };
};


export const categoryAction = () => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.get("/categories");
            dispatch(getCategorySuccess(response.data.data));
        }
        catch (error) {
            dispatch(getCategoryFail(error));
        }
    }
}