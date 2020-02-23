import * as actions from "./userBookingsActions";

import { fetchUserBookings } from "../../services/Booking";

export const getUsersBookings = () => async dispatch => {
  try {
    dispatch(actions.fetchUserBookings());
    const response = await fetchUserBookings().catch(() => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.fetchUserBookingsSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchUserBookingsFailure(error.message));
  }
};
