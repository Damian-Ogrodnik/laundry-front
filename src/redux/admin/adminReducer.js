import * as types from "./adminTypes";

const initialState = {
  choosedSlot: {},
  error: null,
  details: {},
  loading: false,
  users: null,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.BOOK_SLOT_START ||
      types.DELETE_SLOT_START ||
      types.GET_DETAILS_START ||
      types.GET_USERS_START:
      return { ...state, loading: true, error: null };
    case types.BOOK_SLOT_FAILURE ||
      types.DELETE_SLOT_FAILURE ||
      types.GET_DETAILS_FAILURE ||
      types.GET_USERS_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    case types.BOOK_SLOT_SUCCESS || types.DELETE_SLOT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case types.GET_DETAILS_SUCCESS:
      return {
        ...state,
        details: { ...payload },
        error: null,
        loading: false,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload.users,
        error: null,
        loading: false,
      };
    case types.CHOOSE_SLOT:
      return { ...state, choosedSlot: { ...payload } };
    default:
      return state;
  }
};

export default adminReducer;
