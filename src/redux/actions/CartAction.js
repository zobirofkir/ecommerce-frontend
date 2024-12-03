import { CartTypes } from "../types/cartTypes";
import * as CartService from "../services/cartService";

export const getCartAction = () => async (dispatch) => {
  dispatch({ type: CartTypes.GET_CART_REQUEST });

  try {
    const response = await CartService.fetchCart();
    dispatch({
      type: CartTypes.GET_CART_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: CartTypes.GET_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};

export const addCartAction = (data) => async (dispatch) => {
  dispatch({ type: CartTypes.ADD_CART_REQUEST });

  try {
    const response = await CartService.addCart(data);
    dispatch({
      type: CartTypes.ADD_CART_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: CartTypes.ADD_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};

export const updateCartAction = (data) => async (dispatch) => {
  dispatch({ type: CartTypes.UPDATE_CART_REQUEST });

  try {
    const response = await CartService.updateCart(data);
    dispatch({
      type: CartTypes.UPDATE_CART_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: CartTypes.UPDATE_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};

export const deleteCartAction = (id) => async (dispatch) => {
  dispatch({ type: CartTypes.DELETE_CART_REQUEST });

  try {
    await CartService.deleteCart(id);
    dispatch({
      type: CartTypes.DELETE_CART_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: CartTypes.DELETE_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};
