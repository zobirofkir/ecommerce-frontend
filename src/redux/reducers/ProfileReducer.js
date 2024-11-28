import {
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    GET_PROFILE,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT,
} from '../actions/ProfileAction';

const initialState = {
    loading: false,
    profile: null,
    error: null,
    isLoggedOut: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return { ...state, loading: true };
        case GET_PROFILE_SUCCESS:
            return { ...state, loading: false, profile: action.payload, error: null };
        case GET_PROFILE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT:
            return { ...state, loading: true };
        case LOGOUT_SUCCESS:
            return { ...state, loading: false, isLoggedOut: true, profile: null };
        case LOGOUT_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
