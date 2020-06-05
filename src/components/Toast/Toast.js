import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { activateToast, resetToast } from "redux/toast/toastActions";

export const Toast = ({ text, toastType }) => {
  const { toastActive, type } = useSelector(({ toast }) => toast);
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
      onClose: () => dispatch(resetToast()),
    });
  };
  return <>{!toastActive && toastType === type ? notify() : null}</>;
};
