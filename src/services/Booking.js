import { axiosInstance } from "./Axios";

export const bookSlot = async (date, { number, hours }) =>
  await axiosInstance.post("/booking/", { date, number, hours });

export const deleteSlot = async (date, id) =>
  await axiosInstance.delete(`/booking/${date}/${id}`);

export const fetchBookings = async (date) =>
  axiosInstance.get(`/booking/${date}`);

export const fetchUserBookings = async () =>
  await axiosInstance.get("/booking/user-bookings");
