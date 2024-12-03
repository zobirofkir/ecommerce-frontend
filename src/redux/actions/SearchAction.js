import { searchTypes } from "../types/searchTypes";
import { searchService } from "../services/searchService";

export const getSearchSuccess = (data) => {
    return {
        type: searchTypes.GET_SEARCH_SUCCESS,
        data
    }
}

export const getSearchFail = (error) => {
    return {
        type: searchTypes.GET_SEARCH_FAIL,
        error
    }
}

export const getSearch = () => {
    return {
        type: searchTypes.GET_SEARCH
    }
}

export const searchAction = (query) => async (dispatch) => {
    dispatch(getSearch());
    try {
        const response = await searchService(query);
        dispatch(getSearchSuccess(response.data.data));
    } catch (error) {
        dispatch(getSearchFail(error.response?.data || error.message));
    }
}
