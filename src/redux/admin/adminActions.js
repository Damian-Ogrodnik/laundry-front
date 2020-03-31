import * as types from "./adminTypes";

export const chooseSlot = choosedSlot => {
  return {
    type: types.CHOOSE_SLOT,
    payload: choosedSlot
  };
};
