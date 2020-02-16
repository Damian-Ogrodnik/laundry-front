import axios from "axios";

export const getDate = async date => {
  const token = await localStorage.token;
  console.log(token);
  axios.defaults.headers.common["Authorization"] = token;
  return axios.get("http://localhost:7000/booking", {
    date
  });
};
