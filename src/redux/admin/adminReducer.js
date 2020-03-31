import * as types from "./adminTypes";

const initialState = {
  choosedSlot: null
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHOOSE_SLOT:
      return { ...state, choosedSlot: payload.choosedSlot };
    default:
      return state;
  }
};

export default adminReducer;
