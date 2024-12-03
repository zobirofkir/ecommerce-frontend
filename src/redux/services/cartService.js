import axiosClient from "../../axios/axiosClient";

export const fetchCart = async () => await axiosClient.get('/carts');
export const addCart = async (data) => await axiosClient.post(`/carts/${data.id}`, data);
export const updateCart = async (data) => await axiosClient.put(`/carts/${data.id}`, data);
export const deleteCart = async (id) => await axiosClient.delete(`/carts/${id}`);
