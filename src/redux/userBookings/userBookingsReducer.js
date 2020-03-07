import * as types from "./userBookingsTypes";

const initialState = {
  loading: false,
  error: false,
  userBookings: []
};

const userBookingsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.FETCH_BOOKINGS:
      return { ...state, error: false, loading: true, userBookings: [] };
    case types.FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        userBookings: payload.userBookings
      };
    case types.FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
        userBookings: []
      };
    case types.DELETE_BOOKING:
      return { ...state, error: false, loading: true };
    case types.DELETE_BOOKING_SUCCESS:
      return { ...state, error: false, loading: false };
    case types.DELETE_BOOKING_FAILURE:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

export default userBookingsReducer;
