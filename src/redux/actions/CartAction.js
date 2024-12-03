import { CartActionTypes } from "../types/cartActionTypes";
import * as CartService from "../services/cartService";

export const getCartAction = () => async (dispatch) => {
  dispatch({ type: CartActionTypes.GET_CART_REQUEST });

  try {
    const response = await CartService.fetchCart();
    dispatch({
      type: CartActionTypes.GET_CART_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: CartActionTypes.GET_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};

export const addCartAction = (data) => async (dispatch) => {
  dispatch({ type: CartActionTypes.ADD_CART_REQUEST });

  try {
    const response = await CartService.addCart(data);
    dispatch({
      type: CartActionTypes.ADD_CART_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: CartActionTypes.ADD_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};

export const updateCartAction = (data) => async (dispatch) => {
  dispatch({ type: CartActionTypes.UPDATE_CART_REQUEST });

  try {
    const response = await CartService.updateCart(data);
    dispatch({
      type: CartActionTypes.UPDATE_CART_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: CartActionTypes.UPDATE_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};

export const deleteCartAction = (id) => async (dispatch) => {
  dispatch({ type: CartActionTypes.DELETE_CART_REQUEST });

  try {
    await CartService.deleteCart(id);
    dispatch({
      type: CartActionTypes.DELETE_CART_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: CartActionTypes.DELETE_CART_FAIL,
      error: error.response?.data?.message || error.message,
    });
  }
};
