import * as actions from "./userActions";

import {
  signIn,
  signUp,
  deleteAccount,
  passwordChange
} from "../../services/User";
import { enableToast } from "../../redux/toast/toastActions";

export const logUser = (name, password) => async dispatch => {
  try {
    dispatch(actions.login());
    const response = await signIn(name, password);
    localStorage.setItem("token", response.data.token);
    await dispatch(actions.loginSuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(actions.loginFailure(error.response.data.errors[0].msg));
    } else {
      dispatch(actions.loginFailure("Internal server error"));
    }
  }
};

export const registerUser = ({
  Nickname,
  Password,
  Email
}) => async dispatch => {
  try {
    dispatch(actions.login());
    const response = await signUp(Nickname, Password, Email);
    localStorage.setItem("token", response.data.token);
    await dispatch(actions.loginSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(actions.loginFailure(error.response.data.msg));
    } else {
      dispatch(actions.loginFailure("Internal server error"));
    }
  }
};

export const deleteUser = () => async dispatch => {
  try {
    await deleteAccount();
    dispatch(enableToast("DELETE"));
    dispatch(actions.logout());
  } catch (error) {
    if (error.response) {
      dispatch(actions.changePasswordFailure(error.response.data.msg));
    } else {
      dispatch(actions.changePasswordFailure("Internal server error"));
    }
  }
};

export const changePassword = (password, newPassword) => async dispatch => {
  try {
    dispatch(actions.changePassword());
    await passwordChange(password, newPassword);
    dispatch(actions.changePasswordSuccess());
    dispatch(enableToast("CHANGE"));
    dispatch(actions.clearErrors());
  } catch (error) {
    if (error.response) {
      dispatch(actions.changePasswordFailure(error.response.data.msg));
    } else {
      dispatch(actions.changePasswordFailure("Internal server error"));
    }
  }
};
