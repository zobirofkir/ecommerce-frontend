import axiosClient from "../../axios/axiosClient";

export const GET_PRODUCT_INFO_SUCCESS = "GET_PRODUCT_INFO_SUCCESS";
export const GET_PRODUCT_INFO_FAIL = "GET_PRODUCT_INFO_FAIL";

export const getProductInfoSuccess = (data) => {
  return {
    type: GET_PRODUCT_INFO_SUCCESS,
    payload: data,
  };
};

export const getProductInfoFail = (error) => {
  return {
    type: GET_PRODUCT_INFO_FAIL,
    payload: error,
  };
};

export const productInfoAction = (slug) => {
  return async (dispatch) => {
    try {
      const response = await axiosClient.get(`/products/${slug}`);
      console.log(response.data.data);
      dispatch(getProductInfoSuccess(response.data.data));
    } catch (error) {
      dispatch(getProductInfoFail(error.message || "Failed to fetch product info"));
    }
  };
};

export default productInfoAction;
