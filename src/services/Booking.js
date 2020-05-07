import { axiosInstance } from "./Axios";

export const bookSlot = async (date, selectedSlot) => {
  const { number, hours } = selectedSlot;
  return await axiosInstance.post("/booking/", { date, number, hours });
};

export const deleteSlot = async (date, id) => {
  return await axiosInstance.delete(`/booking/${date}/${id}`);
};

export const fetchBookings = async date => {
  return axiosInstance.get(`/booking/${date}`);
};

export const fetchUserBookings = async () => {
  return await axiosInstance.get("/booking/user-bookings");
};


