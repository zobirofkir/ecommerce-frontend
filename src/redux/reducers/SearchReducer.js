import { GET_SEARCH, GET_SEARCH_FAIL, GET_SEARCH_SUCCESS } from "../actions/SearchAction";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH:
            return {
                ...state,
                loading: true,
                error: null, 
            };

        case GET_SEARCH_SUCCESS:
            return {
                ...state,
                products: action.data, 
                error: null,
                loading: false,
            };

        case GET_SEARCH_FAIL:
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
