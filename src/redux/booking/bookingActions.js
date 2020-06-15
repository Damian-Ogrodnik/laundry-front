import * as types from "./bookingTypes";

export const startBooking = () => ({
  type: types.START_BOOKING,
});

export const bookingSuccess = (bookedSlot) => ({
  type: types.BOOKING_SUCCESS,
  payload: { bookedSlot },
});

export const bookingFailure = (error) => ({
  type: types.BOOKING_FAILURE,
  payload: { error },
});

export const resetCurrentBooking = () => ({
  type: types.RESET_BOOKING,
});
