import * as types from "./userTypes";

export const login = () => ({
  type: types.LOGIN,
});

export const loginSuccess = ({ token, id, name, admin }) => ({
  type: types.LOGIN_SUCCESS,
  payload: { token, id, name, admin },
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: { error },
});

export const changePassword = () => ({
  type: types.CHANGE_PASSWORD,
});

export const changePasswordSuccess = () => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFailure = (error) => ({
  type: types.CHANGE_PASSWORD_FAILURE,
  payload: { error },
});
export const logout = () => ({
  type: types.LOGOUT,
});

export const clearErrors = () => ({
  type: types.CLEAR_ERRORS,
});
