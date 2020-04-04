import { axiosInstance } from "./Axios";

export const bookSlot = async data => {
  return await axiosInstance.post("/admin/book", data);
};

export const deleteSlot = async id => {
  return await axiosInstance.delete(`/admin/${id}`);
};
