import { searchTypes } from "../types/searchTypes";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchTypes.GET_SEARCH:
            return {
                ...state,
                loading: true,
                error: null, 
            };

        case searchTypes.GET_SEARCH_SUCCESS:
            return {
                ...state,
                products: action.data, 
                error: null,
                loading: false,
            };

        case searchTypes.GET_SEARCH_FAIL:
            return {
                ...state,
                products: [], 
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
};

export default searchReducer;
