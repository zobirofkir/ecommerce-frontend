import productInfoService from "../services/productInfoService";
import { productInfoTypes } from "../types/productInfoTypes";

export const getProductInfoSuccess = (data) => {
  return {
    type: productInfoTypes.GET_PRODUCT_INFO_SUCCESS,
    payload: data,
  };
};

export const getProductInfoFail = (error) => {
  return {
    type: productInfoTypes.GET_PRODUCT_INFO_FAIL,
    payload: error,
  };
};

export const productInfoAction = (slug) => {
  return async (dispatch) => {
    try {
      const response = await productInfoService(slug);
      dispatch(getProductInfoSuccess(response.data.data));
    } catch (error) {
      dispatch(getProductInfoFail(error.message || "Failed to fetch product info"));
    }
  };
};

export default productInfoAction;
