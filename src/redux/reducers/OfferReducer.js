import { GET_OFFER_FAIL, GET_OFFER_SUCCESS } from "../actions/OfferAction";

const initialState = {
    offers: [],
    error: null,
};

export const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OFFER_SUCCESS:
            return {
                ...state,
                offers: action.payload,
                error: null,
            };
        case GET_OFFER_FAIL:
            return {
                ...state,
                offers: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
