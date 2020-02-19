import * as types from "./boardTypes";

const initialState = {
  date: null,
  error: null,
  bookings: null,
  selectedSlot: null
};

const boardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_DATE:
      return {
        ...state,
        date: payload.date
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: payload.error,
        bookings: null
      };
    case types.SET_BOOKINGS:
      return {
        ...state,
        error: null,
        bookings: payload.bookings
      };
    case types.SELECT_SLOT:
      return {
        ...state,
        selectedSlot: payload.slotNumber
      };
    case types.RESET_BOOKINGS:
      return {
        ...state,
        error: null,
        bookings: null,
        selectedSlot: null
      };
    default:
      return state;
  }
};

export default boardReducer;
