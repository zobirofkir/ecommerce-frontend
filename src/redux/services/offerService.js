import axiosClient from "../../axios/axiosClient";

export const offerService = async () => await axiosClient.get('/offers');