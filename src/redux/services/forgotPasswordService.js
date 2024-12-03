import axiosClient from "../../axios/axiosClient";

export const forgotPasswordService = async (email) => await axiosClient.post("/auth/forgot", { email });