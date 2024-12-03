import axiosClient from "../../axios/axiosClient";

export const orderService = async () => await axiosClient.get('/orders');