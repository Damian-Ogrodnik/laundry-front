import * as types from "./adminTypes";

const initialState = {
  choosedSlot: {},
  error: null,
  details: {},
  loading: false,
  user: [],
  userBookings: [],
  users: [],
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.BOOK_SLOT_START ||
      types.DELETE_SLOT_START ||
      types.GET_DETAILS_START ||
      types.GET_USERS_START ||
      types.GET_USER_START ||
      types.GET_BOOKINGS_START ||
      types.CHANGE_PASSWORD_START ||
      types.HANDLE_BLOCK_START:
      return { ...state, loading: true, error: null };
    case types.BOOK_SLOT_FAILURE ||
      types.DELETE_SLOT_FAILURE ||
      types.GET_DETAILS_FAILURE ||
      types.GET_USERS_FAILURE ||
      types.GET_USER_FAILURE ||
      types.GET_BOOKINGS_FAILURE ||
      types.CHANGE_PASSWORD_FAILURE ||
      types.HANDLE_BLOCK_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    case types.BOOK_SLOT_SUCCESS ||
      types.DELETE_SLOT_SUCCESS ||
      types.CHANGE_PASSWORD_SUCCESS ||
      types.HANDLE_BLOCK_SUCCESS:
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
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        error: null,
        loading: false,
      };
    case types.GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        userBookings: payload.userBookings,
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
