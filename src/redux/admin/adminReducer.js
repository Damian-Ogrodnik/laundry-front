import * as types from "./adminTypes";

const initialState = {
  loading: false,
  error: null,
  choosedSlot: {},
  details: {},
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
      };
    case types.BOOK_SLOT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case types.DELETE_SLOT_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case types.DELETE_SLOT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case types.DELETE_SLOT_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    case types.GET_DETAILS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case types.GET_DETAILS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        details: { ...payload },
      };
    case types.GET_DETAILS_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
