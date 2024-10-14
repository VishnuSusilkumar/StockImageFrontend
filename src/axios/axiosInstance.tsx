import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://stock-image-backend.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
