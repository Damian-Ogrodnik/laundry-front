import axios from "axios";

export const fetchBookings = async date => {
  const token = await localStorage.token;
  axios.defaults.headers.common["Authorization"] = token;
  return axios.get(`http://localhost:7000/booking/${date}`);
};

export const standarizeDate = async date => {
  const year = await date.getUTCFullYear();
  const month = (await date.getUTCMonth()) + 1;
  const day = await date.getUTCDate();

  return `${day}-${month}-${year}`;
};

export const bookSlot = async (date, selectedSlot) => {
  const token = await localStorage.token;
  axios.defaults.headers.common["Authorization"] = token;
  return axios.post("http://localhost:7000/booking/", {
    date: date,
    number: selectedSlot
  });
};

export const fetchUserBookings = async () => {
  const token = await localStorage.token;
  axios.defaults.headers.common["Authorization"] = token;
  return axios.get("http://localhost:7000/booking/user-bookings");
};
