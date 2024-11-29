import axiosClient from "../../axios/axiosClient";

export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const ADD_CART_FAIL = "ADD_CART_FAIL";
export const ADD_CART = "ADD_CART";

export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAIL = "GET_CART_FAIL";
export const GET_CART = "GET_CART";

export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS";
export const DELETE_CART_FAIL = "DELETE_CART_FAIL";
export const DELETE_CART = "DELETE_CART";

export const UPDATE_CART_SUCCESS = "UPDATE_CART_SUCCESS";
export const UPDATE_CART_FAIL = "UPDATE_CART_FAIL";
export const UPDATE_CART = "UPDATE_CART";

export const addCart = (data) => {
    return {
        type: ADD_CART,
        data,
    };
};

export const addCartSuccess = (data) => {
    return {
        type: ADD_CART_SUCCESS,
        data,
    };
};

export const addCartFail = (error) => {
    return {
        type: ADD_CART_FAIL,
        error,
    };
};

export const getCart = () => {
    return {
        type: GET_CART,
    };
};

export const getCartSuccess = (data) => {
    return {
        type: GET_CART_SUCCESS,
        data,
    };
};

export const getCartFail = (error) => {
    return {
        type: GET_CART_FAIL,
        error,
    };
};

export const deleteCart = (id) => {
    return {
        type: DELETE_CART,
        id,
    };
};

export const deleteCartSuccess = (id) => {
    return {
        type: DELETE_CART_SUCCESS,
        id,
    };
};

export const deleteCartFail = (error) => {
    return {
        type: DELETE_CART_FAIL,
        error,
    };
};

export const updateCart = (data) => {
    return {
        type: UPDATE_CART,
        data,
    };
};

export const updateCartSuccess = (data) => {
    return {
        type: UPDATE_CART_SUCCESS,
        data,
    };
};

export const updateCartFail = (error) => {
    return {
        type: UPDATE_CART_FAIL,
        error,
    };
};

export const addCartAction = (data) => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.post(`/carts/${data.id}`, data);
            dispatch(addCartSuccess(response.data.data));
        } catch (error) {
            dispatch(addCartFail(error.response?.data || error.message));
        }
    };
};

export const getCartAction = () => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.get(`/carts`);
            dispatch(getCartSuccess(response.data.data));
        } catch (error) {
            dispatch(getCartFail(error.response?.data || error.message));
        }
    };
};

export const updateCartAction = (data) => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.put(`/carts/${data.id}`, data);
            dispatch(updateCartSuccess(response.data.data));
        } catch (error) {
            dispatch(updateCartFail(error.response?.data || error.message));
        }
    };
};
export const deleteCartAction = (id) => {
    return async (dispatch) => {
        try {
            await axiosClient.delete(`/carts/${id}`);
            dispatch(deleteCartSuccess(id));
        } catch (error) {
            dispatch(deleteCartFail(error.response?.data || error.message));
        }
    };
};
