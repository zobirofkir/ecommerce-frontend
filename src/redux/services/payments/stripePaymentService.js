import axiosClient from "../../../axios/axiosClient";

const paymentService = async (data) => await axiosClient.post('/stripe/orders', data);

export default paymentService;