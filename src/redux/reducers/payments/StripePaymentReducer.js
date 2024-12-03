import { stripePaymentTypes } from "../../types/payments/stripePaymentTypes";

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
    case stripePaymentTypes.GET_PAYMENT_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null,
      };
    case stripePaymentTypes.GET_PAYMENT_FAIL:
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
