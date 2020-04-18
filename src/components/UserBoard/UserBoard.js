import React from "react";
import { useSelector } from "react-redux";

import { Datepicker } from "../Datepicker";
import { Logout } from "../Logout";
import { Booking } from "../Booking";

export const UserBoard = () => {
  const { error, loading } = useSelector((state) => state.board);
  return (
    <div className="userboard__wrapper">
      <Datepicker name="userboard" />
      <Booking error={error} loading={loading} />
      <Logout />
    </div>
  );
};
