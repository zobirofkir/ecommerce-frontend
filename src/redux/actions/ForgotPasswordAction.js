import { forgotPasswordTypes } from "../../redux/types/ForgotPasswordTypes";
import { forgotPasswordService } from "../services/forgotPasswordService";

export function forgotPasswordSuccess(data) {
    return {
        type: forgotPasswordTypes.FORGOT_PASSWORD_SUCCESS,
        payload: data,
    };
}

export function forgotPasswordFail(error) {
    return {
        type: forgotPasswordTypes.FORGOT_PASSWORD_FAIL,
        payload: error,
    };
}

export const forgotPasswordAction = (email) => {
    return async (dispatch) => {
        try {
            const response = await forgotPasswordService(email);
            dispatch(forgotPasswordSuccess(response.data));
        } catch (error) {
            const errorMsg = error.response?.data?.message || "An error occurred. Please try again.";
            dispatch(forgotPasswordFail(errorMsg));
        }
    };
};
