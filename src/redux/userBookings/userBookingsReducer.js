import * as types from "./userBookingsTypes";

const initialState = {
  loading: false,
  error: false,
  userBookings: null
};

const userBookingsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.FETCH_BOOKINGS:
      return { ...state, error: false, loading: true, userBookings: null };
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
        userBookings: null
      };
    default:
      return state;
  }
};

export default userBookingsReducer;
