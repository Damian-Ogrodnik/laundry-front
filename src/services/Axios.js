import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:7000",
  timeout: 1000,
  headers: { "content-type": "application/json" }
});

axiosInstance.interceptors.request.use(
  async config => {
    if (!config.headers.Authorization) {
      const token = await localStorage.token;
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);
