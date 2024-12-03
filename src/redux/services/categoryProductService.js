import axiosClient from "../../axios/axiosClient";

const categoryProductService = async (slug) => axiosClient.get(`/categories/${slug}/products`);

export default categoryProductService;