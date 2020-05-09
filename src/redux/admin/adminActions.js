import * as types from "./adminTypes";

export const chooseSlot = (choosedSlot) => {
  return {
    type: types.CHOOSE_SLOT,
    payload: choosedSlot,
  };
};

export const startBookSlot = () => {
  return {
    type: types.BOOK_SLOT_START,
  };
};

export const bookSlotSuccess = () => {
  return {
    type: types.BOOK_SLOT_SUCCESS,
  };
};

export const bookSlotFailure = (error) => {
  return {
    type: types.BOOK_SLOT_FAILURE,
    payload: { error },
  };
};

export const startDeleteSlot = () => {
  return {
    type: types.DELETE_SLOT_START,
  };
};

export const deleteSlotSuccess = () => {
  return {
    type: types.DELETE_SLOT_SUCCESS,
  };
};

export const deleteSlotFailure = (error) => {
  return {
    type: types.DELETE_SLOT_FAILURE,
    payload: { error },
  };
};

export const startGetDetails = () => {
  return {
    type: types.GET_DETAILS_START,
  };
};

export const getDetailsSuccess = (details) => {
  return {
    type: types.GET_DETAILS_SUCCESS,
    payload: { ...details },
  };
};

export const getDetailsFailure = (error) => {
  return {
    type: types.GET_DETAILS_FAILURE,
    payload: { error },
  };
};
