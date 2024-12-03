import axiosClient from "../../axios/axiosClient";

const registerService = async (data) => await axiosClient.post("/auth/register", data, {
    headers: {
        "Content-Type": "multipart/form-data", 
    }
});;

export default registerService;