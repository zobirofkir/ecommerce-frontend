import axiosClient from "../../axios/axiosClient";

const productService = async () => await axiosClient.get("/products");

export default productService;