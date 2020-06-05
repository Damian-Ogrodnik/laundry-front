import React from "react";
import { useSelector } from "react-redux";

import { Booking } from "components/Booking";
import { Datepicker } from "components/Datepicker";
import { Logout } from "components/Logout";

export const BookingBoard = () => {
  const { error, loading } = useSelector((state) => state.board);
  return (
    <div className="booking-board__wrapper">
      <Datepicker name="booking-board" />
      <Booking error={error} loading={loading} />
      <Logout />
    </div>
  );
};
