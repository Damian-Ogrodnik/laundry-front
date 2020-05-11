import { axiosInstance } from "./Axios";

export const bookSlot = async (data) => {
  return await axiosInstance.post("/admin/book", data);
};

export const deleteSlot = async (id) => {
  return await axiosInstance.delete(`/admin/delete/${id}`);
};

export const fetchDetails = async (id) => {
  return await axiosInstance.get(`/admin/booking/${id}`);
};

export const fetchUsers = async (name) => {
  return await axiosInstance.get("/admin/users", { params: { name } });
};
