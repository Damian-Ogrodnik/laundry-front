import * as types from "./bookingTypes";

export const startBooking = () => {
  return {
    type: types.START_BOOKING
  };
};

export const bookingSuccess = bookedSlot => {
  return {
    type: types.BOOKING_SUCCESS,
    payload: { bookedSlot }
  };
};

export const bookingFailure = error => {
  return {
    type: types.BOOKING_FAILURE,
    payload: { error }
  };
};

export const resetCurrentBooking = () => {
  return {
    type: types.RESET_BOOKING
  };
};
