import axiosClient from "../../axios/axiosClient";

export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";

export function forgotPasswordSuccess(data) {
    return {
        type: FORGOT_PASSWORD_SUCCESS,
        payload: data
    };
}

export function forgotPasswordFail(error) {
    return {
        type: FORGOT_PASSWORD_FAIL,
        payload: error
    };
}

export const forgotPasswordAction = (email) => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.post("/auth/forgot", {
                email,
            });
            dispatch(forgotPasswordSuccess(response.data));
        }
        catch (error) {
            const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
            dispatch(forgotPasswordFail(errorMsg));
        }
    };
};