import * as types from "./boardTypes";

export const setDate = date => {
  return {
    type: types.SET_DATE,
    payload: { date }
  };
};
