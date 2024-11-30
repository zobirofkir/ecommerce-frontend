import axiosClient from "../../../axios/axiosClient";

export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
export const PAYMENT_FAIL = "PAYMENT_FAIL";
export const PAYMENT = "PAYMENT";

export const GET_PAYMENT_SUCCESS = "GET_PAYMENT_SUCCESS";
export const GET_PAYMENT_FAIL = "GET_PAYMENT_FAIL";
export const GET_PAYMENT = "GET_PAYMENT";

export const paymentSuccess = (data) => ({
    type: PAYMENT_SUCCESS,
    payload: data,
});

export const paymentFail = (error) => ({
    type: PAYMENT_FAIL,
    payload: error,
});

export const payment = (data) => ({
    type: PAYMENT,
    payload: data,
});

export const getPaymentSuccess = (data) => ({
    type: GET_PAYMENT_SUCCESS,
    payload: data,
});

export const getPaymentFail = (error) => ({
    type: GET_PAYMENT_FAIL,
    payload: error,
});

export const getPayment = (data) => ({
    type: GET_PAYMENT,
    payload: data,
});

export const cartPaymentAction = (data) => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.post('/stripe/orders', data);
            const paymentUrl = response.data.data.url;
            console.log(paymentUrl);
            window.location.href = paymentUrl;
            dispatch(paymentSuccess(paymentUrl));
        } catch (error) {
            dispatch(paymentFail(error?.response?.data || error?.message || "An error occurred"));
        }
    }
};
