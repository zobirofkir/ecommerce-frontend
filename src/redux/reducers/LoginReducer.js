import { loginTypes } from '../types/loginTypes'

const initialState = {
    isLoggedIn: false, 
    user: null,
    error: null,

}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: null
            };
        case loginTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default loginReducer;