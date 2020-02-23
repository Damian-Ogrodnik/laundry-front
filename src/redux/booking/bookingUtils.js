import * as actions from "./bookingActions";

import { bookSlot } from "../../services/Booking";

export const bookSelectedSlot = (date, selectedSlot) => async dispatch => {
  try {
    dispatch(actions.startBooking());
    const response = await bookSlot(date, selectedSlot).catch(err => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.bookingSuccess(response.data));
  } catch (error) {
    dispatch(actions.bookingFailure(error.message));
  }
};
