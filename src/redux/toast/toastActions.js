import * as types from "./toastTypes";

export const enableToast = type => {
  return {
    type: types.ENABLE_TOAST,
    payload: { type }
  };
};

export const activateToast = () => {
  return {
    type: types.ACTIVE_TOAST
  };
};

export const resetToast = () => {
  return {
    type: types.DISABLE_TOAST
  };
};
