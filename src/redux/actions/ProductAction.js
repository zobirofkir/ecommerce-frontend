import axiosClient from "../../axios/axiosClient";

export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const getProductSuccess = (data) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: data
    };
};

export const getProductFail = (error) => {
    return {
        type: GET_PRODUCT_FAIL,
        payload: error
    };
};

export const productAction = () => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.get("/products");
            dispatch(getProductSuccess(response.data.data));
        } catch (error) {
            dispatch(getProductFail(error.message || "Failed to fetch products"));
        }
    };
};
