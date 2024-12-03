import registerService from "../services/registerService";
import { registerTypes } from "../types/registerTypes";

export const registerSuccess = (user) => {
    return {
        type: registerTypes.REGISTER_SUCCESS,
        payload: user
    };
};

export const registerFail = (error) => {
    return {
        type: registerTypes.REGISTER_FAIL,
        payload: error
    };
};

export const registerAction = (formData) => {
    return async (dispatch) => {
        try {
            const response = await registerService(formData);
            window.location.href = "/login";
            dispatch(registerSuccess(response.data)); 
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
            dispatch(registerFail(errorMsg)); 
        }
    };
};
