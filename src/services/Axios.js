import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://laundry-dorn.herokuapp.com/",
  timeout: 1000,
  headers: { "content-type": "application/json" },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    if (!config.headers.Authorization) {
      const token = await localStorage.token;
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);
