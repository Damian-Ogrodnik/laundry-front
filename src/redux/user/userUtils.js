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
  Nickname,
  Password,
  Email
}) => async dispatch => {
  try {
    dispatch(actions.login());
    const response = await signUp(Nickname, Password, Email).catch(err => {
      if (err.response.status === 500) {
        throw new Error("Name or email has already been taken");
      } else {
        throw new Error("Internal Server Error");
      }
    });
    localStorage.setItem("token", response.data.token);
    await dispatch(actions.loginSuccess(response));
  } catch (error) {
    dispatch(actions.loginFailure("Internal Server Error"));
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
