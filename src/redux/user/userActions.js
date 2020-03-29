import * as types from "./userTypes";

export const login = () => {
  return {
    type: types.LOGIN
  };
};

export const loginSuccess = ({ token, id, name, admin }) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: { token, id, name, admin }
  };
};

export const loginFailure = error => {
  return {
    type: types.LOGIN_FAILURE,
    payload: { error }
  };
};

export const changePassword = () => {
  return {
    type: types.CHANGE_PASSWORD
  };
};

export const changePasswordSuccess = () => {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS
  };
};

export const changePasswordFailure = error => {
  return {
    type: types.CHANGE_PASSWORD_FAILURE,
    payload: { error }
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS
  };
};
