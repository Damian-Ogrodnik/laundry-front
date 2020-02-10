import * as types from "./userTypes";

export const login = () => {
  return {
    type: types.LOGIN
  };
};

export const loginSuccess = user => {
  return {
    type: types.LOGIN,
    payload: { user }
  };
};

export const loginFailure = error => {
  return {
    type: types.LOGIN,
    payload: { error }
  };
};
