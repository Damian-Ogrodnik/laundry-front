import { axiosInstance } from "./Axios";

export const bookSlot = async data => {
  return await axiosInstance.post("/admin/book", data);
};
