import * as actions from "./boardActions";

import { standarizeDate } from "../../services/Date";
import { fetchBookings } from "../../services/Booking";

export const fetchDate = (date, standarized = false) => async dispatch => {
  try {
    if (!standarized) date = await standarizeDate(date);
    await dispatch(actions.setDate(date));
    const response = await fetchBookings(date).catch(err => {
      throw new Error("Internal Server Error");
    });
    console.log(response.data);
    dispatch(actions.getSlotsSuccess(response.data.slots));
  } catch (error) {
    dispatch(actions.getSlotsFailure(error.message));
  }
};
