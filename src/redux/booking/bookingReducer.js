import * as types from "./bookingTypes";

const initialState = {
  bookedSlot: null,
  error: false,
  loading: false,
};

const bookingReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.START_BOOKING:
      return { ...state, loading: true };
    case types.BOOKING_FAILURE:
      return { ...state, error: payload.error, loading: false };
    case types.BOOKING_SUCCESS:
      return {
        ...state,
        bookedSlot: payload.bookedSlot,
        loading: false,
      };
    case types.RESET_BOOKING:
      return { ...state, bookedSlot: null, error: false, loading: false };
    default:
      return state;
  }
};

export default bookingReducer;
