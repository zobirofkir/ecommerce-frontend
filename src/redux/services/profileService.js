import axiosClient from "../../axios/axiosClient";

const profileService = async () => await axiosClient.get('auth/me');

export default profileService;