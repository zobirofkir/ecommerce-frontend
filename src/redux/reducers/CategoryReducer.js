import { GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS } from "../actions/CategoryAction";

const initialState = {
    categories: [],
    error: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                error: null,
            };
        case GET_CATEGORY_FAIL:
            return {
                ...state,
                categories: [],
                error: action.payload,
            };
        default:
            return state;
    }
}

export default categoryReducer;