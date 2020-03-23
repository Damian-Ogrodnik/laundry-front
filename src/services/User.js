import axios from "axios";

export const signIn = async (name, password) => {
  return axios.post(
    "http://localhost:7000/user/login",
    {
      name,
      password
    },
    {
      headers: {
        "content-type": "application/json"
      }
    }
  );
};

export const signUp = async (name, password, email) => {
  return axios.post(
    "http://localhost:7000/user/create",
    {
      name,
      email,
      password
    },
    {
      headers: {
        "content-type": "application/json"
      }
    }
  );
};

export const deleteAccount = async () => {
  const token = await localStorage.token;
  axios.defaults.headers.common["Authorization"] = token;
  return axios.delete(`http://localhost:7000/user`);
};

export const passwordChange = async (password, newPassword) => {
  return axios.post(
    "http://localhost:7000/user/change-password",
    {
      password,
      newPassword
    },
    {
      headers: {
        "content-type": "application/json"
      }
    }
  );
};
