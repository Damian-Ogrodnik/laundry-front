import * as types from "./adminTypes";

export const chooseSlot = (choosedSlot) => ({
  type: types.CHOOSE_SLOT,
  payload: choosedSlot,
});

export const startChangePassword = () => ({
  type: types.CHANGE_PASSWORD_START,
});

export const changePasswordFailure = (error) => ({
  type: types.CHANGE_PASSWORD_FAILURE,
  payload: { error },
});

export const changePasswordSuccess = () => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
});

export const startBookSlot = () => ({
  type: types.BOOK_SLOT_START,
});

export const bookSlotFailure = (error) => ({
  type: types.BOOK_SLOT_FAILURE,
  payload: { error },
});

export const bookSlotSuccess = () => ({
  type: types.BOOK_SLOT_SUCCESS,
});

export const startDeleteSlot = () => ({
  type: types.DELETE_SLOT_START,
});

export const deleteSlotFailure = (error) => ({
  type: types.DELETE_SLOT_FAILURE,
  payload: { error },
});

export const deleteSlotSuccess = () => ({
  type: types.DELETE_SLOT_SUCCESS,
});

export const startGetDetails = () => ({
  type: types.GET_DETAILS_START,
});

export const getDetailsFailure = (error) => ({
  type: types.GET_DETAILS_FAILURE,
  payload: { error },
});

export const getDetailsSuccess = (details) => ({
  type: types.GET_DETAILS_SUCCESS,
  payload: { ...details },
});

export const startGetUsers = () => ({
  type: types.GET_USERS_START,
});

export const getUsersFailure = (error) => ({
  type: types.GET_USERS_FAILURE,
  payload: { error },
});

export const getUsersSuccess = (users) => ({
  type: types.GET_USERS_SUCCESS,
  payload: { users },
});

export const startGetUser = () => ({
  type: types.GET_USER_START,
});

export const getUserFailure = (error) => ({
  type: types.GET_USER_FAILURE,
  payload: { error },
});

export const getUserSuccess = (user) => ({
  type: types.GET_USER_SUCCESS,
  payload: { user },
});

export const startGetUserBookings = () => ({
  type: types.GET_BOOKINGS_START,
});

export const getUserBookingsFailure = (error) => ({
  type: types.GET_BOOKINGS_FAILURE,
  payload: { error },
});

export const getUserBookingsSuccess = (userBookings) => ({
  type: types.GET_BOOKINGS_SUCCESS,
  payload: { userBookings },
});

export const startHandleBlock = () => ({
  type: types.HANDLE_BLOCK_START,
});

export const handleBlockSuccess = (error) => ({
  type: types.HANDLE_BLOCK_SUCCESS,
  payload: { error },
});

export const handleBlockFailure = (userBookings) => ({
  type: types.HANDLE_BLOCK_FAILURE,
});
