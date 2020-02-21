import * as actions from "./boardActions";

import { standarizeDate, fetchBookings } from "../../services/Booking";

export const fetchDate = date => async dispatch => {
  try {
    const standardDate = await standarizeDate(date);
    dispatch(actions.setDate(standardDate));
    const response = await fetchBookings(standardDate).catch(err => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.getSlotsSuccess(response.data.booking.slots));
  } catch (error) {
    dispatch(actions.getSlotsFailure(error.message));
  }
};
