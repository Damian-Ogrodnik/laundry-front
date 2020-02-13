import axios from "axios";

const signIn = async (name, password) => {
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

export default signIn;
