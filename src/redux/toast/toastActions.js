import * as types from "./toastTypes";

export const enableToast = (type) => ({
  type: types.ENABLE_TOAST,
  payload: { type },
});

export const activateToast = () => ({
  type: types.ACTIVE_TOAST,
});

export const resetToast = () => ({
  type: types.DISABLE_TOAST,
});
