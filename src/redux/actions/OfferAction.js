import axiosClient from "../../axios/axiosClient";

export const GET_OFFER_SUCCESS = "GET_OFFER_SUCCESS";
export const GET_OFFER_FAIL = "GET_OFFER_FAIL";
export const GET_OFFER = "GET_OFFER";

export const getOfferSuccess = (data) => ({
    type: GET_OFFER_SUCCESS,
    payload: data,
});

export const getOfferFail = (error) => ({
    type: GET_OFFER_FAIL,
    payload: error,
});

export const getOffer = () => ({
    type: GET_OFFER,
});

export const offerAction = () => async (dispatch) => {
    try {
        dispatch(getOffer()); 
        const response = await axiosClient.get('/offers');
        dispatch(getOfferSuccess(response.data.data)); 
    } catch (error) {
        const errorMessage = error.response?.data || error.message || "An unknown error occurred";
        dispatch(getOfferFail(errorMessage)); 
    }
};
