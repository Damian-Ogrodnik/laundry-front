import * as types from "./adminTypes";

export const chooseSlot = choosedSlot => {
  return {
    type: types.CHOOSE_SLOT,
    payload: choosedSlot
  };
};

export const startBookSlot = () => {
  return {
    type: types.BOOK_SLOT_START
  };
};

export const bookSlootSucces = bookedSloot => {
  return {
    type: types.BOOK_SLOT_SUCCESS,
    payload: { bookedSloot }
  };
};

export const bookSlootFailure = error => {
  return {
    type: types.BOOK_SLOT_FAILURE,
    payload: { error }
  };
};
