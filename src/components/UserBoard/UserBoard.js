import React from "react";
import { useSelector } from "react-redux";

import { Datepicker } from "../Datepicker";
import { Logout } from "../Logout";
import { Booking } from "../Booking";

export const UserBoard = () => {
  const fetchError = useSelector(state => state.board.error);
  const loading = useSelector(state => state.board.loading);
  return (
    <div className="userboard__wrapper">
      <Datepicker />
      <Booking error={fetchError} loading={loading} />
      <Logout />
    </div>
  );
};
