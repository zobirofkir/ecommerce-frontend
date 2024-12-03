import { categoryProductTypes } from "../types/categoryProductTypes";

const initialState = {
    categories: [],
    error: null,
    products: [],
    loading: true,
  };
  
  const categoryProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case categoryProductTypes.GET_CATEGORY_PRODUCT:
        return {
          ...state,
          loading: true,
        };
      case categoryProductTypes.GET_CATEGORY_PRODUCT_SUCCESS:
        return {
          ...state,
          products: action.payload,
          error: null,
          loading: false,
        };
      case categoryProductTypes.GET_CATEGORY_PRODUCT_FAIL:
        return {
          ...state,
          products: [],
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default categoryProductReducer;
  