import axiosClient from "../../axios/axiosClient";

export const GET_CATEGORY_PRODUCT_SUCCESS = "GET_CATEGORY_PRODUCT_SUCCESS";
export const GET_CATEGORY_PRODUCT_FAIL = "GET_CATEGORY_PRODUCT_FAIL";
export const GET_CATEGORY_PRODUCT = "GET_CATEGORY_PRODUCT";

export const getSuccess = (data) => ({
  type: GET_CATEGORY_PRODUCT_SUCCESS,
  payload: data,
});

export const getFail = (error) => ({
  type: GET_CATEGORY_PRODUCT_FAIL,
  payload: error,
});

export const getCategoryProduct = (slug) => ({
  type: GET_CATEGORY_PRODUCT,
  payload: slug,
});

const categoryProductAction = (slug) => {
  return async (dispatch) => {
    dispatch(getCategoryProduct(slug));
    try {
      const response = await axiosClient.get(`/categories/${slug}/products`);
      dispatch(getSuccess(response.data.data));
    } catch (error) {
      dispatch(getFail(error.message || "Failed to fetch products"));
    }
  };
};

export default categoryProductAction;
