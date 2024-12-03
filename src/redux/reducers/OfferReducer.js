import { offerTypes } from '../types/offerTypes'

const initialState = {
    offers: [],
    error: null,
};

export const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        case offerTypes.GET_OFFER_SUCCESS:
            return {
                ...state,
                offers: action.payload,
                error: null,
            };
        case offerTypes.GET_OFFER_FAIL:
            return {
                ...state,
                offers: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
