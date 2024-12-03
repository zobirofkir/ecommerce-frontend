import { categoryProductTypes } from "../types/categoryProductTypes";
import categoryProductService from "../services/categoryProductService";

export const getSuccess = (data) => ({
  type: categoryProductTypes.GET_CATEGORY_PRODUCT_SUCCESS,
  payload: data,
});

export const getFail = (error) => ({
  type: categoryProductTypes.GET_CATEGORY_PRODUCT_FAIL,
  payload: error,
});

export const getCategoryProduct = (slug) => ({
  type: categoryProductTypes.GET_CATEGORY_PRODUCT,
  payload: slug,
});

const categoryProductAction = (slug) => {
  return async (dispatch) => {
    dispatch(getCategoryProduct(slug));
    try {
      const response = await categoryProductService(slug);
      dispatch(getSuccess(response.data.data));
    } catch (error) {
      dispatch(getFail(error.message || "Failed to fetch products"));
    }
  };
};

export default categoryProductAction;
