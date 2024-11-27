import axiosClient from "../../axios/axiosClient";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const registerSuccess = (user) => {
    return {
        type: REGISTER_SUCCESS,
        payload: user
    };
};

export const registerFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    };
};

export const registerAction = (name, email, password) => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.post("/auth/register", {
                name,
                email,
                password,
            });
            window.location.href = "/login";
            dispatch(registerSuccess(response.data)); 
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message || "An error occurred";
            dispatch(registerFail(errorMsg)); 
        }
    };
};
