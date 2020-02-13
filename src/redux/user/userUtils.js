import * as actions from "./userActions";

import { signIn, signUp } from "../../services/User";

export const logUser = (name, password) => async dispatch => {
  try {
    dispatch(actions.login());
    const response = await signIn(name, password);
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
    const response = await signUp(nickName, password, email);
    await dispatch(actions.loginSuccess(response));
  } catch (error) {
    dispatch(actions.loginFailure(error.message));
  }
};
