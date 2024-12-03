import { profileTypes } from "../types/profileTypes";

const initialState = {
    loading: false,
    profile: null,
    error: null,
    isLoggedOut: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case profileTypes.GET_PROFILE:
            return { ...state, loading: true };
        case profileTypes.GET_PROFILE_SUCCESS:
            return { ...state, loading: false, profile: action.payload, error: null };
        case profileTypes.GET_PROFILE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case profileTypes.LOGOUT:
            return { ...state, loading: true };
        case profileTypes.LOGOUT_SUCCESS:
            return { ...state, loading: false, isLoggedOut: true, profile: null };
        case profileTypes.LOGOUT_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
