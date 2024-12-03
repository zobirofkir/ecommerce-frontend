import axiosClient from "../../axios/axiosClient";

const categoryService = async () => await axiosClient.get('/categories');

export default categoryService;