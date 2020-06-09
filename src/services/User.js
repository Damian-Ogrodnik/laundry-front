import { axiosInstance } from "./Axios";

export const deleteAccount = async () => axiosInstance.delete(`/user`);

export const signIn = async (name, password) =>
  axiosInstance.post("/user/login", { name, password });

export const signUp = async (name, password, email) =>
  axiosInstance.post("/user/create", { name, email, password });

export const passwordChange = async (password, newPassword) =>
  axiosInstance.post("/user/change-password", { password, newPassword });
