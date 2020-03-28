import * as types from "./userTypes";

const initialState = {
  logged: false,
  user: null,
  loading: false,
  error: null,
  isAdmin: true
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, user: payload.user, loading: false, logged: true };
    case types.LOGIN_FAILURE:
      return { ...state, error: payload.error, loading: false };
    case types.CHANGE_PASSWORD:
      return { ...state, loading: true };
    case types.CHANGE_PASSWORD_SUCCESS:
      return { ...state, loading: false, error: null };
    case types.CHANGE_PASSWORD_FAILURE:
      return { ...state, loading: false, error: payload.error };
    case types.LOGOUT:
      return {
        ...state,
        error: null,
        user: null,
        logged: false,
        loading: false
      };

    case types.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

export default userReducer;
