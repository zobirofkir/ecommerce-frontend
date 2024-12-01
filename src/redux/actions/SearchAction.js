import axiosClient from "../../axios/axiosClient";

export const GET_SEARCH_SUCCESS = "GET_SEARCH_SUCCESS";
export const GET_SEARCH_FAIL = "GET_SEARCH_FAIL";
export const GET_SEARCH = "GET_SEARCH";

export const getSearchSuccess = (data) => {
    return {
        type: GET_SEARCH_SUCCESS,
        data
    }
}

export const getSearchFail = (error) => {
    return {
        type: GET_SEARCH_FAIL,
        error
    }
}

export const getSearch = () => {
    return {
        type: GET_SEARCH
    }
}

export const searchAction = (query) => async (dispatch) => {
    dispatch(getSearch());
    try {
        const response = await axiosClient.get(`/search?query=${encodeURIComponent(query)}`);
        dispatch(getSearchSuccess(response.data.data));
    } catch (error) {
        dispatch(getSearchFail(error.response?.data || error.message));
    }
}
