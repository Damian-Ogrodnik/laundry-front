import * as types from "./boardTypes";

export const setDate = date => {
  return {
    type: types.SET_DATE,
    payload: { date }
  };
};

export const setError = error => {
  return {
    type: types.SET_ERROR,
    payload: { error }
  };
};

export const setBookings = bookings => {
  return {
    type: types.SET_BOOKINGS,
    payload: { bookings }
  };
};

export const resetBookings = () => {
  return {
    type: types.RESET_BOOKINGS
  };
};

export const selectSlot = slotNumber => {
  return {
    type: types.SELECT_SLOT,
    payload: { slotNumber }
  };
};
