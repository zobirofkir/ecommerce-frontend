import axiosClient from "../../axios/axiosClient";

export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAIL = "GET_PROFILE_FAIL";
export const GET_PROFILE = "GET_PROFILE";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOGOUT = "LOGOUT";

export const getProfileSuccess = (payload) => ({
    type: GET_PROFILE_SUCCESS,
    payload,
});

export const getProfileFail = (payload) => ({
    type: GET_PROFILE_FAIL,
    payload,
});

export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE });

    try {
        const response = await axiosClient.get('auth/me');
        dispatch(getProfileSuccess(response.data.data));
    } catch (error) {
        dispatch(getProfileFail(error.response?.data || 'Failed to fetch profile'));
    }
};

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logoutFail = (payload) => ({
    type: LOGOUT_FAIL,
    payload,
});

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });

    try {
        await axiosClient.post('auth/logout');
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutFail(error.response?.data || 'Logout failed'));
    }
};
