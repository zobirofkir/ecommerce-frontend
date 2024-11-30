import {
  GET_PAYMENT_FAIL,
  GET_PAYMENT_SUCCESS,
} from "../../actions/payments/StripePaymentAction";

const initialState = {
  cartItems: [],
  error: null,
  name: null,
  email: null,
  country: null,
  address: null,
  postal_code: null,
};

const stripePaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null,
      };
    case GET_PAYMENT_FAIL:
      return {
        ...state,
        cartItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stripePaymentReducer;
