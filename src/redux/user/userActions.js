import * as types from "./userTypes";

export const login = () => {
  return {
    type: types.LOGIN
  };
};

export const loginSuccess = user => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: { user }
  };
};

export const loginFailure = error => {
  return {
    type: types.LOGIN_FAILURE,
    payload: { error }
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
