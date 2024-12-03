import { registerTypes } from "../types/registerTypes";

const initialState = {
    isRegistered: false, 
    user: null,
    error: null,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case registerTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                user: action.payload,
                error: null
            };
        case registerTypes.REGISTER_FAIL:
            return {
                ...state,
                isRegistered: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default registerReducer;
