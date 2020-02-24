import * as actions from "./userBookingsActions";

import { fetchUserBookings } from "../../services/Booking";
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
