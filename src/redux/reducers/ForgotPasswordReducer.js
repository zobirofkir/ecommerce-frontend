import { forgotPasswordTypes } from '../types/ForgotPasswordTypes';

const initialState = {
    user: null,
    error: null,
    success: false,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case forgotPasswordTypes.FORGOT_PASSWORD_SUCCESS:
            return { ...state, user: action.payload, success: true };
        case forgotPasswordTypes.FORGOT_PASSWORD_FAIL:
            return { ...state, error: action.payload, success: false };
        default:
            return state;
    }
};

export default registerReducer;