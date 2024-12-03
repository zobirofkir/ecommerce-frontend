import stripePaymentService  from "../../services/payments/stripePaymentService";
import { stripePaymentTypes } from "../../types/payments/stripePaymentTypes";

export const paymentSuccess = (data) => ({
    type: stripePaymentTypes.PAYMENT_SUCCESS,
    payload: data,
});

export const paymentFail = (error) => ({
    type: stripePaymentTypes.PAYMENT_FAIL,
    payload: error,
});

export const payment = (data) => ({
    type: stripePaymentTypes.PAYMENT,
    payload: data,
});

export const getPaymentSuccess = (data) => ({
    type: stripePaymentTypes.GET_PAYMENT_SUCCESS,
    payload: data,
});

export const getPaymentFail = (error) => ({
    type: stripePaymentTypes.GET_PAYMENT_FAIL,
    payload: error,
});

export const getPayment = (data) => ({
    type: stripePaymentTypes.GET_PAYMENT,
    payload: data,
});

export const cartPaymentAction = (data) => {
    return async (dispatch) => {
        try {
            const response = await stripePaymentService(data);
            const paymentUrl = response.data.data.url;
            console.log(paymentUrl);
            window.location.href = paymentUrl;
            dispatch(paymentSuccess(paymentUrl));
        } catch (error) {
            dispatch(paymentFail(error?.response?.data || error?.message || "An error occurred"));
        }
    }
};
