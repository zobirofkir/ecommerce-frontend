import { loginService } from "../services/loginService";
import { loginTypes } from "../types/loginTypes";

export function loginSuccess(data) {
  return {
    type: loginTypes.LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFail(error) {
  return {
    type: loginTypes.LOGIN_FAIL,
    payload: error,
  };
}

export const loginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await loginService(email, password);
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("name", response.data.data.name);
      window.location.href = "/profile";
      dispatch(loginSuccess(response.data));
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "An error occurred. Please try again.";
      dispatch(loginFail(errorMsg));
    }
  };
};
