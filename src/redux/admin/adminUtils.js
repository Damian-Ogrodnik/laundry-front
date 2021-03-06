import * as actions from "./adminActions";

import * as services from "services/Admin";
import { enableToast } from "redux/toast/toastActions";
import { fetchDate } from "../board/boardUtils";
import { sortByDates } from "services/Date";

export const bookSelectedSlot = (name, date, number, hours) => async (
  dispatch
) => {
  try {
    dispatch(actions.startBookSlot());
    const response = await services.bookSlot({ name, date, number, hours });
    dispatch(actions.bookSlotSuccess(response.data));
    dispatch(enableToast("BOOK"));
    dispatch(fetchDate(date, true));
  } catch (error) {
    if (error.response) {
      dispatch(actions.bookSlotFailure(error.response.data.msg));
      dispatch(enableToast("ERROR"));
    } else {
      dispatch(actions.bookSlotFailure("Internal server error"));
      dispatch(enableToast("ERROR"));
    }
  }
};

export const changeUserPassword = (id, newPassword) => async (dispatch) => {
  try {
    dispatch(actions.startChangePassword());
    await services.changePassword(id, newPassword);
    dispatch(actions.changePasswordSuccess());
    dispatch(enableToast("CHANGE"));
  } catch (error) {
    dispatch(actions.changePasswordFailure(error.message));
  }
};

export const deleteSelectedSlot = (date, slotId, isAdmin, userId) => async (
  dispatch
) => {
  try {
    dispatch(actions.startDeleteSlot());
    await services.deleteSlot(slotId);
    dispatch(actions.deleteSlotSuccess());
    dispatch(enableToast("DELETE"));
    return isAdmin
      ? dispatch(getUserBookings(userId))
      : dispatch(fetchDate(date, true));
  } catch (error) {
    if (error.response) {
      dispatch(actions.deleteSlotFailure(error.response.statusText));
      dispatch(enableToast("ERROR"));
    } else {
      dispatch(actions.deleteSlotFailure("Internal server error"));
      dispatch(enableToast("ERROR"));
    }
  }
};

export const getDetails = (id) => async (dispatch) => {
  try {
    await dispatch(actions.startGetDetails());
    const response = await services.fetchDetails(id).catch(() => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.getDetailsSuccess(response.data));
  } catch (error) {
    dispatch(actions.getDetailsFailure(error.message));
  }
};

export const getUsers = (name = "") => async (dispatch) => {
  try {
    await dispatch(actions.startGetUsers());
    const response = await services.fetchUsers(name).catch(() => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.getUsersSuccess(response.data));
  } catch (error) {
    dispatch(actions.getUsersFailure(error.message));
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    await dispatch(actions.startGetUser());
    const response = await services.fetchUser(id).catch(() => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.getUserSuccess(response.data));
  } catch (error) {
    dispatch(actions.getUserFailure(error.message));
  }
};

export const getUserBookings = (id) => async (dispatch) => {
  try {
    await dispatch(actions.startGetUserBookings());
    const response = await services.fetchUserBookings(id).catch(() => {
      throw new Error("Internal Server Error");
    });
    const sortedResponse = await sortByDates(response.data);
    dispatch(actions.getUserBookingsSuccess(sortedResponse));
  } catch (error) {
    dispatch(actions.getUserBookingsFailure(error.message));
  }
};

export const handleBlockStatus = (id, isBlocked) => async (dispatch) => {
  try {
    await dispatch(actions.startHandleBlock());
    await services.handleBlock(id, isBlocked);
    await dispatch(actions.handleBlockSuccess());
  } catch (error) {
    dispatch(actions.handleBlockFailure(error.message));
  }
};
