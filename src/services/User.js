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
