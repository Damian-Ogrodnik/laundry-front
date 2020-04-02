import * as types from "./adminTypes";

const initialState = {
  loading: false,
  error: null,
  bookedSlot: null,
  choosedSlot: {}
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHOOSE_SLOT:
      return { ...state, choosedSlot: { ...payload } };
    case types.BOOK_SLOT_START:
      return { ...state, loading: true, error: null };
    case types.BOOK_SLOT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        bookedSlot: payload.bookedSlot
      };
    case types.BOOK_SLOT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

export default adminReducer;
