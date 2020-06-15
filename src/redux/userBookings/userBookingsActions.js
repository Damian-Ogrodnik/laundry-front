import * as types from "./userBookingsTypes";

export const fetchUserBookings = () => ({
  type: types.FETCH_BOOKINGS,
});

export const fetchUserBookingsSuccess = (userBookings) => ({
  type: types.FETCH_BOOKINGS_SUCCESS,
  payload: { userBookings },
});

export const fetchUserBookingsFailure = (error) => ({
  type: types.FETCH_BOOKINGS_FAILURE,
  payload: { error },
});

export const deleteUserBooking = () => ({
  type: types.DELETE_BOOKING,
});

export const deleteUserBookingSuccess = () => ({
  type: types.DELETE_BOOKING_SUCCESS,
});

export const deleteUserBookingFailure = (error) => ({
  type: types.DELETE_BOOKING_FAILURE,
  payload: { error },
});
