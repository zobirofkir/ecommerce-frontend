import profileService from "../services/profileService";
import { profileTypes } from "../types/profileTypes";

export const getProfileSuccess = (payload) => ({
    type: profileTypes.GET_PROFILE_SUCCESS,
    payload,
});

export const getProfileFail = (payload) => ({
    type: profileTypes.GET_PROFILE_FAIL,
    payload,
});

export const getProfile = () => async (dispatch) => {
    dispatch({ type: profileTypes.GET_PROFILE });

    try {
        const response = await profileService();
        dispatch(getProfileSuccess(response.data.data));
    } catch (error) {
        dispatch(getProfileFail(error.response?.data || 'Failed to fetch profile'));
    }
};

export const logoutSuccess = () => ({
    type: profileTypes.LOGOUT_SUCCESS,
});

export const logoutFail = (payload) => ({
    type: profileTypes.LOGOUT_FAIL,
    payload,
});

export const logout = () => async (dispatch) => {
    dispatch({ type: profileTypes.LOGOUT });

    try {
        await profileService();
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutFail(error.response?.data || 'Logout failed'));
    }
};
