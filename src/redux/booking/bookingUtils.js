import * as actions from "./bookingActions";

import { bookSlot } from "../../services/Booking";
import { enableToast } from "../../redux/toast/toastActions";

export const bookSelectedSlot = (date, selectedSlot) => async dispatch => {
  try {
    dispatch(actions.startBooking());
    const response = await bookSlot(date, selectedSlot);
    dispatch(actions.bookingSuccess(response.data));
    dispatch(enableToast("BOOK"));
  } catch (error) {
    if (error.response) {
      dispatch(actions.bookingFailure(error.response.data.msg));
    } else {
      dispatch(actions.bookingFailure("Internal server error"));
    }
  }
};
