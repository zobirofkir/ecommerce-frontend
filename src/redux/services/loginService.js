import axiosClient from "../../axios/axiosClient";

export const loginService = async (email , password) => await axiosClient.post("/auth/login", { email, password });