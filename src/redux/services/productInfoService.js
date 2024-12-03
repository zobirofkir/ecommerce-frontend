import axiosClient from "../../axios/axiosClient";

const productInfoService = async(slug) => await axiosClient.get(`/products/${slug}`);

export default productInfoService;