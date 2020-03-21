import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const Toast = ({ text, action }) => {
  const dispatch = useDispatch();
  const notify = () => {
    toast.warn(text, {
      position: "top-right",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      onClose: () => dispatch(action())
    });
  };
  return <>{notify()}</>;
};
