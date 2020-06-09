import * as actions from "./userBookingsActions";

import { fetchUserBookings, deleteSlot } from "services/Booking";
import { sortByDates } from "services/Date";
import { fetchDate } from "../board/boardUtils";
import { enableToast } from "../toast/toastActions";

export const getUsersBookings = () => async (dispatch) => {
  try {
    dispatch(actions.fetchUserBookings());
    const response = await fetchUserBookings();
    let sortedResponse = await sortByDates(response.data);
    dispatch(actions.fetchUserBookingsSuccess(sortedResponse));
  } catch (error) {
    if (error.response) {
      dispatch(actions.deleteUserBookingFailure(error.response.data.msg));
    } else {
      dispatch(actions.deleteUserBookingFailure("Internal server error"));
    }
  }
};

export const deleteUsersBooking = (
  date,
  id,
  requestFromBoardSlot = false
) => async (dispatch) => {
  try {
    await dispatch(actions.deleteUserBooking());
    await deleteSlot(date, id);
    await dispatch(actions.deleteUserBookingSuccess());
    if (requestFromBoardSlot) {
      await dispatch(enableToast("CANCEL"));
      dispatch(fetchDate(date, true));
    } else {
      dispatch(getUsersBookings());
    }
  } catch (error) {
    if (error.response) {
      dispatch(actions.deleteUserBookingFailure(error.response.data.msg));
    } else {
      dispatch(actions.deleteUserBookingFailure("Internal server error"));
    }
  }
};
