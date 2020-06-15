import { axiosInstance } from "./Axios";

export const bookSlot = async (data) =>
  await axiosInstance.post("/admin/book", data);

export const changePassword = async (id, newPassword) =>
  await axiosInstance.post("admin/user-password", {
    id,
    newPassword,
  });

export const deleteSlot = async (id) =>
  await axiosInstance.delete(`/admin/delete/${id}`);

export const fetchDetails = async (id) =>
  await axiosInstance.get(`/admin/booking/${id}`);

export const fetchUsers = async (name) =>
  await axiosInstance.get("/admin/users", { params: { name } });

export const fetchUser = async (id) =>
  await axiosInstance.get("/admin/user", { params: { id } });

export const fetchUserBookings = async (id) =>
  await axiosInstance.get("/admin/user-bookings", { params: { id } });
