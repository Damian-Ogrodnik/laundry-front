import * as types from "./userTypes";

const initialState = {
  error: null,
  loading: false,
  logged: false,
  id: null,
  isAdmin: false,
  name: null,
  token: null,
  user: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        id: payload.id,
        name: payload.name,
        isAdmin: payload.admin,
        loading: false,
        logged: true
      };
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
        user: {},
        logged: false,
        loading: false,
        id: null,
        name: null,
        token: null,
        isAdmin: false
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
