import axiosClient from "../../axios/axiosClient";

export  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
}

export function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        payload: error
    };
}

export const loginAction = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axiosClient.post("/auth/login", {
                email,
                password,
            });
            console.log(response.data);
            localStorage.setItem('accessToken', response.data.data.accessToken);
            dispatch(loginSuccess(response.data));
        }
        catch (error) {
            const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
            dispatch(loginFail(errorMsg));
        }
    };
};
