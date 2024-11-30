import axiosClient from "../../axios/axiosClient";

export const GET_PAYMENT_SUCCESS = "GET_PAYMENT_SUCCESS";
export const GET_PAYMENT_FAIL = "GET_PAYMENT_FAIL";

export const getPaymentSuccess = (payload) => ({
    type: GET_PAYMENT_SUCCESS,
    payload,
});

export const getPaymentFail = (payload) => ({
    type: GET_PAYMENT_FAIL,
    payload,
});

export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAIL = "GET_ORDER_FAIL";
export const GET_ORDER = "GET_ORDER";

export const getOrderSuccess = (payload) => ({
    type: GET_ORDER_SUCCESS,
    payload,
});

export const getOrderFail = (payload) => ({
    type: GET_ORDER_FAIL,
    payload,
});

export const getOrder = () => ({
    type: GET_ORDER,
});

export const orderAction = () => async (dispatch) => {
    try {
        const response = await axiosClient.get('/orders');
        console.log(response.data.data);
        dispatch(getOrderSuccess(response.data.data));
    } catch (error) {
        dispatch(getOrderFail(error.response?.data || error.message));
    }
};
