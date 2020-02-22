import * as actions from "./boardActions";

import { standarizeDate, fetchBookings } from "../../services/Booking";

export const fetchDate = (date, standarized = false) => async dispatch => {
  try {
    if (!standarized) date = await standarizeDate(date);
    dispatch(actions.setDate(date));
    const response = await fetchBookings(date).catch(err => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.getSlotsSuccess(response.data.booking.slots));
  } catch (error) {
    dispatch(actions.getSlotsFailure(error.message));
  }
};
