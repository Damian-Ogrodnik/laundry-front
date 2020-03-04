import * as actions from "./userBookingsActions";

import { fetchUserBookings, deleteSlot } from "../../services/Booking";
import { sortByDates } from "../../services/Date";

export const getUsersBookings = () => async dispatch => {
  try {
    dispatch(actions.fetchUserBookings());
    const response = await fetchUserBookings().catch(() => {
      throw new Error("Internal Server Error");
    });
    let sortedResponse = await sortByDates(response.data);
    dispatch(actions.fetchUserBookingsSuccess(sortedResponse));
  } catch (error) {
    dispatch(actions.fetchUserBookingsFailure(error.message));
  }
};

export const deleteUsersBooking = (date, id) => async dispatch => {
  try {
    await dispatch(actions.deleteUserBooking());
    await deleteSlot(date, id).catch(() => {
      throw new Error("Internal Server Error");
    });
    await dispatch(actions.deleteUserBookingSuccess());
    dispatch(getUsersBookings());
  } catch (error) {
    dispatch(actions.deleteUserBookingFailure(error.message));
  }
};
