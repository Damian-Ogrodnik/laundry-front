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

export const bookSlotFailure = (error) => {
  return {
    type: types.BOOK_SLOT_FAILURE,
    payload: { error },
  };
};

export const bookSlotSuccess = () => {
  return {
    type: types.BOOK_SLOT_SUCCESS,
  };
};

export const startDeleteSlot = () => {
  return {
    type: types.DELETE_SLOT_START,
  };
};

export const deleteSlotFailure = (error) => {
  return {
    type: types.DELETE_SLOT_FAILURE,
    payload: { error },
  };
};

export const deleteSlotSuccess = () => {
  return {
    type: types.DELETE_SLOT_SUCCESS,
  };
};

export const startGetDetails = () => {
  return {
    type: types.GET_DETAILS_START,
  };
};

export const getDetailsFailure = (error) => {
  return {
    type: types.GET_DETAILS_FAILURE,
    payload: { error },
  };
};

export const getDetailsSuccess = (details) => {
  return {
    type: types.GET_DETAILS_SUCCESS,
    payload: { ...details },
  };
};

export const startGetUsers = () => {
  return {
    type: types.GET_USERS_START,
  };
};

export const getUsersFailure = (error) => {
  return {
    type: types.GET_USERS_FAILURE,
    payload: { error },
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: types.GET_USERS_SUCCESS,
    payload: { users },
  };
};

export const startGetUser = () => {
  return {
    type: types.GET_USER_START,
  };
};

export const getUserFailure = (error) => {
  return {
    type: types.GET_USER_FAILURE,
    payload: { error },
  };
};

export const getUserSuccess = (user) => {
  return {
    type: types.GET_USER_SUCCESS,
    payload: { user },
  };
};
