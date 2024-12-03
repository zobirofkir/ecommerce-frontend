import { categoryTypes } from "../types/categoryTypes";

const initialState = {
    categories: [],
    error: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case categoryTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                error: null,
            };
        case categoryTypes.GET_CATEGORY_FAIL:
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