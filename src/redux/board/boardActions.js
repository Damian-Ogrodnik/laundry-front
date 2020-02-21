import * as types from "./boardTypes";

export const setDate = date => {
  return {
    type: types.SET_DATE,
    payload: { date }
  };
};

export const getSlotsFailure = error => {
  return {
    type: types.GET_SLOTS_FAILURE,
    payload: { error }
  };
};

export const getSlotsSuccess = takenSlots => {
  return {
    type: types.GET_SLOTS_SUCCESS,
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
