import * as actions from "./adminActions";

import { fetchDate } from "../board/boardUtils";
import { bookSlot } from "../../services/Admin";
import { enableToast } from "../../redux/toast/toastActions";

export const bookSelectedSlot = (
  name,
  date,
  number,
  hours
) => async dispatch => {
  try {
    dispatch(actions.startBookSlot());
    const response = await bookSlot({ name, date, number, hours });
    dispatch(actions.bookSlootSucces(response.data));
    dispatch(enableToast("BOOK"));
    dispatch(fetchDate(date, true));
  } catch (error) {
    if (error.response) {
      dispatch(actions.bookSlootFailure(error.response.data.msg));
      dispatch(enableToast("ERROR"));
    } else {
      dispatch(actions.bookSlootFailure("Internal server error"));
      dispatch(enableToast("ERROR"));
    }
  }
};
