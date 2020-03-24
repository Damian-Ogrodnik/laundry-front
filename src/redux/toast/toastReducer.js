import * as types from "./toastTypes";

const initialState = {
  toastActive: false,
  type: undefined
};

const toastReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ENABLE_TOAST:
      return { ...state, type: payload.type };
    case types.ACTIVE_TOAST:
      return { ...state, toastActive: true };
    case types.DISABLE_TOAST:
      return { toastActive: false, type: undefined };
    default:
      return state;
  }
};

export default toastReducer;
