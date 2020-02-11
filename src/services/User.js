import axios from "axios";

const signIn = async (name, password) => {
  try {
    const respone = await axios.post(
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
    return respone.data;
  } catch (err) {
    return err;
  }
};

export default signIn;
