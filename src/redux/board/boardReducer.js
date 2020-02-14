import * as types from "./boardTypes";

const initialState = {
  date: null
};

const boardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_DATE:
      return {
        ...state,
        date: payload.date
      };
    default:
      return state;
  }
};

export default boardReducer;
