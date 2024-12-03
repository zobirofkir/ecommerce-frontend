import { CartActionTypes } from "../types/cartActionTypes";

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART_REQUEST:
    case CartActionTypes.GET_CART_REQUEST:
    case CartActionTypes.UPDATE_CART_REQUEST:
    case CartActionTypes.DELETE_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CartActionTypes.ADD_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false,
      };

    case CartActionTypes.GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };

    case CartActionTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
      };

    case CartActionTypes.DELETE_CART_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      };

    case CartActionTypes.ADD_CART_FAIL:
    case CartActionTypes.GET_CART_FAIL:
    case CartActionTypes.UPDATE_CART_FAIL:
    case CartActionTypes.DELETE_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default cartReducer;
