import { offerTypes } from "../types/offerTypes";
import { offerService } from "../services/offerService";

export const getOfferSuccess = (data) => ({
    type: offerTypes.GET_OFFER_SUCCESS,
    payload: data,
});

export const getOfferFail = (error) => ({
    type: offerTypes.GET_OFFER_FAIL,
    payload: error,
});

export const getOffer = () => ({
    type: offerTypes.GET_OFFER,
});

export const offerAction = () => async (dispatch) => {
    try {
        dispatch(getOffer()); 
        const response = await offerService();
        dispatch(getOfferSuccess(response.data.data)); 
    } catch (error) {
        const errorMessage = error.response?.data || error.message || "An unknown error occurred";
        dispatch(getOfferFail(errorMessage)); 
    }
};
