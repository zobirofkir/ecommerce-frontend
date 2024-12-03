import { CartTypes } from "../types/cartTypes";

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypes.ADD_CART_REQUEST:
    case CartTypes.GET_CART_REQUEST:
    case CartTypes.UPDATE_CART_REQUEST:
    case CartTypes.DELETE_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CartTypes.ADD_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false,
      };

    case CartTypes.GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };

    case CartTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
      };

    case CartTypes.DELETE_CART_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      };

    case CartTypes.ADD_CART_FAIL:
    case CartTypes.GET_CART_FAIL:
    case CartTypes.UPDATE_CART_FAIL:
    case CartTypes.DELETE_CART_FAIL:
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
