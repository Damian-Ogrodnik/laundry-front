import * as types from "./userTypes";

const initialState = {
  logged: false,
  user: null,
  loading: false,
  error: null,
  deleted: false
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
    case types.LOGOUT:
      return {
        ...state,
        error: null,
        user: null,
        logged: false,
        loading: false
      };
    case types.DELETE_ACCOUNT:
      return {
        ...state,
        deleted: true
      };

    case types.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    case types.RESET: {
      return {
        logged: false,
        user: null,
        loading: false,
        error: null,
        deleted: false
      };
    }

    default:
      return state;
  }
};

export default userReducer;
