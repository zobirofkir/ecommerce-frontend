import { orderService } from "../services/orderService";
import { orderTypes }  from "../../redux/types/orderTypes";

export const getPaymentSuccess = (payload) => ({
    type: orderTypes.GET_PAYMENT_SUCCESS,
    payload,
});

export const getPaymentFail = (payload) => ({
    type: orderTypes.GET_PAYMENT_FAIL,
    payload,
});

export const getOrderSuccess = (payload) => ({
    type: orderTypes.GET_ORDER_SUCCESS,
    payload,
});

export const getOrderFail = (payload) => ({
    type: orderTypes.GET_ORDER_FAIL,
    payload,
});

export const getOrder = () => ({
    type: orderTypes.GET_ORDER,
});

export const orderAction = () => async (dispatch) => {
    try {
        const response = await orderService();
        console.log(response.data.data);
        dispatch(getOrderSuccess(response.data.data));
    } catch (error) {
        dispatch(getOrderFail(error.response?.data || error.message));
    }
};
