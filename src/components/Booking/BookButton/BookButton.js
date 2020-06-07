import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { bookSelectedSlot } from "redux/booking/bookingUtils";
import { bookingFailure } from "redux/booking/bookingActions";

export const BookButton = () => {
  const { date, selectedSlot } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const bookSlot = async () => {
    if (!selectedSlot)
      return dispatch(bookingFailure("You have to select slot before book..."));
    dispatch(bookSelectedSlot(date, selectedSlot));
  };

  return (
    <button className="booking__button" onClick={() => bookSlot()}>
      BOOK
    </button>
  );
};
