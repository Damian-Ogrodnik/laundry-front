import * as actions from "./userActions";

import { signIn } from "../../services/User";

export const logUser = (name, password) => async dispatch => {
  try {
    dispatch(actions.login());
    let user = await signIn(name, password);
    dispatch(actions.loginSuccess(user));
  } catch (error) {
    console.log(error);
    dispatch(actions.loginFailure(error));
  }
};
