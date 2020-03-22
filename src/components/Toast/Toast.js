import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { activateToast } from "../../redux/toast/toastActions";
import { resetToast } from "../../redux/toast/toastActions";

export const Toast = ({ text, action }) => {
  const displayToast = useSelector(state => state.toast.displayToast);
  const toastActive = useSelector(state => state.toast.toastActive);
  const dispatch = useDispatch();

  const notify = () => {
    toast.warn(text, {
      position: "top-right",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      onOpen: () => dispatch(activateToast()),
      onClose: () => dispatch(resetToast())
    });
  };
  return <>{!toastActive && displayToast ? notify() : null}</>;
};
