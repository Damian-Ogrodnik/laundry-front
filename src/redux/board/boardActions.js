import * as types from "./boardTypes";

export const setDate = (date) => ({
  type: types.SET_DATE,
  payload: { date },
});

export const getSlotsFailure = (error) => ({
  type: types.GET_SLOTS_FAILURE,
  payload: { error },
});

export const getSlotsSuccess = (takenSlots) => ({
  type: types.GET_SLOTS_SUCCESS,
  payload: { takenSlots },
});

export const resetBookings = () => ({
  type: types.RESET_BOOKINGS,
});

export const selectSlot = (slotNumber) => ({
  type: types.SELECT_SLOT,
  payload: { slotNumber },
});
