import * as actions from "./userActions";

import signIn from "../../services/User";

export const logUser = (name, password) => async dispatch => {
  try {
    dispatch(actions.login());
    const user = await signIn(name, password);
    if (user.message) return dispatch(actions.loginFailure(user.message));
    await dispatch(actions.loginSuccess(user));
  } catch (error) {
    dispatch(actions.loginFailure(error));
  }
};
