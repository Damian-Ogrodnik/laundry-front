import * as types from "./adminTypes";

const initialState = {
  choosedSlot: {}
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHOOSE_SLOT:
      return { ...state, choosedSlot: { ...payload } };
    default:
      return state;
  }
};

export default adminReducer;
