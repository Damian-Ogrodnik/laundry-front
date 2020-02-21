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

export const getTakenSlots = takenSlots => {
  return {
    type: types.SET_TAKEN_SLOTS,
    payload: { takenSlots }
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
