import axios from "axios";

export const signIn = async (name, password) => {
  const response = await axios
    .post(
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
    )
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => console.log(err));

  return response;
};
