import * as types from "./toastTypes";

export const enableToast = () => {
  return {
    type: types.ENABLE_TOAST
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
