import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_SUCCESS } from "../actions/ForgotPasswordAction";

const initialState = {
        user: null,
        error: null,
        success: false
    };
    
    const registerReducer = (state = initialState, action) => {
        switch (action.type) {
            case FORGOT_PASSWORD_SUCCESS:
                return { ...state, user: action.payload, success: true };
            case FORGOT_PASSWORD_FAIL:
                return { ...state, error: action.payload, success: false };
            default:
                return state;
        }
    };
    
    export default registerReducer;