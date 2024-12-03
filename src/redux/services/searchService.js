import axiosClient from "../../axios/axiosClient";

const searchService = async (query) => await axiosClient.get(`/search?query=${encodeURIComponent(query)}`);

export default searchService;