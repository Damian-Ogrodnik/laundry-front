import * as actions from "./loginActions";

import { signIn, signUp } from "../../services/User";

export const logUser = (name, password) => async dispatch => {
  try {
    dispatch(actions.login());
    const response = await signIn(name, password).catch(err => {
      if (err.response) {
        throw new Error(err.response.data.errors[0].msg);
      }
      throw new Error("Internal Server Error");
    });
    localStorage.setItem("token", response.data.token);
    await dispatch(actions.loginSuccess(response));
  } catch (error) {
    dispatch(actions.loginFailure(error.message));
  }
};

export const registerUser = ({
  nickName,
  password,
  email
}) => async dispatch => {
  try {
    dispatch(actions.login());
    const response = await signUp(nickName, password, email).catch(err => {
      if (err.response.status === 500) {
        throw new Error("Name or email has already been taken");
      }
      throw new Error("Internal Server Error");
    });
    await dispatch(actions.loginSuccess(response));
  } catch (error) {
    dispatch(actions.loginFailure(error.message));
  }
};
