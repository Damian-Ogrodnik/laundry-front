import * as types from "./toastTypes";

const initialState = {
  displayToast: false,
  toastActive: false
};

const toastReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.ENABLE_TOAST:
      return { ...state, displayToast: true };
    case types.ACTIVE_TOAST:
      return { ...state, toastActive: true };
    case types.DISABLE_TOAST:
      return { displayToast: false, toastActive: false };
    default:
      return state;
  }
};

export default toastReducer;
